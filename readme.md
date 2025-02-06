# `phonology`

> A Typescript API for specifying and executing phonological transformation rules on IPA strings.

  - A [feature-based](https://en.wikipedia.org/wiki/Distinctive_feature) API for describing, specifying, modifying, and working with phonological symbols.
  - Apply phonological rules to IPA strings, including diacritics and other symbols.
  - Create rule-sets with advanced queries, including voicing assimilation, pre-fortis clipping, or syllable-initial aspiration.

## Installation

```bash
npm install phonology
yarn add phonology
```

## Usage

### Applying transformations

To apply a phonological transformation rule-set, use the `Replacer` class.

```ts
import {Replacer, PreFortisClipping, PostNasalisation} from 'phonology';

const replacer = new Replacer(
    [
        PreFortisClipping,
        PostNasalisation
    ]
);

const text = `aɪ laɪk tu iːt ʧiːz.` 

replacer.applyToIpa(text);
// ˈæ˘pəlz ənd nʌ˘̃ts ə ˈjʌmĩ.
```

### Pre-packaged rules

The `phonology` package comes ready with pre-made rules. These are all such that
they could quite simply be implemented yourself using the tools available in the library
(as described below), but come pre-packaged for convenience. These are:

  - `PreFortisClipping` - implements [pre-fortis clipping](https://en.wikipedia.org/wiki/Clipping_(phonetics)#English)
  - `RhoticApproximant` - replaces all instances of /r/ with /ɹ/
  - `LinkingW` - introduces a linking /w/ between /u/ and another vowel
  - `LinkingR` - introduces a linking /ɹ/ between vowels (other than after /u/)
  - `AspiratedStops` - introduces [aspiration](https://en.wikipedia.org/wiki/Aspirated_consonant) at the starts of words and stressed syllables after voiceless stops
  - `DevoicedLiquidsPostStops` - as above, but devoices liquids if they are between the initial stop and the vowel nucleus
  - `Derhoticize` - Removes non-linking /ɹ/
  - `PreNasalisation` - Adds nasalisation diacritics to vowels directly preceding nasals
  - `PostNasalisation` - Adds nasalisation diacritics to vowels directly following nasals

### Defining rules

You can also define your own rules. This package provides an extensive library for doing so.

The basic model is as follows:

```ts
import {SoundSelector} from 'phonology';

const any = SoundSelector.any() // no specific requirements regarding the phoneme to be selected
const soundList = SoundSelector.fromSounds('a', 'i', 'θ') // selects all these specific phonemes
const specifier = SoundSelector.fromSpec({type: PhonemeType.Consonant, isLiquid: true}) // selects all sounds matching these critera 
```

You can then define how you wish your Replacer to modify sounds matching your rule.

```ts
soundList
    .addDebugger((res, phoneme) => console.log(res, phoneme.ipa))
    .updatePhonemes({ voiced: false }) // update certain properties of the underlying phoneme
    .updateModificationStatus({ length: Length.HalfLong }) // update the modifiers on said phoneme, including length, nasalisation, and aspiration
    .addReplacer(phoneme => phoneme.setVoiced(false)) // programmatically change the features
    .addStringReplacer(ipa => `${ipa}w`) // manually edit the IPA (not recommended, unless if inserting sounds or for visualisation)
```

Specifically:

 - Method `updatePhonemes` takes `Partial<PhonemeSpec>`
 - Method `updateModificationStatus` takes `Partial<ModificationStatus>`
 - Method `addReplacer` takes a callback of form `(phoneme: Phoneme[], index: number, list: ContextualizedPhoneme[])`. This allows you to make decisions regarding replacement using the context in which the sound is found in the text, e.g. following or preceeding sounds. It expects back a `ContextualizedPhoneme` instance.
 - Method `addStringReplacer` takes a callback with `(ipa: string, phoneme: Phoneme[], index: number, list: ContextualizedPhoneme[])`, thereby also providing a stringified version to use in returning a new string with which to replace it.
 - Method `addDebugger` takes a callback with `(result: boolean, phoneme: Phoneme[], index: number, list: ContextualizedPhoneme[])`. It allows you to view the result of all queries applied to the phoneme being tested, and whether they passed. It is especially useful when debugging a larger suite of rules, where it may be unclear at what stage a certain modification is/isn't being made. It does not require the callback to return anything, and can be placed anywhere in the call chain.

Of course, in practice, listing sounds or individual features is insufficient for constructing complex rules. To this end, a variety of other methods are provided, which can be chained to produce any desired selection.

#### Binary flag applicators

These queries apply a flag, such as "only at the start of syllables", which reduce the scope of sounds for which the selector should select.

 - `startOfSyllable()` - requires that the phoneme be the first phoneme in its syllable
 - `inStressedSyllable()` - requires that the phoneme be in a syllable indicated as stressed
 - `startOfWord()` - requires that the phoneme be the first phoneme in its word

#### Relative position tests

These queries allow you to test if sounds matching certain properties or other selectors immediately preceed or proceed the phoneme being selected for.

 - `before(selector: SoundSelector)` - requires that the phoneme be followed by a sound that matches the provided selector
 - `beforeSpec(spec: Partial<PhonemeSpec>)` - requires that the phoneme be followed by a sound that matches all features specified in `spec`
 - `before(selector: SoundSelector)` - requires that the phoneme be preceeded by a sound that matches the provided selector
 - `beforeSpec(spec: Partial<PhonemeSpec>)` - requires that the phoneme be preceeded by a sound that matches all features specified in `spec`

#### Inverse, compound, and custom tests

These queries allow for certain complex operations which can make certain rules easier to express.

 - `if(test: (sound: ContextualisedPhoneme, index: number, context: ContextualisedPhoneme[]) => boolean)` - allows custom code to determine whether the given phoneme in the given context should qualify
 - `or(selector: SoundSelector)` - allow the phoneme to match either all of the provided properties _or_ this provided selector
 - `not()` - switches the call chain into "inverse mode". All subsequent calls (aside from `addReplacer` and `addStringReplacer`) will instead work towards constructing a _negative profile_, which will cause the phoneme to be _disqualified_ if matched

### Notes

 - The library is designed around English. It will not work very well with processing IPA from other languages.
 - All rules are run in order by `Replacer.applyToIpa`. The output of one serves as the input as the next.
 - This also means that adding non-IPA characters early in the chain may result in undesirable behaviour. If you wish to insert non-IPA strings, keep these to the end of the rule chain.
 - Syllables are determined using an algorithm which takes into account English onset and nucleus formations. It is not perfect, but it has proven good enough for most applications.
 - Sound selectors apply their replacers in the order they were added. Specifically, first `updatePhonemes` rules are run, then `updateModifiers`, then `replacer`s, then `stringReplacer`s.

### Examples

For example, here is how a complex rule like `AspiratedStops` is defined internally:

```ts
SoundSelector
    .fromSpec({type: PhonemeType.Consonant, manner: Manner.plosive})
    .startOfSyllable()
    .inStressedSyllable()
    .beforeSpec({type: PhonemeType.Vowel})
    .or(
        SoundSelector
            .fromSpec({type: PhonemeType.Consonant, manner: Manner.plosive})
            .startOfWord()
            .beforeSpec({type: PhonemeType.Vowel})
    )
    .addReplacer(phoneme => phoneme.setAspirated(true));
```

Here is how `Derhoticize` is defined. Note the use of `not()` here to ensure we don't remove linking r's.

```ts
SoundSelector
    .fromSounds('ɹ', 'r')
    .not()
    .beforeSpec({type: PhonemeType.Vowel})
    .addStringReplacer(() => '');
```