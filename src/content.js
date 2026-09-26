// All chapter copy is VERBATIM from /work/safety-handbook/COPY-DECK.md v1.
// No em-dashes anywhere in this file. Plain words, numbers as digits.

export const BOOK_TITLE = 'THE SAFETY HANDBOOK'

export const INDEX_DECK =
  'What to do when it goes wrong. Written in plain words. Shown in pictures.'

export const FOOTER_CREDIT =
  'The Safety Handbook. Illustrations: Hy Image 3.5 on GMI Cloud.'

const c01 = {
  id: 'c01',
  num: '01',
  title: 'FIRE AT HOME',
  deck: 'The fire dies when the air runs out.',
  remember: 'Starve the fire. Never feed it.',
  hero: '/img/c01-hero.webp',
  steps: [
    {
      n: '01',
      h: 'Turn off the heat',
      body: 'Reach the knob. Turn it off. Keep your face away.',
      img: '/img/c01-s1.webp',
    },
    {
      n: '02',
      h: 'Slide a lid over the pan',
      body: 'Slide it across. Never drop it straight down.',
      img: '/img/c01-s2.webp',
    },
    {
      n: '03',
      h: 'Take the pan off the heat',
      body:
        'Wait. Do not lift the lid. The fire dies when the air runs out. Give it twenty minutes.',
      img: '/img/c01-s3.webp',
    },
    {
      n: '04',
      h: 'Check before you clean',
      body:
        'Move the pan only when it is cool. Tap the lid. If it clunks, it is stuck. Leave it.',
      img: '/img/c01-s4.webp',
    },
  ],
  dont: {
    body: 'Never water a burning pan. Water turns oil into a fireball.',
    img: '/img/c01-dont.webp',
  },
  flip: {
    caption: 'How a pan fire grows. And how a lid ends it.',
    frames: [
      '/img/c01-f1.webp',
      '/img/c01-f2.webp',
      '/img/c01-f3.webp',
      '/img/c01-f4.webp',
      '/img/c01-f5.webp',
    ],
  },
  tiles: [{ label: 'KITCHEN FIRE', img: '/img/c01-hero.webp', to: '/c01' }],
}

const c02 = {
  id: 'c02',
  num: '02',
  title: 'BURNS AND SCALDS',
  deck: 'Twenty minutes. No ice.',
  remember: 'Cool the burn. Everything else can wait.',
  hero: '/img/c02-hero.webp',
  steps: [
    {
      n: '01',
      h: 'Run cool water',
      body: 'Hold the burn under cool running water. Twenty minutes. No ice.',
      img: '/img/c02-s1.webp',
    },
    {
      n: '02',
      h: 'Cover it loose',
      body: 'Lay a clean, loose cover on top. Do not wrap it tight.',
      img: '/img/c02-s2.webp',
    },
    {
      n: '03',
      h: 'Turn the handles in',
      body: 'Pots live on the back burner. Handles point to the wall.',
      img: '/img/c02-s3.webp',
    },
  ],
  dont: {
    body: 'No toothpaste. No butter. No creams. They trap the heat.',
    img: '/img/c02-dont.webp',
  },
  tiles: [{ label: 'BURN', img: '/img/c02-hero.webp', to: '/c02' }],
}

const c03 = {
  id: 'c03',
  num: '03',
  title: 'ELECTRIC SHOCK',
  deck: 'Call 911. Stay with them.',
  remember: 'Never touch a person who is wired.',
  hero: '/img/c03-hero.webp',
  steps: [
    {
      n: '01',
      h: 'Kill the power first',
      body: 'Find the switch. Turn it off. That breaks the circuit.',
      img: '/img/c03-s1.webp',
    },
    {
      n: '02',
      h: 'Push it away, not with your hands',
      body: 'Use a broom, a chair, a dry stick. Stand back.',
      img: '/img/c03-s2.webp',
    },
    {
      n: '03',
      h: 'Call, then stay',
      body: 'Call 911. Stay with them. Do not touch them until the power is off.',
      img: '/img/c03-s3.webp',
    },
  ],
  dont: {
    body:
      'Never grab a person in contact with electricity. The current takes you too.',
    img: '/img/c03-dont.webp',
  },
  tiles: [{ label: 'ELECTRIC SHOCK', img: '/img/c03-hero.webp', to: '/c03' }],
}

const c04 = {
  id: 'c04',
  num: '04',
  title: 'FALLS AND BABY-PROOFING',
  deck: 'A gate at the top. A gate at the bottom.',
  remember: 'Gate the stairs. Anchor the tall stuff.',
  hero: '/img/c04-hero.webp',
  steps: [
    {
      n: '01',
      h: 'Gate the stairs',
      body: 'A gate at the top. A gate at the bottom. Test the latch.',
      img: '/img/c04-s1.webp',
    },
    {
      n: '02',
      h: 'Stick the mat',
      body:
        'Non-slip mat in the tub. Press it flat. If the corners lift, replace it.',
      img: '/img/c04-s2.webp',
    },
    {
      n: '03',
      h: 'Anchor the shelf',
      body: 'Strap tall furniture to the wall. If it can tip, it will tip.',
      img: '/img/c04-s3.webp',
    },
  ],
  dont: {
    body: 'A climbing toddler and a loose bookshelf meet exactly once.',
    img: '/img/c04-dont.webp',
  },
  tiles: [{ label: 'FALLS', img: '/img/c04-hero.webp', to: '/c04' }],
}

const c05 = {
  id: 'c05',
  num: '05',
  title: 'FIRE ESCAPE',
  deck: 'The clean air is at the floor.',
  remember: 'Get low. Get out. Stay out.',
  hero: '/img/c05-hero.webp',
  steps: [
    {
      n: '01',
      h: 'Feel the door first',
      body: 'The back of your hand on the door. Hot? Use another way out.',
      img: '/img/c05-s1.webp',
    },
    {
      n: '02',
      h: 'Stay under the smoke',
      body: 'Crawl. The clean air is at the floor.',
      img: '/img/c05-s2.webp',
    },
    {
      n: '03',
      h: 'Meet at the tree',
      body:
        'Pick a meeting spot outside now. Everyone walks there. No one goes back in.',
      img: '/img/c05-s3.webp',
    },
  ],
  dont: {
    body: 'Never take the lift in a fire. Stairs only.',
    img: '/img/c05-dont.webp',
  },
  tiles: [{ label: 'FIRE ESCAPE', img: '/img/c05-hero.webp', to: '/c05' }],
}

const c06 = {
  id: 'c06',
  num: '06',
  title: 'EARTHQUAKE',
  deck: 'Get under a table. One hand on a leg.',
  remember: 'Drop. Cover. Hold on.',
  hero: '/img/c06-hero.webp',
  steps: [
    {
      n: '01',
      h: 'Drop and cover',
      body: 'Get under a table. One hand on a leg. One arm over your head.',
      img: '/img/c06-s1.webp',
    },
    {
      n: '02',
      h: 'No table? Hold the frame',
      body: 'Crouch beside an inner doorway. Away from windows.',
      img: '/img/c06-s2.webp',
    },
    {
      n: '03',
      h: 'Go outside when it stops',
      body: 'Walk to open ground. Watch for broken glass and wires.',
      img: '/img/c06-s3.webp',
    },
  ],
  dont: {
    body: 'Do not run down the stairs while it shakes. Legs fail. Stairs crack.',
    img: '/img/c06-dont.webp',
  },
  tiles: [{ label: 'EARTHQUAKE', img: '/img/c06-hero.webp', to: '/c06' }],
}

const c07 = {
  id: 'c07',
  num: '07',
  title: 'FLOOD',
  deck: 'Kill the power at the socket. Unplug what you can reach.',
  remember: 'Turn off, move up, get out early.',
  hero: '/img/c07-hero.webp',
  steps: [
    {
      n: '01',
      h: 'Unplug before water comes',
      body: 'Kill the power at the socket. Unplug what you can reach.',
      img: '/img/c07-s1.webp',
    },
    {
      n: '02',
      h: 'Move things up',
      body: 'Photos, papers, medicines. Highest shelf first.',
      img: '/img/c07-s2.webp',
    },
    {
      n: '03',
      h: 'Signal from the roof',
      body: 'Wave a bright cloth. Stay visible. Stay dry above the waterline.',
      img: '/img/c07-s3.webp',
    },
  ],
  dont: {
    body:
      'Never wade moving water. Six inches can take an adult off their feet.',
    img: '/img/c07-dont.webp',
  },
  tiles: [{ label: 'FLOOD', img: '/img/c07-hero.webp', to: '/c07' }],
}

export const chapters = [c01, c02, c03, c04, c05, c06, c07]

// Door 1 of the index: the panic grid, in reading order.
export const panicTiles = chapters.flatMap((chapter) => chapter.tiles)

export function chapterById(id) {
  return chapters.find((chapter) => chapter.id === id) || null
}

export function chapterPath(chapter) {
  return '/' + chapter.id
}

