type GalleryImage = {
  src: string
  alt: string
  id: string
}

type Collaboration = {
  artist: string
  id: string
  instagram?: string
}

type SocialLink = {
  label: string
  link: string
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: '/assets/images/A.jpg',
    alt: 'HEX performing',
    id: 'img1',
  },
  {
    src: '/assets/images/B.jpg',
    alt: 'HEX performing',
    id: 'img2',
  },
  {
    src: '/assets/images/C.jpg',
    alt: 'HEX performing',
    id: 'img3',
  },
  {
    src: '/assets/images/D.jpg',
    alt: 'HEX performing',
    id: 'img4',
  },
  {
    src: '/assets/images/E.jpg',
    alt: 'HEX performing',
    id: 'img5',
  },
  {
    src: '/assets/images/F.jpg',
    alt: 'HEX performing',
    id: 'img6',
  },
  {
    src: '/assets/images/G.jpg',
    alt: 'HEX performing',
    id: 'img7',
  },
  {
    src: '/assets/images/H.jpg',
    alt: 'HEX performing',
    id: 'img8',
  },
  {
    src: '/assets/images/I.jpg',
    alt: 'HEX performing',
    id: 'img9',
  },
  {
    src: '/assets/images/J.jpg',
    alt: 'HEX performing',
    id: 'img10',
  },
  {
    src: '/assets/images/K.jpg',
    alt: 'HEX performing',
    id: 'img11',
  },
]

export const COLLABORATIONS: Collaboration[] = [
  { artist: 'Tommy Royale', id: 'collab0', instagram: 'https://www.instagram.com/iamtommyroyale/' },
  { artist: 'Melody Adorno', id: 'collab1', instagram: 'https://www.instagram.com/themelodyadorno/' },
  { artist: 'Joe L. Barnes', id: 'collab2', instagram: 'https://www.instagram.com/iamjoe_l/' },
  { artist: 'Vashawn Mitchell', id: 'collab3', instagram: 'https://www.instagram.com/vashawnmitchell/' },
  { artist: 'Christian Cuevas', id: 'collab4', instagram: 'https://www.instagram.com/christiancuevasmusic/' },
  { artist: 'Karen Espinosa', id: 'collab5', instagram: 'https://www.instagram.com/thekarenespinosa/' },
  { artist: 'Dahaira', id: 'collab6', instagram: 'https://www.instagram.com/dahaira/' },
  { artist: 'Cielo Ortega', id: 'collab7', instagram: 'https://www.instagram.com/cieloortegamusic/' },
  { artist: 'Niko Eme', id: 'collab8', instagram: 'https://www.instagram.com/nikoeme/' },
  { artist: 'Veronica Colon', id: 'collab9', instagram: 'https://www.instagram.com/veronicacologne/' },
  { artist: 'JRNY MSC', id: 'collab10', instagram: 'https://www.instagram.com/jrnymsc' },
  { artist: 'Prophet Manasseh Jordan', id: 'collab12', instagram: 'https://www.instagram.com/prophetmanasseh/' },
  //{ artist: 'Valentina Figueroa', id: 'collab11', instagram: 'https://www.instagram.com/valentinafigueroa' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/vs_xxix',
  },
]

export const EMAIL = 'Alliswell.Shalom@gmail.com'

// Artist Instagram handles for linking in bio
export const ARTIST_LINKS: Record<string, string> = {
  'Tommy Royale': 'https://www.instagram.com/iamtommyroyale/',
  'JRNY MSC': 'https://www.instagram.com/jrnymsc',
  'Veronica Colon': 'https://www.instagram.com/veronicacologne/',
  'Valentina Figueroa': 'https://www.instagram.com/valentinafigueroamusic/',
  'Christian Cuevas': 'https://www.instagram.com/christiancuevasmusic/',
  'Melody Adorno': 'https://www.instagram.com/themelodyadorno/',
  'Elizabet Maria': 'https://www.instagram.com/elizabetmariamusic/',
  'Dahaira': 'https://www.instagram.com/dahaira/',
}

export const BIO_INTRO = "With more than two decades of professional experience spanning Urban, Reggaeton, CCM, and Country genres, Hector Morales—widely known as HEX—has built a reputation as a powerhouse drummer whose versatility, precision, and stage presence elevate every performance. Based in Kissimmee, FL, HEX has become a dynamic force both on stage and in the studio, blending technical mastery with an unmistakable creative flair."

export const BIO_PARAGRAPHS = [
  "HEX is currently touring as the drummer for {Tommy Royale}, bringing high-impact energy to major venues such as the KIA Center and delivering show-stopping performances on international stages throughout Guatemala and beyond. His live work is marked by a commanding rhythmic foundation, an intuitive feel for diverse musical styles, and an ability to connect with audiences of all sizes—qualities that have made him a standout among today's live percussionists.",
  "In the studio, HEX's adaptability shines just as brightly. His expanding discography includes collaborations with {JRNY MSC}, {Veronica Colon}, {Valentina Figueroa}, {Christian Cuevas}, {Melody Adorno}, and {Elizabet Maria}, showcasing his ability to navigate multiple genres while maintaining a signature sound. Whether crafting intricate grooves, bringing songs to life with tasteful creativity, or locking into the precise production demands of modern music, HEX consistently delivers professional, high-quality work that elevates every project he touches.",
  "Beyond the studio and tour circuit, HEX has contributed to a wide range of notable projects—from high-profile live performances in Tampa with {Dahaira}, to featured appearances in music videos for {JRNY MSC} and {Valentina Figueroa}. His growing footprint across national and international stages reflects both his artistry and his work ethic as he continues to establish himself as an in-demand percussionist recognized for his musicality, adaptability, and commitment to excellence.",
  "As he continues to expand his creative reach, HEX remains dedicated to bringing passion, professionalism, and unforgettable energy to every performance—solidifying his place as one of the most versatile and sought-after drummers in today's evolving music landscape."
]

export const BIO = {
  name: 'Hector Morales',
  stageName: 'HEX',
  city: 'Kissimmee, FL',
  genres: ['Urban', 'Reggaeton', 'CCM', 'Country'],
  experience: '20 years',
  currentBand: 'Tommy Royale',
  gear: {
    drums: 'DW Collectors Series Maple Wood',
    sizes: '10-12-14-22',
    snare: '14x6.5 Black Beauty Snare',
    hardware: 'DW Hardware',
    cymbals: [
      '24in Zildjian K Light Ride',
      '22in Xist Istanbul Crash',
      '22in HHX Complex Thin Crash',
    ],
  },
  highlights: [
    'Studio work: JRNY MSC, Veronica Colon, Valentina Figueroa, Christian Cuevas, Melody Adorno, Elizabet Maria',
    'Shows with Tommy Royale at KIA Center and Guatemala',
    'Shows in Tampa for Dahaira',
    'Shows and music videos for JRNY MSC',
    'Music video for Valentina Figueroa',
  ],
}
