/**
 * Site content — Ravi Prakash's personal portfolio.
 * Palette: Near-Black #0C0C0C / Gold #C9972E / Ivory #F5F1E6
 */

export const site = {
  name: 'Ravi Prakash',
  shortName: 'RK.',
  eyebrow: 'AVAILABLE FOR SELECT OPPORTUNITIES',
  location: 'Bangalore, India',
  email: 'immraviprakash@gmail.com',
  phone: '+91 63616 63390',
  title: 'Ravi Prakash - Portfolio',
  description:
    'Ravi Prakash is a web developer based in Bangalore building fast, thoughtful full-stack products, interactive systems, and AI-powered experiences.',
  social: {
    github: 'https://github.com/immraviprakash',
    linkedin: 'https://www.linkedin.com/in/ravi-prakash-k-4953b8251',
    instagram: 'https://www.instagram.com/zixshades',
    email: 'mailto:immraviprakash@gmail.com',
    phone: 'tel:+916361663390',
  },
}

export const navItems = [
  { id: 'about', label: 'ABOUT' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'contact', label: 'CONTACT' },
]

/* Dynamic typewriter roles for the hero */
export const heroRoles = [
  { article: 'a', role: 'Web Developer' },
  { article: 'an', role: 'Artist' },
  { article: 'a', role: 'Designer' },
  { article: 'a', role: 'Writer' },
]

/* Notebook content — About Me field notes */
export const notebook = {
  header: 'FIELD NOTES',
  location: 'BANGALORE, IN',
  entries: [
    {
      label: 'CURRENTLY',
      value: 'Building web experiences,\nAI-integrated products & experiments.',
    },
    {
      label: 'APPROACH',
      value: 'Simple interfaces.\nThoughtful systems.\nUseful technology.',
    },
    {
      label: 'WORKING WITH',
      value: 'JavaScript · React · Node.js\nPython · SQL · APIs',
    },
    {
      label: 'EXPERIMENTING WITH',
      value: 'AI systems · Product design\nCreative technology',
    },
    {
      label: 'BEYOND CODE',
      value: 'Music · Design · Ideas\nLearning how things work.',
    },
  ],
  footnote: 'Building things that feel clear.',
}

export const aboutContent = {
  eyebrow: 'ABOUT ME',
  headline: 'I build thoughtful digital experiences where code, design and ideas come together.',
  body: "I'm a full-stack developer who enjoys turning ideas into clean, functional products. I work across modern web technologies, building responsive interfaces, scalable backends and AI-powered experiences. I'm equally interested in the details that make a product work well and the creative thinking that makes it feel right.",
  profileCard: {
    monogram: 'RK.',
    subtitle: 'FULL-STACK DEV · AI ENTHUSIAST',
    skillsLabel: 'MY SKILLS',
    skills: ['React', 'Node.js', 'Python', 'AI/GenAI', 'REST APIs', 'SQL'],
    exploringLabel: 'CURRENTLY EXPLORING',
    exploring: ['Agentic AI', 'Creative Web', 'Product Development'],
    languagesLabel: 'LANGUAGES KNOWN',
    languages: ['English', 'Kannada', 'Tamil', 'Telugu', 'Hindi'],
    location: 'BANGALORE · INDIA',
  },
}

export const projects = [
  {
    id: 'zixovibes',
    number: '01',
    kicker: 'FULL-STACK MUSIC & FOCUS WORKSPACE',
    name: "Zix'Ovibes",
    oneLiner:
      'A full-stack music and focus workspace combining music discovery, playlists and persistent playback with an AI-powered Deep Focus system. Users can describe what they want to accomplish in natural language, then turn that goal into structured tasks, timed work sessions and trackable progress.',
    stack: ['REACT.JS', 'VITE', 'JAVASCRIPT', 'NODE.JS', 'EXPRESS', 'AI APIS'],
    links: {
      github: 'https://github.com/immraviprakash/zixovibes',
      live: 'https://zixovibes.netlify.app/',
    },
    problem:
      'Focus setups usually live in pieces: a playlist in one tab, a timer in another, tasks somewhere else. The cost is the constant context switching.',
    solution:
      "Zix'Ovibes merges an uninterrupted ambient audio player with an intelligent Deep Focus task orchestration engine that converts natural language intent into timed work blocks.",
    features: [
      'Deep Focus natural language goal decomposition',
      'Intelligent Pomodoro block allocation',
      'Persistent audio playback across routes',
      'Curated lo-fi soundscapes & playlists',
    ],
  },
  {
    id: 'rakta-seva',
    number: '02',
    kicker: 'AI-ASSISTED EMERGENCY BLOOD-DONATION PLATFORM',
    name: 'Rakta Seva Connect',
    oneLiner:
      'An Android application developed during my MindMatrix internship to coordinate blood donors and emergency requests. The system combines donor profiles, blood-group and eligibility filtering, proximity-based discovery, Firebase-backed workflows, emergency notifications and AI-assisted request communication.',
    stack: ['KOTLIN', 'JETPACK COMPOSE', 'FIREBASE', 'FIRESTORE', 'MVVM', 'GROQ AI'],
    links: {
      github: 'https://github.com/immraviprakash/rakta-seva-connect',
      live: null,
    },
    problem:
      'Locating verified, eligible blood donors during hospital emergencies is obstructed by fragmented communication and delayed response coordination.',
    solution:
      'An Android application developed during my MindMatrix internship featuring proximity discovery, eligibility filtering, Firebase-backed workflows, and AI-assisted request communication.',
    features: [
      'Emergency notifications & request coordination',
      'Donor profiles & eligibility filtering',
      'Proximity-based donor discovery',
      'AI-assisted request communication via Groq AI',
    ],
  },
  {
    id: 'trade-z',
    number: '03',
    kicker: 'COLLABORATIVE AI TRADING ASSISTANT',
    name: 'Trade-Z',
    oneLiner:
      'A collaborative AI trading assistant combining LSTM-based market forecasting, reinforcement-learning strategy signals and sentiment analysis. Built with a React–Flask architecture, with my contribution focused on backend development and AI workflow integration.',
    stack: ['PYTHON', 'FLASK', 'REACT.JS', 'LSTM', 'REINFORCEMENT LEARNING', 'NLP'],
    links: {
      github: 'https://github.com/immraviprakash/trade-z',
      live: null,
    },
    problem:
      'Evaluating market trends requires synthesizing price time-series, trading signals, and market sentiment across disparate tools.',
    solution:
      'A collaborative AI trading assistant combining LSTM market forecasting, reinforcement-learning strategy signals, and sentiment analysis via a React–Flask architecture.',
    features: [
      'LSTM-based market forecasting models',
      'Reinforcement-learning strategy signals',
      'NLP-based market sentiment analysis',
      'Flask backend development & AI workflow integration',
    ],
  },
]

export const skillsSection = {
  eyebrow: 'WHAT I WORK WITH',
  headline: 'A mix of technologies I use to build, experiment, and bring ideas to life.',
  categories: [
    {
      id: 'build',
      number: '01',
      label: 'BUILD',
      skills: [
        'JavaScript',
        'React',
        'Node.js',
        'Express.js',
        'Flask',
        'REST APIs',
        'Kotlin',
        'Jetpack Compose',
        'HTML',
        'CSS',
      ],
    },
    {
      id: 'intelligence',
      number: '02',
      label: 'INTELLIGENCE',
      skills: [
        'Python',
        'Generative AI',
        'AI / LLM APIs',
        'Prompt Engineering',
        'RAG',
        'Machine Learning',
        'NLP',
        'Sentiment Analysis',
        'LSTM',
        'Reinforcement Learning',
        'Explainable AI',
      ],
    },
    {
      id: 'data',
      number: '03',
      label: 'DATA',
      skills: [
        'SQL',
        'MySQL',
        'MongoDB',
        'Firebase Firestore',
      ],
    },
    {
      id: 'tools-cloud',
      number: '04',
      label: 'TOOLS & CLOUD',
      skills: [
        'Git',
        'GitHub',
        'Firebase',
        'Google Cloud',
        'Render',
        'Vercel',
        'Netlify',
      ],
    },
  ],
}

export const experience = [
  {
    company: 'MindMatrix',
    role: 'Android Application Development Intern (GenAI)',
    type: 'Internship',
    period: 'Feb 2026 – May 2026',
    location: 'Remote, Bangalore',
    bullets: [
      'Developed Android applications using Kotlin, Jetpack Compose, and MVVM architecture.',
      'Contributed to Rakta Seva Connect, implementing donor discovery and emergency request management workflows.',
      'Integrated Firebase Authentication, Firestore, APIs, and Groq AI services for user data management, cloud synchronization, and AI-assisted communication.',
    ],
    tags: ['KOTLIN', 'JETPACK COMPOSE', 'MVVM', 'FIREBASE', 'FIRESTORE', 'GROQ AI'],
  },
  {
    company: 'Sri Sairam College of Engineering',
    role: 'B.E. in Computer Science & Engineering',
    type: 'Education',
    period: '2022 – 2026',
    location: 'Bangalore',
  },
]

export const contactContent = {
  eyebrow: 'OPEN INVITATION',
  headline: "Let's build something.",
  subtitle:
    'Have a product in mind, a problem worth unpacking, or just a good question? The first message can be rough.',
  email: 'immraviprakash@gmail.com',
  phone: '+91 63616 63390',
  location: 'Bangalore, India',
}
