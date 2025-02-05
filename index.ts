export enum PhonemeType {
    Consonant, Vowel,
}

export enum Place {
    bilabial = 0,
    labialVelar = 1,
    labiodental = 2,
    dental = 3,
    alveolar = 4,
    postalveolar = 5,
    retroflex = 6,
    palatal = 7,
    velar = 8,
    uvular = 9,
    pharyngeal = 10,
    glottal = 11,
}

export enum Manner {
    plosive = 0, nasal = 1, trill = 2, fricative = 3, approximant = 4, lateralApproximant = 5, affricate = 6, tap = 7,
}

export enum Height {
    close = 0, nearCloseMid = 1, closeMid = 2, mid = 3, openMid = 4, nearOpenMid = 5, open = 6,
}

export enum Position {
    front = 0, nearFront = 1, central = 2, nearBack = 3, back = 4
}

interface ConsonantSpec {
    type: PhonemeType.Consonant;
    ipaSymbol: string;
    isLiquid: boolean;
    place: Place;
    manner: Manner;
    voiced: boolean;
    isObstruent: boolean;
}

interface VowelSpec {
    type: PhonemeType.Vowel;
    ipaSymbol: string;
    rounded: boolean;
    height: Height;
    position: Position;
    isObstruent: boolean;
}

type PhonemeSpec<T extends PhonemeType = PhonemeType> = T extends PhonemeType.Consonant ? ConsonantSpec : T extends PhonemeType.Vowel ? VowelSpec : never;

const phonemes = [
    {
        type: PhonemeType.Consonant,
        ipaSymbol: 'p',
        place: Place.bilabial,
        manner: Manner.plosive,
        voiced: false,
        isLiquid: false,
        isObstruent: true
    }, {
        type: PhonemeType.Consonant,
        ipaSymbol: 't',
        place: Place.alveolar,
        manner: Manner.plosive,
        voiced: false,
        isLiquid: false,
        isObstruent: true
    }, {
        type: PhonemeType.Consonant,
        ipaSymbol: 'k',
        place: Place.velar,
        manner: Manner.plosive,
        voiced: false,
        isLiquid: false,
        isObstruent: true
    }, {
        type: PhonemeType.Consonant,
        ipaSymbol: 'f',
        place: Place.labiodental,
        manner: Manner.fricative,
        voiced: false,
        isLiquid: false,
        isObstruent: true
    }, {
        type: PhonemeType.Consonant,
        ipaSymbol: 'θ',
        place: Place.dental,
        manner: Manner.fricative,
        voiced: false,
        isLiquid: false,
        isObstruent: true
    }, {
        type: PhonemeType.Consonant,
        ipaSymbol: 's',
        place: Place.alveolar,
        manner: Manner.fricative,
        voiced: false,
        isLiquid: false,
        isObstruent: true
    }, {
        type: PhonemeType.Consonant,
        ipaSymbol: 'ʃ',
        place: Place.postalveolar,
        manner: Manner.fricative,
        voiced: false,
        isLiquid: false,
        isObstruent: true
    }, {
        type: PhonemeType.Consonant,
        ipaSymbol: 'h',
        place: Place.glottal,
        manner: Manner.fricative,
        voiced: false,
        isLiquid: false,
        isObstruent: true
    }, {
        type: PhonemeType.Consonant,
        ipaSymbol: 'ʔ',
        place: Place.glottal,
        manner: Manner.plosive,
        voiced: false,
        isLiquid: false,
        isObstruent: true
    }, {
        type: PhonemeType.Consonant,
        ipaSymbol: 'ʧ',
        place: Place.postalveolar,
        manner: Manner.affricate,
        voiced: false,
        isLiquid: false,
        isObstruent: true
    }, {
        type: PhonemeType.Consonant,
        ipaSymbol: 'j',
        place: Place.palatal,
        manner: Manner.approximant,
        voiced: true,
        isLiquid: false,
        isObstruent: false,
    }, {
        type: PhonemeType.Consonant,
        ipaSymbol: 'l',
        place: Place.alveolar,
        manner: Manner.lateralApproximant,
        voiced: true,
        isLiquid: true,
        isObstruent: false,
    }, {
        type: PhonemeType.Consonant,
        ipaSymbol: 'b',
        place: Place.bilabial,
        manner: Manner.plosive,
        voiced: true,
        isLiquid: false,
        isObstruent: true
    }, {
        type: PhonemeType.Consonant,
        ipaSymbol: 'd',
        place: Place.alveolar,
        manner: Manner.plosive,
        voiced: true,
        isLiquid: false,
        isObstruent: true
    }, {
        type: PhonemeType.Consonant,
        ipaSymbol: 'v',
        place: Place.labiodental,
        manner: Manner.fricative,
        voiced: true,
        isLiquid: false,
        isObstruent: true
    }, {
        type: PhonemeType.Consonant,
        ipaSymbol: 'ɡ',
        place: Place.velar,
        manner: Manner.plosive,
        voiced: true,
        isLiquid: false,
        isObstruent: true
    }, {
        type: PhonemeType.Consonant,
        ipaSymbol: 'ð',
        place: Place.dental,
        manner: Manner.fricative,
        voiced: true,
        isLiquid: false,
        isObstruent: true
    }, {
        type: PhonemeType.Consonant,
        ipaSymbol: 'z',
        place: Place.alveolar,
        manner: Manner.fricative,
        voiced: true,
        isLiquid: false,
        isObstruent: true
    }, {
        type: PhonemeType.Consonant,
        ipaSymbol: 'ʒ',
        place: Place.postalveolar,
        manner: Manner.fricative,
        voiced: true,
        isLiquid: false,
        isObstruent: true
    }, {
        type: PhonemeType.Consonant,
        ipaSymbol: 'ŋ',
        place: Place.velar,
        manner: Manner.nasal,
        voiced: true,
        isLiquid: false,
        isObstruent: false,
    }, {
        type: PhonemeType.Consonant,
        ipaSymbol: 'ʤ',
        place: Place.postalveolar,
        manner: Manner.affricate,
        voiced: true,
        isLiquid: false,
        isObstruent: true
    }, {
        type: PhonemeType.Consonant,
        ipaSymbol: 'm',
        place: Place.bilabial,
        manner: Manner.nasal,
        voiced: true,
        isLiquid: false,
        isObstruent: false,
    }, {
        type: PhonemeType.Consonant,
        ipaSymbol: 'n',
        place: Place.alveolar,
        manner: Manner.nasal,
        voiced: true,
        isLiquid: false,
        isObstruent: false,
    }, {
        type: PhonemeType.Consonant,
        ipaSymbol: 'r',
        place: Place.alveolar,
        manner: Manner.trill,
        voiced: true,
        isLiquid: true,
        isObstruent: true
    }, {
        type: PhonemeType.Consonant,
        ipaSymbol: 'w',
        place: Place.labialVelar,
        manner: Manner.approximant,
        voiced: true,
        isLiquid: false,
        isObstruent: false,
    }, {
        type: PhonemeType.Consonant,
        ipaSymbol: 'ɹ',
        place: Place.alveolar,
        manner: Manner.approximant,
        voiced: true,
        isLiquid: true,
        isObstruent: true,
    }, {
        type: PhonemeType.Vowel,
        ipaSymbol: 'e',
        rounded: false,
        height: Height.closeMid,
        position: Position.front,
        isObstruent: false
    }, {
        type: PhonemeType.Vowel,
        ipaSymbol: 'ɪ',
        rounded: false,
        height: Height.nearCloseMid,
        position: Position.nearFront,
        isObstruent: false
    }, {
        type: PhonemeType.Vowel,
        ipaSymbol: 'æ',
        rounded: false,
        height: Height.nearOpenMid,
        position: Position.front,
        isObstruent: false
    }, {
        type: PhonemeType.Vowel,
        ipaSymbol: 'ʌ',
        rounded: false,
        height: Height.openMid,
        position: Position.back,
        isObstruent: false
    }, {
        type: PhonemeType.Vowel,
        ipaSymbol: 'ʊ',
        rounded: true,
        height: Height.nearCloseMid,
        position: Position.nearBack,
        isObstruent: false
    }, {
        type: PhonemeType.Vowel,
        ipaSymbol: 'ɒ',
        rounded: true,
        height: Height.open,
        position: Position.back,
        isObstruent: false
    }, {
        type: PhonemeType.Vowel,
        ipaSymbol: 'ə',
        rounded: false,
        height: Height.mid,
        position: Position.central,
        isObstruent: false
    }, {
        type: PhonemeType.Vowel,
        ipaSymbol: 'ɑ',
        rounded: false,
        height: Height.open,
        position: Position.back,
        isObstruent: false
    }, {
        type: PhonemeType.Vowel,
        ipaSymbol: 'i',
        rounded: false,
        height: Height.close,
        position: Position.front,
        isObstruent: false
    }, {
        type: PhonemeType.Vowel,
        ipaSymbol: 'ɔ',
        rounded: true,
        height: Height.openMid,
        position: Position.back,
        isObstruent: false
    }, {
        type: PhonemeType.Vowel,
        ipaSymbol: 'ɜ',
        rounded: false,
        height: Height.openMid,
        position: Position.central,
        isObstruent: false
    }, {
        type: PhonemeType.Vowel,
        ipaSymbol: 'u',
        rounded: true,
        height: Height.close,
        position: Position.back,
        isObstruent: false
    }, {
        type: PhonemeType.Vowel,
        ipaSymbol: 'ɛ',
        rounded: false,
        height: Height.openMid,
        position: Position.front,
        isObstruent: false
    }, {
        type: PhonemeType.Vowel,
        ipaSymbol: 'a',
        rounded: false,
        height: Height.open,
        position: Position.front,
        isObstruent: false
    }, {
        type: PhonemeType.Vowel,
        ipaSymbol: 'o',
        rounded: true,
        height: Height.closeMid,
        position: Position.back,
        isObstruent: false
    },
] as const;

type IPAPhoneme<T extends PhonemeType = PhonemeType> = (typeof phonemes)[number] extends {
    type: T; ipaSymbol: infer C
} ? C : never;

type Optionalize<T, K extends keyof T> = Omit<T, K> & { [P in keyof T]?: T[P] | undefined }

const consonants = phonemes.filter(e => e.type === PhonemeType.Consonant);
const vowels = phonemes.filter(e => e.type === PhonemeType.Vowel);
const liquids = phonemes.filter(e => e.type === PhonemeType.Consonant && e.isLiquid);

enum Diacritics {
    Rounded = '̹',
    Unrounded = '̜',
    Voiced = '̬',
    Voiceless = '̥',
    Retracted = '̠',
    Advanced = '̟',
    Raised = '̝',
    Lowered = '̞',
}

const diacritics = [
    Diacritics.Rounded,
    Diacritics.Unrounded,
    Diacritics.Voiced,
    Diacritics.Voiceless,
    Diacritics.Retracted,
    Diacritics.Advanced,
    Diacritics.Raised,
    Diacritics.Lowered,
];

export enum Length {
    Default, HalfLong, Long, Short,
}

interface ModificationStatus {
    length: Length;
    aspirated: boolean;
    nasalized: boolean;
}

enum Modifiers {
    Shortened = '˘', Long = `ː`, HalfLong = `ˑ`, Aspirated = `ʰ`, Nasal = '̃'
}

const modifiers = [Modifiers.Shortened, Modifiers.Long, Modifiers.HalfLong, Modifiers.Aspirated, Modifiers.Nasal,]

enum Symbols {
    Stress = `ˈ`, Hiatus = '.', Space = ' '
}

const symbols = [Symbols.Stress, Symbols.Hiatus, Symbols.Space];

export class Phoneme<T extends PhonemeType = PhonemeType> {
    type: T;
    private _phonemeSpec: PhonemeSpec<T>;

    constructor(
        ipa: IPAPhoneme<T>,
        diacritics: Diacritics[] | Set<Diacritics> = [],
        modifiers: Modifiers[] | Set<Modifiers> = []
    ) {
        this._ipa = ipa;
        this._diacritics = new Set(diacritics);
        this._phonemeSpec = phonemes.find(e => e.ipaSymbol === ipa) as PhonemeSpec<T>;
        this.type = this.phoneme.type as T;
        this._modifiers = new Set(modifiers);
    }

    private _ipa: IPAPhoneme<T>;

    get ipa() {
        return this._ipa;
    }

    set ipa(ipa: IPAPhoneme<T>) {
        this._ipa = ipa;
        this._diacritics = new Set();
        this._phonemeSpec = phonemes.find(e => e.ipaSymbol === ipa) as PhonemeSpec<T>;
    }

    private _modifiers: Set<Modifiers>;

    private get modifiers(): Set<Modifiers> {
        return this._modifiers;
    }

    private set modifiers(value: Set<Modifiers>) {
        this._modifiers = value;
        this._modificationStatus = {
            aspirated: false, nasalized: false, length: Length.Default
        };

        Array.from(value)
             .forEach(ipa => {
                 switch (ipa) {
                     case Modifiers.Long:
                         this._modificationStatus.length = Length.Long;
                         break;
                     case Modifiers.Shortened:
                         this._modificationStatus.length = Length.Short;
                         break;
                     case Modifiers.HalfLong:
                         this._modificationStatus.length = Length.HalfLong;
                         break;
                     case Modifiers.Aspirated:
                         this._modificationStatus.aspirated = true;
                         break;
                     case Modifiers.Nasal:
                         this._modificationStatus.nasalized = true;
                         break;
                 }
             });
    }

    private _modificationStatus!: ModificationStatus;

    private get modificationStatus(): ModificationStatus {
        return this._modificationStatus;
    }

    private set modificationStatus(value: ModificationStatus) {
        this._modificationStatus = value;

        Object
            .entries(value)
            .forEach(value => {
                switch (value[0] as keyof ModificationStatus) {
                    case "length":
                        this._modifiers.delete(Modifiers.Long);
                        this._modifiers.delete(Modifiers.HalfLong);

                        switch (value[1] as Length) {
                            case Length.Default:
                                break;
                            case Length.Short:
                                this._modifiers.add(Modifiers.Shortened);
                                break;
                            case Length.HalfLong:
                                this._modifiers.add(Modifiers.HalfLong);
                                break;
                            case Length.Long:
                                this._modifiers.add(Modifiers.Long);
                                break;
                        }
                        break;
                    case "aspirated":
                        this._modifiers.delete(Modifiers.Aspirated);

                        if (value[1]) {
                            this._modifiers.add(Modifiers.Aspirated);
                        }
                        break;
                    case "nasalized":
                        this._modifiers.delete(Modifiers.Nasal);

                        if (value[1]) {
                            this._modifiers.add(Modifiers.Nasal);
                        }
                        break;
                }
            })
    }

    private _diacritics: Set<Diacritics>;

    private get diacritics() {
        return this._diacritics;
    }

    private set diacritics(value: Set<Diacritics>) {
        this._diacritics = value;
        let newPhonemeSpec = Object.assign({}, this.phoneme);

        value.forEach(diacritic => {
            switch (diacritic) {
                case Diacritics.Rounded:
                    (newPhonemeSpec as VowelSpec).rounded = true;
                    break;
                case Diacritics.Unrounded:
                    (newPhonemeSpec as VowelSpec).rounded = false;
                    break;
                case Diacritics.Voiced:
                    (newPhonemeSpec as ConsonantSpec).voiced = true;
                    break;
                case Diacritics.Voiceless:
                    (newPhonemeSpec as ConsonantSpec).voiced = false;
                    break;
                case Diacritics.Retracted:
                    (newPhonemeSpec as VowelSpec).position += 1;
                    break;
                case Diacritics.Advanced:
                    (newPhonemeSpec as VowelSpec).position -= 1;
                    break;
                case Diacritics.Raised:
                    (newPhonemeSpec as VowelSpec).height -= 1;
                    break;
                case Diacritics.Lowered:
                    (newPhonemeSpec as VowelSpec).height += 1;
                    break;
            }
        });

        this.phoneme = newPhonemeSpec;
    }

    private get phoneme(): PhonemeSpec<T> {
        return this._phonemeSpec;
    }

    private set phoneme(newPhoneme: PhonemeSpec<T>) {
        const newPhonemeData = Object
            .entries(newPhoneme)
            .filter(e => !['ipaSymbol', 'isLiquid', 'isObstruent', 'type'].includes(e[0]));

        const candidates = phonemes
            .filter(e => e.type === newPhoneme.type)
            .filter(compPhoneme => {
                if (newPhoneme.type === PhonemeType.Consonant) {
                    const consSpec = compPhoneme as ConsonantSpec;
                    if (Math.abs(consSpec.place - newPhoneme.place) <= 1 && newPhoneme.manner === consSpec.manner) {
                        return true;
                    }
                } else {
                    const vowelSpec = compPhoneme as VowelSpec;
                    if (Math.abs(vowelSpec.height - newPhoneme.height) <= 1 && Math.abs(vowelSpec.position - newPhoneme.position) <= 1) {
                        return true;
                    }
                }

                return false;
            });
        const candidateVotes = candidates.map(phoneme => newPhonemeData.reduce(
            (
                acc,
                entry
            ) => acc + +(phoneme[entry[0] as keyof typeof phoneme] === entry[1]),
            0
        ));
        const mostVotes = Math.max(...candidateVotes);
        const bestCandidate = candidates[candidateVotes.indexOf(mostVotes)];

        this._phonemeSpec = bestCandidate as PhonemeSpec<T>;
        this._ipa = bestCandidate.ipaSymbol as IPAPhoneme<T>;
        this._diacritics = new Set<Diacritics>();

        if (mostVotes < newPhonemeData.length) {
            newPhonemeData
                .filter(entry => bestCandidate[entry[0] as keyof typeof bestCandidate] !== entry[1])
                .forEach(erroneousEntry => {
                    switch (erroneousEntry[0]) {
                        case 'rounded':
                            if (erroneousEntry[1]) {
                                this._diacritics.add(Diacritics.Rounded);
                            } else {
                                this._diacritics.add(Diacritics.Unrounded);
                            }
                            break;
                        case 'voiced':
                            if (erroneousEntry[1]) {
                                this._diacritics.add(Diacritics.Voiced);
                            } else {
                                this._diacritics.add(Diacritics.Voiceless);
                            }
                            break;
                        case 'place':
                        case 'position':
                            if (erroneousEntry[1] > bestCandidate[erroneousEntry[0] as keyof typeof bestCandidate]) {
                                this._diacritics.add(Diacritics.Retracted);
                            } else {
                                this._diacritics.add(Diacritics.Advanced);
                            }
                            break;
                        case 'height':
                            if (erroneousEntry[1] > bestCandidate[erroneousEntry[0] as keyof typeof bestCandidate]) {
                                this._diacritics.add(Diacritics.Lowered);
                            } else {
                                this._diacritics.add(Diacritics.Raised);
                            }
                            break;
                    }
                });
        }
    }

    static fromSpec(spec: PhonemeSpec) {
        const newPhoneme = new Phoneme('a'); // placeholder
        newPhoneme.phoneme = spec;

        return newPhoneme;
    }

    getModifiers() {
        return this.modifiers;
    }

    setModifiers(modifiers: Set<Modifiers>) {
        this.modifiers = modifiers;
    }

    getModificationStatus() {
        return this.modificationStatus;
    }

    updateModificationStatus(changes: Partial<ModificationStatus>) {
        this.modificationStatus = {
            ...this.modificationStatus, ...changes
        };
        return this;
    }

    getDiacritics() {
        return this.diacritics;
    }

    setDiacritics(diacritics: Set<Diacritics>) {
        this.diacritics = diacritics;
    }

    getPhoneme() {
        return this.phoneme;
    }

    isEqual(comp: Phoneme, fuzzy = false): boolean {
        return this.ipa === comp.ipa && (
            fuzzy || (
                Array
                    .from(this.diacritics)
                    .every(e => comp.diacritics.has(e)) && Array
                    .from(this.modifiers)
                    .every(e => comp.modifiers.has(e))
            )
        );
    }

    isLike(comp: Partial<PhonemeSpec>) {
        return Object
            .entries(comp)
            .filter(e => !['ipaSymbol'].includes(e[0]))
            .every(e => this.phoneme[e[0] as keyof typeof this.phoneme] === e[1]);
    }

    isEquivalent(comp: Phoneme): boolean {
        return this.isLike(comp.phoneme);
    }

    asString() {
        return `${this.ipa}${Array.from(this.diacritics).join('')}${Array.from(this.modifiers).join('')}`;
    }

    updatePhoneme(changes: Partial<PhonemeSpec>) {
        this.phoneme = {
            ...this.phoneme, ...changes,
        };
        return this;
    }

    setVoiced(setTo: ConsonantSpec['voiced']) {
        if (this.phoneme.type !== PhonemeType.Consonant) {
            return this;
        }

        this.updatePhoneme({voiced: setTo});
        return this;
    }

    setPlace(setTo: ConsonantSpec['place']) {
        if (this.phoneme.type !== PhonemeType.Consonant) {
            return this;
        }

        this.updatePhoneme({place: setTo});
        return this;
    }

    setManner(setTo: ConsonantSpec['manner']) {
        if (this.phoneme.type !== PhonemeType.Consonant) {
            return this;
        }

        this.updatePhoneme({manner: setTo});
        return this;
    }

    setHeight(setTo: VowelSpec['height']) {
        if (this.phoneme.type !== PhonemeType.Vowel) {
            return this;
        }

        this.updatePhoneme({height: setTo});
        return this;
    }

    setPosition(setTo: VowelSpec['position']) {
        if (this.phoneme.type !== PhonemeType.Vowel) {
            return this;
        }

        this.updatePhoneme({position: setTo});
        return this;
    }

    setRounded(setTo: VowelSpec['rounded']) {
        if (this.phoneme.type !== PhonemeType.Vowel) {
            return this;
        }

        this.updatePhoneme({rounded: setTo});
        return this;
    }

    shorten() {
        this.updateModificationStatus(
            {
                length: this.modificationStatus.length === Length.Long ?
                        Length.HalfLong :
                        this.modificationStatus.length === Length.HalfLong ?
                            Length.Default :
                            Length.Short
            }
        )
        return this;
    }

    setLength(setTo: ModificationStatus['length']) {
        this.updateModificationStatus({length: setTo});
        return this;
    }

    setNasal(setTo: ModificationStatus['nasalized']) {
        this.updateModificationStatus({nasalized: setTo});
        return this;
    }

    setAspirated(setTo: ModificationStatus['aspirated']) {
        this.updateModificationStatus({aspirated: setTo});
        return this;
    }

    contextualize(context: PhonemeContext = {
        inStressedSyllable: false, positionInSyllable: 0, syllableIndex: 0,
    }) {
        return new ContextualisedPhoneme(this.ipa, this.diacritics, this.modifiers, context);
    }
}

interface PhonemeContext {
    inStressedSyllable: boolean;
    positionInSyllable: number;
    syllableIndex: number;
}

export class ContextualisedPhoneme extends Phoneme {
    context: PhonemeContext;

    constructor(
        ipa: IPAPhoneme,
        diacritics: Set<Diacritics> = new Set(),
        modifiers: Set<Modifiers> = new Set(),
        context: PhonemeContext
    ) {
        super(ipa, diacritics, modifiers);
        this.context = context;
    }
}

export class SoundSelector {
    sounds: Phoneme[];
    stringReplacers: ((
        currentStr: string,
        originalSound: ContextualisedPhoneme,
        index: number,
        context: ContextualisedPhoneme[]
    ) => string)[] = [];
    replacers: ((
        sound: ContextualisedPhoneme,
        index: number,
        context: ContextualisedPhoneme[]
    ) => ContextualisedPhoneme)[] = [];
    rejectionRules: ((sound: ContextualisedPhoneme, index: number, context: ContextualisedPhoneme[]) => boolean)[] = [];
    negativeSample: SoundSelector | null = null;
    isNegativeSampleOf: SoundSelector | null = null;
    updatePhonemesBy: Partial<PhonemeSpec> = {};
    updateModificationBy: Partial<ModificationStatus> = {};
    isStrict: boolean = false;
    fuzzySpec: Partial<PhonemeSpec> | null = null;
    debuggers: ((result: boolean, sound: ContextualisedPhoneme, index: number, context: ContextualisedPhoneme[]) => void)[] = [];

    constructor(...sound: (Phoneme | IPAPhoneme)[]) {
        this.sounds = sound.map(s => typeof s === 'string' ? new Phoneme(s) : s);
    }

    static any() {
        return SoundSelector.fromSpec({});
    }

    static get SyllableStartRegexp() {
        const possibleOnsets = [
            `s${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.plosive, voiced: false}).toRegExp()}${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.approximant}).toRegExp()}`,
            `s${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.plosive, voiced: false}).toRegExp()}[r]`,
            `s${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.nasal}).toRegExp()}${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.approximant}).toRegExp()}`,
            `s${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.fricative, voiced: false}).toRegExp()}${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.approximant}).toRegExp()}`,
            `s${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.fricative, voiced: false}).toRegExp()}[r]`,
            `s${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.plosive, voiced: false}).toRegExp()}`,
            `s${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.nasal}).not('ŋ').toRegExp()}`,
            `${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.plosive}).toRegExp()}${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.approximant}).not('j').toRegExp()}`,
            `${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.plosive}).toRegExp()}[r]`,
            `${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.fricative, voiced: false}).toRegExp()}${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.approximant}).not('j').toRegExp()}`,
            `${SoundSelector.fromSpec({type: PhonemeType.Consonant}).not('r', 'w').toRegExp()}j(?:[uə])`,
            `${SoundSelector.fromSpec({type: PhonemeType.Consonant}).not('ŋ').toRegExp()}`,
            `(?<=\\${Symbols.Hiatus})`,
            `(?<=${Symbols.Space})`
        ].map(e => `(?:${e}[${diacritics.join('')}]*${Modifiers.Aspirated}?)`);
        const possibleNuclei = [
            `(?:${SoundSelector.fromSpec({type: PhonemeType.Vowel}).toRegExp()}[${diacritics.join('')}]*[${modifiers.join('')}]?){2}`,
            `${SoundSelector.fromSpec({type: PhonemeType.Vowel}).toRegExp()}[${diacritics.join('')}]*[${modifiers.join('')}]?`
        ].map(e => `(?:${e})`);
        const possibleCodas = [
            `${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.plosive}).toRegExp()}${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.fricative}).toRegExp()}`,
            `${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.lateralApproximant}).toRegExp()}${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.plosive}).toRegExp()}`,
            `r${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.affricate}).toRegExp()}`,
            `r${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.affricate}).toRegExp()}`,
            `${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.lateralApproximant}).toRegExp()}${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.fricative}).toRegExp()}`,
            `r${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.fricative}).toRegExp()}`,
            `${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.lateralApproximant}).toRegExp()}${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.nasal}).toRegExp()}`,
            `r${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.nasal}).toRegExp()}`,
            `${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.lateralApproximant}).toRegExp()}${SoundSelector.fromSpec({type: PhonemeType.Consonant}).toRegExp()}{2,3}`,
            `r${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.lateralApproximant}).toRegExp()}`,
            `${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.nasal}).toRegExp()}${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.plosive}).toRegExp()}`,
            `${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.nasal}).toRegExp()}${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.fricative}).toRegExp()}`,
            `${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.fricative, voiced: false}).toRegExp()}${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.plosive, voiced: false}).toRegExp()}`,
            `${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.fricative, voiced: true}).toRegExp()}${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.plosive, voiced: true}).toRegExp()}`,
            `${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.fricative, voiced: false}).toRegExp()}{2,3}`,
            `${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.plosive, voiced: false}).toRegExp()}{2}`,
            `${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.nasal}).toRegExp()}${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.plosive}).toRegExp()}{1,2}`,
            `${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.nasal}).toRegExp()}${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.plosive}).toRegExp()}${SoundSelector.fromSpec({type: PhonemeType.Consonant, manner: Manner.fricative}).toRegExp()}{1,2}`,
            `r${SoundSelector.fromSpec({type: PhonemeType.Consonant}).toRegExp()}{2}`,
            `${SoundSelector.fromSpec({type: PhonemeType.Consonant}).not('h', 'w', 'j').toRegExp()}`,
            `${SoundSelector.fromSpec({isObstruent: true}).toRegExp()}{3,4}`,
        ].map(e => `(?:${e})`);
        return new RegExp(`(?<=${Symbols.Stress}?)(${possibleOnsets.join('|')})?(${possibleNuclei.join('|')})`, 'g');
    }

    static fromSounds(...sound: (Phoneme | IPAPhoneme)[]) {
        return new SoundSelector(...sound);
    }

    static fromSpec(spec: Partial<PhonemeSpec>): SoundSelector {
        const newSelector = new SoundSelector(...phonemes
            .filter(phoneme => Object
                .entries(spec)
                .every(([key, value]) => phoneme[key as keyof PhonemeSpec] === value)
            )
            .map(e => e.ipaSymbol));
        newSelector.fuzzySpec = spec;

        return newSelector;
    }

    getMatchingPhonemes() {
        return phonemes.filter(phoneme => this.testIfApplies(new Phoneme(phoneme.ipaSymbol).contextualize()));
    }

    toRegExp() {
        const target = this.isNegativeSampleOf || this;
        return `[${target.getMatchingPhonemes().map(e => e.ipaSymbol).join('')}]`;
    }

    strictly() {
        this.isStrict = true;
        return this;
    }

    before(sound: SoundSelector) {
        this.rejectionRules.push((e, i, s) => !s[i + 1] || !sound.testIfApplies(s[i + 1], i + 1, s));
        return this;
    }

    beforeSpec(spec: Partial<PhonemeSpec>) {
        this.rejectionRules.push((e, i, s) => !s[i + 1]?.isLike(spec));
        return this;
    }

    after(sound: SoundSelector) {
        this.rejectionRules.push((e, i, s) => !s[i - 1] || !sound.testIfApplies(s[i - 1], i - 1, s));
        return this;
    }

    afterSpec(spec: Partial<PhonemeSpec>) {
        this.rejectionRules.push((e, i, s) => !s[i - 1]?.isLike(spec));
        return this;
    }

    startOfSyllable() {
        this.rejectionRules.push(e => e.context.positionInSyllable > 0);
        return this;
    }

    inStressedSyllable() {
        this.rejectionRules.push(e => !e.context.inStressedSyllable);
        return this;
    }

    addDebugger(func: (res: boolean, sound: ContextualisedPhoneme, index: number, context: ContextualisedPhoneme[]) => void) {
        this.debuggers.push(func);
        return this;
    }

    addStringReplacer(replacer: ((
        currentStr: string,
        originalSound: ContextualisedPhoneme,
        index: number,
        context: ContextualisedPhoneme[]
    ) => string)) {
        let target = this.isNegativeSampleOf || this;
        target.stringReplacers.push(replacer);
        return target;
    }

    addReplacer(replacer: ((
        sound: ContextualisedPhoneme,
        index: number,
        context: ContextualisedPhoneme[]
    ) => ContextualisedPhoneme)) {
        let target = this.isNegativeSampleOf || this;
        target.replacers.push(replacer);
        return target;
    }

    not(...sounds: (Phoneme | IPAPhoneme)[]) {
        if (this.isNegativeSampleOf) {
            return this;
        }

        if (!this.negativeSample) {
            this.negativeSample = new SoundSelector(...sounds);
        }

        this.negativeSample.isNegativeSampleOf = this;
        return this.negativeSample;
    }

    updatePhonemes(changes: Partial<PhonemeSpec>) {
        let target = this.isNegativeSampleOf || this;

        target.updatePhonemesBy = {...target.updatePhonemesBy, ...changes};
        return target;
    }

    updateModifiers(changes: Partial<ModificationStatus>) {
        let target = this.isNegativeSampleOf || this;

        target.updateModificationBy = {...target.updateModificationBy, ...changes};
        return target;
    }

    testIfApplies(
        phoneme: ContextualisedPhoneme,
        index: number = 0,
        phonemeSequence: ContextualisedPhoneme[] = [phoneme]
    ) {
        const result = (
            this.fuzzySpec ?
            Object
                .entries(this.fuzzySpec)
                .every(([key, value]) => phoneme.getPhoneme()[key as keyof PhonemeSpec] === value) :
            this.sounds.some(e => this.isStrict ? e.isEquivalent(phoneme) : e.isEqual(phoneme, true))
        ) && this.rejectionRules.every(rule => !rule(
            phoneme,
            index,
            phonemeSequence
        )) && (
            !this.negativeSample ||
            this.negativeSample.rejectionRules.every(rule => rule(
                phoneme,
                index,
                phonemeSequence
            ))
        );

        this.debuggers.forEach(func => func(result, phoneme, index, phonemeSequence));

        return result;
    }

    executeOn(phoneme: ContextualisedPhoneme, index: number, phonemeSequence: ContextualisedPhoneme[]) {
        if (this.testIfApplies(phoneme, index, phonemeSequence)) {
            const updatedForm = phoneme
                .updatePhoneme(this.updatePhonemesBy)
                .updateModificationStatus(this.updateModificationBy);
            const phonemeReplacement = this.replacers.reduce(
                (a, replacer) => replacer(a, index, phonemeSequence),
                updatedForm
            );
            const result = phonemeReplacement.asString();
            return this.stringReplacers.reduce(
                (a, replacer) => replacer(a, phonemeReplacement, index, phonemeSequence),
                result
            );
        }
        return phoneme.asString();
    }
}

export class Replacer {
    rules: SoundSelector[];

    constructor(rules: SoundSelector[]) {
        this.rules = rules;
    }

    static applyRuleToIPA(ipaString: string, rule: SoundSelector) {
        let phonemeSequence = [] as (ContextualisedPhoneme | string)[];
        let currentPhoneme: ContextualisedPhoneme;
        let currentSyllable = 0;
        let currentSyllableIndex = 0;
        let inStressedSyllable = false;

        const syllableStartIndices = Array
            .from(ipaString.matchAll(SoundSelector.SyllableStartRegexp))
            .map(e => e.index);

        for (let i = 0; i < ipaString.length; i++) {
            const currentChar = ipaString[i];

            if (syllableStartIndices.includes(i)) {
                if (currentSyllableIndex > 0) {
                    currentSyllable++;
                    currentSyllableIndex = 0;
                    inStressedSyllable = false;
                }

                if (ipaString[i - 1] === Symbols.Stress) {
                    inStressedSyllable = true;
                }
            }

            if (symbols.includes(currentChar as any)) {
                phonemeSequence.push(currentChar as string);
            } else if (diacritics.includes(currentChar as any)) {
                const newDiacritics = currentPhoneme!.getDiacritics();
                newDiacritics.add(currentChar as Diacritics);
                currentPhoneme!.setDiacritics(newDiacritics);
            } else if (modifiers.includes(currentChar as any)) {
                const newModifiers = currentPhoneme!.getModifiers();
                newModifiers.add(currentChar as Modifiers);
                currentPhoneme!.setModifiers(newModifiers);
            } else if (phonemes.some(t => t.ipaSymbol === currentChar)) {
                currentPhoneme = new Phoneme(currentChar as IPAPhoneme).contextualize(
                    {
                        inStressedSyllable,
                        syllableIndex: currentSyllable,
                        positionInSyllable: currentSyllableIndex,
                    }
                );
                phonemeSequence.push(currentPhoneme);

                currentSyllableIndex++;
            }
        }

        let phonemeIndex = -1;
        return phonemeSequence
            .map(
                (e, i) => {
                    if (typeof e === 'string') {
                        return e;
                    } else {
                        phonemeIndex++;
                        return rule.executeOn(
                            e,
                            phonemeIndex,
                            phonemeSequence.filter(e => typeof e !== 'string') as ContextualisedPhoneme[]
                        );
                    }
                }
            )
            .join('');
    }

    applyToIpa(ipaString: string) {
        return this.rules.reduce((a, e) => Replacer.applyRuleToIPA(a, e), ipaString);
    }
}
