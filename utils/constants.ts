interface IWord {
  present: string
  past: string
  past_participe: string
  definition: string
}

const MODES: Array<string> = ['normal', 'fast', 'practise']

const example: IWord = {
  present: '',
  past: '',
  past_participe: '',
  definition: '',
}

const WORDS_C: IWord[] = [
  {
    present: 'leave',
    past: 'left',
    past_participe: 'left',
    definition: '',
  },
  {
    present: 'lose',
    past: 'lost',
    past_participe: 'lost',
    definition: '',
  },
  {
    present: 'make',
    past: 'made',
    past_participe: 'made',
    definition: '',
  },
  {
    present: 'meet',
    past: 'met',
    past_participe: 'met',
    definition: '',
  },
  {
    present: 'pay',
    past: 'paid',
    past_participe: 'paid',
    definition: '',
  },
  {
    present: 'put',
    past: 'put',
    past_participe: 'put',
    definition: '',
  },
  {
    present: 'read',
    past: 'read',
    past_participe: 'read',
    definition: '',
  },
  {
    present: 'run',
    past: 'ran',
    past_participe: 'run',
    definition: '',
  },
  {
    present: 'say',
    past: 'said',
    past_participe: 'said',
    definition: '',
  },
  {
    present: 'see',
    past: 'saw',
    past_participe: 'seen',
    definition: '',
  },
  {
    present: 'send',
    past: 'sent',
    past_participe: 'sent',
    definition: '',
  },
  {
    present: 'sing',
    past: 'sang',
    past_participe: 'sung',
    definition: '',
  },
  {
    present: 'sit',
    past: 'sat',
    past_participe: 'sat',
    definition: '',
  },
  {
    present: 'sleep',
    past: 'slept',
    past_participe: 'slept',
    definition: '',
  },
  {
    present: 'speak',
    past: 'spoke',
    past_participe: 'spoken',
    definition: '',
  },
  {
    present: 'spend',
    past: 'spent',
    past_participe: 'spent',
    definition: '',
  },
  {
    present: 'stand',
    past: 'stood',
    past_participe: 'stood',
    definition: '',
  },
  {
    present: 'swim',
    past: 'swam',
    past_participe: 'swum',
    definition: '',
  },
  {
    present: 'teach',
    past: 'taught',
    past_participe: 'taught',
    definition: '',
  },
  {
    present: 'take',
    past: 'took',
    past_participe: 'taken',
    definition: '',
  },
  {
    present: 'tell',
    past: 'told',
    past_participe: 'told',
    definition: '',
  },
  {
    present: 'think',
    past: 'thought',
    past_participe: 'thought',
    definition: '',
  },
  {
    present: 'understand',
    past: 'understood',
    past_participe: 'understood',
    definition: '',
  },
  {
    present: 'wake',
    past: 'woke',
    past_participe: 'woken',
    definition: '',
  },
  {
    present: 'wear',
    past: 'wore',
    past_participe: 'worn',
    definition: '',
  },
  {
    present: 'win',
    past: 'won',
    past_participe: 'won',
    definition: '',
  },
  {
    present: 'write',
    past: 'wrote',
    past_participe: 'written',
    definition: '',
  },
]

const WORDS_B: IWord[] = [
  {
    present: 'do',
    past: 'did',
    past_participe: 'done',
    definition: '',
  },
  {
    present: 'drink',
    past: 'drank',
    past_participe: 'drunk',
    definition: '',
  },
  {
    present: 'drive',
    past: 'drove',
    past_participe: 'driven',
    definition: '',
  },
  {
    present: 'eat',
    past: 'ate',
    past_participe: 'eaten',
    definition: '',
  },
  {
    present: 'fall',
    past: 'fell',
    past_participe: 'fallen',
    definition: '',
  },
  {
    present: 'feel',
    past: 'felt',
    past_participe: 'felt',
    definition: '',
  },
  {
    present: 'find',
    past: 'found',
    past_participe: 'found',
    definition: '',
  },
  {
    present: 'fly',
    past: 'flew',
    past_participe: 'flown',
    definition: '',
  },
  {
    present: 'forget',
    past: 'forgot',
    past_participe: 'forgotten',
    definition: '',
  },
  {
    present: 'get',
    past: 'got',
    past_participe: 'got',
    definition: '',
  },
  {
    present: 'give',
    past: 'gave',
    past_participe: 'given',
    definition: '',
  },
  {
    present: 'go',
    past: 'went',
    past_participe: 'gone',
    definition: '',
  },
  {
    present: 'have',
    past: 'had',
    past_participe: 'had',
    definition: '',
  },
  {
    present: 'hear',
    past: 'heard',
    past_participe: 'heard',
    definition: '',
  },
  {
    present: 'know',
    past: 'knew',
    past_participe: 'known',
    definition: '',
  },
]

const WORDS_A: Array<IWord> = [
  {
    present: 'be',
    past: 'was / were',
    past_participe: 'been',
    definition: 'ser',
  },
  {
    present: 'become',
    past: 'became',
    past_participe: 'become',
    definition: '',
  },
  {
    present: 'begin',
    past: 'began',
    past_participe: 'begun',
    definition: '',
  },
  {
    present: 'break',
    past: 'broke',
    past_participe: 'broken',
    definition: '',
  },
  {
    present: 'bring',
    past: 'brought',
    past_participe: 'brought',
    definition: '',
  },
  {
    present: 'build',
    past: 'built',
    past_participe: 'built',
    definition: '',
  },
  {
    present: 'buy',
    past: 'bought',
    past_participe: 'bought',
    definition: 'comprar',
  },
  {
    present: 'can',
    past: 'could',
    past_participe: '-',
    definition: 'poder',
  },
  {
    present: 'catch',
    past: 'caught',
    past_participe: 'caught',
    definition: '',
  },
  {
    present: 'come',
    past: 'came',
    past_participe: 'come',
    definition: '',
  },
  {
    present: 'cost',
    past: 'cost',
    past_participe: 'cost',
    definition: '',
  },
]

const WORDS: IWord[] = [...WORDS_A, ...WORDS_B, ...WORDS_C]

export { WORDS, MODES }

/*
 * Modo prueba, mostrando todos los datos
 * Modo clasico, mostrando siempre el presente
 * Modo random, mostrando de cualquier tabla
 * Mostrar una tabla y a completar
 */
