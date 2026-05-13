// ─────────────────────────────────────────────────────────────────────────────
// VedicWeb — Central Priest Configuration
// Edit this file to fully configure the platform for any priest.
// Every page reads exclusively from here — no other hardcoded content exists.
// ─────────────────────────────────────────────────────────────────────────────

export const priestConfig = {

  // ── IDENTITY ────────────────────────────────────────────────────────────────
  name: 'Gopal Chandra Shastri Jee',
  shortName: 'Gopal Chandra',
  title: 'Vedic Pandit & Katha Vachak',
  roles: ['Katha Vachak', 'Vedic Pandit', 'Spiritual Guide'],
  tagline: 'Vedic Katha · Pooja · Sacred Ceremonies',
  photo: '/images/shastriji.jpeg',
  photoAlt: 'Gopal Chandra Shastri Jee performing Katha',
  symbol: 'ॐ',
  navSymbol: '✦',

  // ── SITE METADATA ───────────────────────────────────────────────────────────
  site: {
    title: 'Gopal Chandra Shastri Jee — Vedic Pandit & Katha Vachak',
    description:
      'Authentic pan-Indian Vedic ceremonies, Katha Vachan, and spiritual education serving Dallas–Fort Worth and Houston.',
    footerTagline:
      'Vedic Pandit & Katha Vachak serving the Hindu community of Dallas–Fort Worth and Houston with authentic rituals and spiritual education.',
    copyrightYear: '2025',
    bookingRefPrefix: 'GCS',
  },

  // ── COLORS ──────────────────────────────────────────────────────────────────
  // Change these to re-theme the entire site instantly.
  colors: {
    primary: '#D4600A',         // main buttons, icons, highlights
    primaryLight: '#F5E6D0',    // soft backgrounds, badges
    primaryPale: '#FDF6EC',     // page section backgrounds
    secondary: '#6B1A1A',       // navbar, footer, page headers
    accent: '#B8860B',          // gold accents
    accentLight: '#F0D080',     // gold text on dark backgrounds
    cream: '#FAF6F0',           // body background
    brown: '#4A2C0A',           // label text, secondary headings
    text: '#2C1A0A',            // body text
    muted: '#7A5C3A',           // subdued text
    heroBackground: '#2C0A00',  // hero section dark background
  },

  // ── CONTACT ─────────────────────────────────────────────────────────────────
  contact: {
    phone: '608 575 9510',
    phoneRaw: '6085759510',
    email: 'info@gopalshastriji.com',
    location: 'Dallas–Fort Worth, TX',
    locationSecondary: 'Houston, TX',
    serviceAreasDisplay: 'Dallas–Fort Worth & Houston, TX',
    serviceAreas: ['Dallas–Fort Worth', 'Houston'],
    availability: 'Daily 6:00 AM – 8:00 PM',
    availabilityNote: 'Bookings at least 1 day in advance',
    whatsappAvailable: true,
    responseTime: '24 hours',
  },

  // ── SOCIAL MEDIA ────────────────────────────────────────────────────────────
  social: {
    facebook: '',
    youtube: '',
    instagram: '',
    whatsapp: '6085759510',
  },

  // ── BIO ─────────────────────────────────────────────────────────────────────
  bio: {
    headline: 'A Life in Service to Dharma',
    heroText:
      'Born in the sacred land of Odisha and trained at Sampurnanand Sanskrit Vishwavidyalaya, Kashi — over 20 years of devotion bringing authentic Vedic rituals, Katha Vachan, and life ceremonies to families across North America.',
    paragraph1:
      "Born and raised in the spiritually rich land of Odisha, Gopal Chandra Shastri Jee was immersed in Vedic culture from his earliest years. His formal education at the renowned Sampurnanand Sanskrit Vishwavidyalaya in Kashi — one of India's most prestigious centres of Sanskrit and Vedic learning — gave him a deep mastery of Karmakanda, Katha Vachan, and the full spectrum of Hindu ritual traditions.",
    paragraph2:
      "With over two decades of service as Head Priest at temples in India, the Dallas–Fort Worth area, and Houston, Shastriji has guided thousands of families through life's most sacred milestones — from the joy of a child's first rice-feeding to the solemnity of last rites, and every ceremony in between.",
  },

  // ── STATS ───────────────────────────────────────────────────────────────────
  stats: [
    { num: '20+', label: 'Years of service' },
    { num: '500+', label: 'Families served' },
    { num: '6+', label: 'Languages' },
    { num: 'DFW', label: '& Houston, TX' },
  ],

  aboutStats: [
    { num: '20+', label: 'Years of service' },
    { num: '6+', label: 'Languages' },
    { num: 'All', label: 'Indian traditions' },
  ],

  // ── LANGUAGES ───────────────────────────────────────────────────────────────
  languages: ['Hindi', 'Odia', 'Telugu', 'Bengali', 'Sanskrit', 'English', '+ more'],

  // ── TIMELINE ────────────────────────────────────────────────────────────────
  timeline: [
    {
      year: 'Birth',
      title: 'Born in Odisha, India',
      text: 'Raised in a deeply spiritual environment in Odisha, Shastriji developed an early love of Sanskrit, scripture, and ritual from his family and community.',
    },
    {
      year: 'Education',
      title: 'Sampurnanand Sanskrit Vishwavidyalaya, Kashi',
      text: "Completed his Vedic education at one of India's oldest and most respected Sanskrit universities, specialising in Karmakanda, Katha Vachan, and Vedic ritual procedure.",
    },
    {
      year: 'India',
      title: 'Head Priest — Temples across India',
      text: 'Served as head priest at temples across India, conducting major Mahotsavams, Katha events, Havans, and thousands of family Samskaras.',
    },
    {
      year: 'USA',
      title: 'Head Priest — Dallas–Fort Worth & Houston',
      text: 'Brought his Vedic expertise to North America, serving as head priest at temples in the DFW and Houston areas, serving families of all regional Indian traditions.',
    },
  ],

  // ── SPECIALISATIONS ─────────────────────────────────────────────────────────
  specialisations: [
    { title: 'Katha Vachan', desc: 'Bhagwat Katha, Ram Katha, Shiv Maha Puran, Devi Bhagwat, and more' },
    { title: 'Vedic Samskaras', desc: 'All 16 life ceremonies from birth to death, North & South Indian style' },
    { title: 'Havan & Homam', desc: 'Navagraha, Ganesh, Mrityunjaya, Sudarshana, Vastu & more' },
  ],

  // ── FEATURED SERVICES (Home page — 3 pillars) ───────────────────────────────
  featuredServicesSubtitle: 'Three pillars of spiritual service for your family and community',
  featuredServices: [
    {
      title: 'Temple Pooja',
      desc: 'Join daily and special poojas at the temple. Open to all devotees — Abhishekam, Aarti, and seasonal festivals.',
    },
    {
      title: 'Home & Business Pooja',
      desc: 'Book Shastriji for sacred rituals at your home or office. Griha Pravesh, Vastu Shanti, Satyanarayan Katha, and more.',
    },
    {
      title: 'Life Event Ceremonies',
      desc: 'Samskaras from birth to marriage — Namakaran, Annaprashan, Mundan, Upanayana, Vivah, and all rites of passage.',
    },
  ],

  // ── ALL SERVICES (Services page) ────────────────────────────────────────────
  services: [
    {
      title: 'Regular Pooja',
      items: [
        { name: 'Ganesh Pooja', desc: 'Morning / Evening' },
        { name: 'Satyanarayan Katha', desc: 'Monthly & on demand' },
        { name: 'Lakshmi Pooja', desc: 'Fridays & Deepawali' },
        { name: 'Rudrabhishek', desc: 'Monday Shravan' },
        { name: 'Navagraha Pooja', desc: 'Planetary remedy' },
        { name: 'Durga Saptashati', desc: 'Navaratri & monthly' },
        { name: 'Vishnu Sahasranama', desc: 'Ekadashi' },
        { name: 'Sundarkand Path', desc: 'Tuesday & Saturday' },
      ],
    },
    {
      title: 'Havan & Homam',
      items: [
        { name: 'Ganesh Havan', desc: 'Remove obstacles' },
        { name: 'Navagraha Homa', desc: 'Planetary remedy' },
        { name: 'Mrityunjaya Homa', desc: 'Health & longevity' },
        { name: 'Vastu Havan', desc: 'New home / office' },
        { name: 'Sudarshana Homa', desc: 'Protection' },
        { name: 'Ayush Homa', desc: 'Long life & health' },
      ],
    },
    {
      title: 'Life Event Samskaras',
      items: [
        { name: 'Jatakarma', desc: 'Birth ceremony' },
        { name: 'Namakaran', desc: 'Naming ceremony' },
        { name: 'Annaprashan', desc: 'First solid food' },
        { name: 'Karnavedha', desc: 'Ear piercing' },
        { name: 'Nath / Nasavedha', desc: 'Nose piercing' },
        { name: 'Mundan / Chudakarma', desc: 'First hair removal' },
        { name: 'Upanayana', desc: 'Sacred thread ceremony' },
        { name: 'Vivah / Wedding', desc: 'Marriage ceremony' },
        { name: 'Antim Sanskar', desc: 'Last rites' },
      ],
    },
    {
      title: 'Katha Vachan',
      items: [
        { name: 'Bhagwat Katha', desc: '1 day or 7 days' },
        { name: 'Ram Katha', desc: '1 day or multi-day' },
        { name: 'Shiv Maha Puran', desc: 'Per day' },
        { name: 'Devi Bhagwat', desc: 'Navaratri special' },
        { name: 'Sundarkand Path', desc: 'Group recitation' },
      ],
    },
    {
      title: 'Business & Vastu',
      items: [
        { name: 'Griha Pravesh', desc: 'House warming' },
        { name: 'Vastu Shanti', desc: 'Property blessing' },
        { name: 'Business Opening Pooja', desc: 'New business' },
        { name: 'Bhoomi Pujan', desc: 'Groundbreaking' },
        { name: 'Satyanarayan Katha', desc: 'Business milestone' },
      ],
    },
  ],

  // ── TESTIMONIALS ────────────────────────────────────────────────────────────
  testimonials: [
    {
      text: "Shastriji performed our daughter's Annaprashan with such warmth and authenticity. Every shloka was explained beautifully — our whole family was deeply moved.",
      name: 'Sunita Patel',
      event: 'Annaprashan · Plano, TX',
      initials: 'SP',
    },
    {
      text: 'Our Griha Pravesh was traditional, deeply spiritual, and on time. He accommodated our South Indian customs seamlessly. Highly recommended.',
      name: 'Ramesh Kumar',
      event: 'Griha Pravesh · Frisco, TX',
      initials: 'RK',
    },
    {
      text: 'The online booking was incredibly easy and payment was secure. The Satyanarayan Katha for our new business was a true blessing for our family.',
      name: 'Anjali Mehta',
      event: 'Business Pooja · Fort Worth, TX',
      initials: 'AM',
    },
  ],

  // ── EDUCATION ───────────────────────────────────────────────────────────────
  educationIntro: [
    {
      icon: '📖',
      title: 'Rooted in tradition',
      desc: 'Authentic Vedic curriculum taught directly from scripture by a qualified Kashi-trained Pandit.',
    },
    {
      icon: '🌍',
      title: 'Relevant to modern life',
      desc: 'Practical application of dharmic principles for Hindu families living in the United States.',
    },
    {
      icon: '👨‍👩‍👧',
      title: 'For the whole family',
      desc: 'Programs designed for every age — from young children to adults seeking deeper spiritual understanding.',
    },
  ],

  educationPrograms: [
    {
      badge: 'Children · Ages 5–12',
      title: 'Bala Vihar — Sanskrit & Shloka',
      desc: 'Weekly classes teaching Devanagari script, simple Sanskrit shlokas, stories from the Ramayana and Mahabharata, and the meaning of Hindu festivals and rituals.',
      detail: ['Every Sunday morning', 'At the temple', 'Free for ages 5–8'],
    },
    {
      badge: 'Youth · Ages 13–18',
      title: 'Hindu Heritage Program',
      desc: 'Deeper engagement with Bhagavad Gita, Upanishads, Vedic philosophy, and the significance of Samskaras. Builds cultural identity for second-generation youth.',
      detail: ['Bi-weekly sessions', 'In-person & online', 'Certificate on completion'],
    },
    {
      badge: 'Adults',
      title: 'Bhagavad Gita Study Circle',
      desc: 'Weekly satsang and discourse on selected chapters of the Gita. Practical applications of Vedantic philosophy for everyday life and parenting.',
      detail: ['Every Saturday evening', 'In-person & Zoom', 'Open to all'],
    },
    {
      badge: 'Adults',
      title: 'Vedic Astrology (Jyotish)',
      desc: 'Introduction to Jyotish principles, birth chart reading, planetary periods, and muhurta (auspicious timing) for major life decisions.',
      detail: ['Monthly workshops', 'Limited seats', 'Contact to enroll'],
    },
    {
      badge: 'All Ages',
      title: 'Festival Workshops',
      desc: 'Hands-on learning around major festivals — Diwali, Navratri, Holi, Ganesh Chaturthi. Craft, story, ritual explanation, and prasad preparation.',
      detail: ['Seasonal schedule', 'Family-friendly', 'Free to attend'],
    },
    {
      badge: 'All Ages',
      title: 'Sanskrit Chanting & Mantra',
      desc: 'Learn correct pronunciation and meaning of key Vedic mantras, Stotras, and Suprabhatam. Suitable for beginners and devotees seeking refinement.',
      detail: ['Weekly sessions', 'In-person & online', 'Beginners welcome'],
    },
  ],

  // ── GALLERY ─────────────────────────────────────────────────────────────────
  gallery: {
    filters: ['All', 'Life Events', 'Pooja', 'Havan', 'Katha', 'Festival', 'Education'],
    photos: [
      { title: 'Wedding Ceremony', desc: 'A beautiful Vedic Vivah Sanskaar — seven steps, sacred fire, and lifelong vows.', category: 'Life Events', src: '' },
      { title: 'Ganesh Havan', desc: 'Sacred fire ritual invoking Lord Ganesh — removal of obstacles and new beginnings.', category: 'Havan', src: '' },
      { title: 'Annaprashan', desc: 'The joyous first rice-feeding ceremony for a six-month-old, surrounded by family.', category: 'Life Events', src: '' },
      { title: 'Navaratri Festival', desc: 'Nine nights of Devi worship — the temple adorned with flowers and lights.', category: 'Festival', src: '' },
      { title: 'Griha Pravesh', desc: 'House warming blessings — Vastu Pooja and sacred threshold crossing.', category: 'Pooja', src: '' },
      { title: 'Bala Vihar Class', desc: 'Children learning Sanskrit shlokas — the next generation carrying dharma forward.', category: 'Education', src: '' },
      { title: 'Mundan Ceremony', desc: 'The sacred first haircut — a joyful family moment full of blessings.', category: 'Life Events', src: '' },
      { title: 'Diwali Pooja', desc: 'Deepawali Lakshmi Pooja at the temple — lamps, flowers, and the goddess of prosperity.', category: 'Festival', src: '' },
      { title: 'Rudrabhishek', desc: 'Sacred Shiva Abhishekam with milk, honey, and sacred water.', category: 'Pooja', src: '' },
      { title: 'Satyanarayan Katha', desc: 'Families gathered for Katha Vachan — stories from the Skanda Purana.', category: 'Katha', src: '' },
      { title: 'Upanayana', desc: "Sacred thread ceremony — a young boy's initiation into Vedic learning.", category: 'Life Events', src: '' },
      { title: 'Bhagwat Katha', desc: 'Seven-day Bhagwat Katha discourse — devotees from across DFW gathered.', category: 'Katha', src: '' },
    ],
    videos: [
      { title: 'Wedding Ceremony Highlights', duration: '12 min', category: 'Life Events', src: '' },
      { title: 'Rudrabhishek — Full Recitation', duration: '28 min', category: 'Pooja', src: '' },
      { title: 'Navagraha Homa — Morning Ritual', duration: '45 min', category: 'Havan', src: '' },
      { title: 'Satyanarayan Katha — Full Discourse', duration: '90 min', category: 'Katha', src: '' },
      { title: 'Bala Vihar — Sanskrit Shloka Class', duration: '20 min', category: 'Education', src: '' },
      { title: 'Diwali Celebration at the Temple', duration: '8 min', category: 'Festival', src: '' },
    ],
  },

  // ── BOOKING ─────────────────────────────────────────────────────────────────
  booking: {
    advanceBookingDays: 1,
    approvalRequired: true,
    approvalHours: 4,
    suggestedDakshina: '$51.00',
    timeSlots: ['6:00 AM', '7:30 AM', '9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM', '7:00 PM'],
    traditions: [
      'North Indian',
      'South Indian (Telugu)',
      'South Indian (Tamil)',
      'Bengali',
      'Odia',
      'Gujarati',
      'Marathi',
      'Other',
    ],
    languages: ['Hindi', 'English', 'Telugu', 'Bengali', 'Odia', 'Sanskrit'],
    categories: [
      {
        name: 'Regular Pooja',
        ceremonies: ['Ganesh Pooja', 'Satyanarayan Katha', 'Lakshmi Pooja', 'Rudrabhishek', 'Navagraha Pooja', 'Sundarkand Path'],
      },
      {
        name: 'Havan / Homam',
        ceremonies: ['Ganesh Havan', 'Navagraha Homa', 'Mrityunjaya Homa', 'Vastu Havan', 'Sudarshana Homa'],
      },
      {
        name: 'Life Events',
        ceremonies: ['Namakaran', 'Annaprashan', 'Mundan / Chudakarma', 'Karnavedha', 'Nath / Nose piercing', 'Upanayana', 'Vivah / Wedding', 'Antim Sanskar'],
      },
      {
        name: 'Katha Vachan',
        ceremonies: ['Bhagwat Katha (1 day)', 'Bhagwat Katha (7 days)', 'Ram Katha', 'Shiv Maha Puran', 'Devi Bhagwat'],
      },
      {
        name: 'Business / Vastu',
        ceremonies: ['Griha Pravesh', 'Vastu Shanti', 'Business Opening Pooja', 'Bhoomi Pujan'],
      },
      {
        name: 'Temple Pooja',
        ceremonies: ['Morning Aarti', 'Evening Aarti', 'Abhishekam', 'Festival Pooja'],
      },
    ],
  },

  // ── PAYMENT ─────────────────────────────────────────────────────────────────
  payment: {
    stripePublishableKey: '',
    currency: 'USD',
  },

  // ── ADMIN ───────────────────────────────────────────────────────────────────
  admin: {
    enabled: true,
    password: 'admin123',
  },

  // ── NAVIGATION ──────────────────────────────────────────────────────────────
  navLinks: [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/booking', label: 'Book a Pooja' },
    { href: '/education', label: 'Education' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],

  // ── FOOTER ──────────────────────────────────────────────────────────────────
  footerServices: ['Temple Pooja', 'Home Pooja', 'Life Events', 'Katha Vachan', 'Education'],
  footerInfoLinks: [
    { label: 'About Shastriji', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'Contact', href: '/contact' },
  ],

  // ── CONTACT FORM INQUIRY TYPES ───────────────────────────────────────────────
  contactInquiryTypes: [
    'Book a ceremony',
    'Education enquiry',
    'Pricing information',
    'Katha Vachan enquiry',
    'General question',
  ],
}

export type PriestConfig = typeof priestConfig
