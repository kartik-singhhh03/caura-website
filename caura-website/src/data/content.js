/* ─── Services ─────────────────────────────────────────────────────────────── */
export const services = [
  {
    id: 1,
    icon: 'disability',
    title: 'Disability Support',
    description:
      'Personalised NDIS supports built around each participant\'s unique goals — promoting independence, confidence, and full community participation.',
    color: 'primary',
    statLabel: '3,200+ participants',
    link: '/our-work#disability',
  },
  {
    id: 2,
    icon: 'aged-care',
    title: 'Aged Care Support',
    description:
      'Respectful, culturally responsive aged care that honours dignity and keeps older Australians connected to the communities they love.',
    color: 'accent',
    statLabel: '1,800+ clients',
    link: '/our-work#aged-care',
  },
  {
    id: 3,
    icon: 'youth',
    title: 'Youth Transition',
    description:
      'Structured pathways for young people aged 15–24, navigating the move from school to employment, further education, or training.',
    color: 'sage',
    statLabel: '900+ young people',
    link: '/our-work#youth',
  },
  {
    id: 4,
    icon: 'community',
    title: 'Community Development',
    description:
      'Strengthening neighbourhoods through grassroots engagement, capacity building, and inclusive programs that bring people together.',
    color: 'primary',
    statLabel: '60+ communities',
    link: '/our-work#community',
  },
  {
    id: 5,
    icon: 'employment',
    title: 'Employment Pathways',
    description:
      'Skills development, job-readiness workshops, and employer partnerships that create meaningful, sustained employment outcomes.',
    color: 'accent',
    statLabel: '2,100+ job placements',
    link: '/our-work#employment',
  },
  {
    id: 6,
    icon: 'mentorship',
    title: 'Mentorship Programs',
    description:
      'Evidence-based mentoring that connects people with experienced guides who understand their journey and believe in their potential.',
    color: 'sage',
    statLabel: '400+ mentors',
    link: '/our-work#mentorship',
  },
]

/* ─── Impact Stats ──────────────────────────────────────────────────────────── */
export const stats = [
  { value: '8,400+', label: 'People Supported',     suffix: '' },
  { value: '14',     label: 'Years of Service',      suffix: '+' },
  { value: '7',      label: 'States & Territories',  suffix: '' },
  { value: '97',     label: 'Satisfaction Rate',     suffix: '%' },
]

export const storiesStats = [
  { value: '1M+',     label: 'Hours of care delivered',    sub: 'Since 2011' },
  { value: '12,400',  label: 'NDIS plans supported',       sub: 'Nationally' },
  { value: '0.9M',    label: 'Community interactions',     sub: 'Annually' },
  { value: '340',     label: 'Partner organisations',      sub: 'Across Australia' },
]

/* ─── Testimonials ──────────────────────────────────────────────────────────── */
export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    location: 'Melbourne, VIC',
    quote:
      'With the support of Caura, I was able to transition from care into stable employment. They treated me as a capable individual, not a statistic — and that changed everything.',
    service: 'Employment Pathways',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
    rating: 5,
  },
  {
    id: 2,
    name: 'James T.',
    location: 'Sydney, NSW',
    quote:
      'My NDIS support workers genuinely care. They help me live independently and chase my goals. Navigating the NDIS felt overwhelming — Caura made it manageable and gave me my confidence back.',
    service: 'Disability Support',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    rating: 5,
  },
  {
    id: 3,
    name: 'Helen K.',
    location: 'Brisbane, QLD',
    quote:
      'The aged care team visit Mum every week and have become like part of our family. We finally have peace of mind knowing she\'s in safe, loving, professional hands.',
    service: 'Aged Care Support',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80',
    rating: 5,
  },
  {
    id: 4,
    name: 'David R.',
    location: 'Perth, WA',
    quote:
      'The Step Up Youth Program gave my son the direction and skills he needed at a critical point in his life. Within three months he had secured an apprenticeship — something we thought was years away.',
    service: 'Youth Transition',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
    rating: 5,
  },
]

/* ─── Stories ───────────────────────────────────────────────────────────────── */
export const stories = [
  {
    id: 1,
    title: 'Finding Purpose After Injury',
    excerpt:
      'After a workplace accident left Daniel without direction, Caura\'s Employment Pathways program provided the skills, structure, and support to help him rebuild on his own terms.',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=700&q=80',
    category: 'Employment',
    readTime: '4 min read',
    date: 'February 2026',
  },
  {
    id: 2,
    title: 'A Community Rebuilt Together',
    excerpt:
      'In Western Sydney, our community development team worked alongside residents for 18 months to transform an under-resourced neighbourhood into a connected, thriving hub.',
    image:
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=700&q=80',
    category: 'Community',
    readTime: '6 min read',
    date: 'January 2026',
  },
  {
    id: 3,
    title: 'Year 12 to University: Amara\'s Journey',
    excerpt:
      'Through the Caura Youth Transition Program, Amara navigated complex systems to secure a university place — becoming the first in her family to do so.',
    image:
      'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=700&q=80',
    category: 'Youth',
    readTime: '5 min read',
    date: 'December 2025',
  },
  {
    id: 4,
    title: 'Living Independently at 28',
    excerpt:
      'With Caura\'s NDIS support coordination, Marcus moved into his own apartment and now manages his own schedule — a milestone that once felt impossibly distant.',
    image:
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=700&q=80',
    category: 'Disability Support',
    readTime: '5 min read',
    date: 'November 2025',
  },
]

/* ─── Programs ──────────────────────────────────────────────────────────────── */
export const programs = [
  {
    id: 1,
    title: 'NDIS Core Supports',
    tag: 'NDIS Registered',
    description:
      'Flexible, person-centred supports aligned with each participant\'s NDIS plan — from daily living activities to community access, social participation, and transport.',
    features: [
      'Daily Life & Living Skills',
      'Community Access & Social Participation',
      'Household Tasks & Personal Care',
      'Short-Term Accommodation (STA)',
    ],
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=750&q=80',
    color: 'primary',
  },
  {
    id: 2,
    title: 'Support Coordination',
    tag: 'NDIS Registered',
    description:
      'Specialist coordinators who help participants understand and maximise their NDIS plans, navigate the service landscape, and resolve challenges with confidence.',
    features: [
      'NDIS Plan Implementation',
      'Provider Sourcing & Coordination',
      'Crisis Response & Planning',
      'Plan Review Preparation',
    ],
    image:
      'https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=750&q=80',
    color: 'accent',
  },
  {
    id: 3,
    title: 'Step Up Youth Program',
    tag: 'Youth | 15–24 yrs',
    description:
      'A 12-week structured program that empowers young Australians with life skills, career clarity, and connections needed to step confidently into the next chapter.',
    features: [
      'Life Skills & Financial Literacy',
      'Career Exploration & Goal Setting',
      'Resume Building & Interview Prep',
      '1-on-1 Mentoring Matched by Industry',
    ],
    image:
      'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=750&q=80',
    color: 'sage',
  },
  {
    id: 4,
    title: 'Home & Community Aged Care',
    tag: 'Aged Care',
    description:
      'Comprehensive home care packages that support older Australians to remain safely and happily in their own homes, connected to the people and places they love.',
    features: [
      'Personal Care & Hygiene Support',
      'Domestic Assistance & Meal Prep',
      'Social Outings & Companionship',
      'Allied Health Coordination',
    ],
    image:
      'https://images.unsplash.com/photo-1576765974775-2a7a9b1e2bb6?auto=format&fit=crop&w=750&q=80',
    color: 'primary',
  },
]

/* ─── Partners ──────────────────────────────────────────────────────────────── */
export const partners = [
  { id: 1, name: 'NDIS / NDIA',          abbr: 'NDIA' },
  { id: 2, name: 'Dept. of Social Services', abbr: 'DSS' },
  { id: 3, name: 'Dept. of Health',       abbr: 'DoH' },
  { id: 4, name: 'Jobs Australia',        abbr: 'JA' },
  { id: 5, name: 'Carers Australia',      abbr: 'CA' },
  { id: 6, name: 'NDS Australia',         abbr: 'NDS' },
]

/* ─── Navigation ────────────────────────────────────────────────────────────── */
export const navLinks = [
  { label: 'Home',      to: '/'         },
  { label: 'About Us',  to: '/about'    },
  { label: 'Our Work',  to: '/our-work' },
  { label: 'Stories',   to: '/stories'  },
  { label: 'Contact',   to: '/contact'  },
]

/* ─── Footer links ──────────────────────────────────────────────────────────── */
export const footerLinks = {
  services: [
    { label: 'Disability Support',   to: '/our-work#disability'  },
    { label: 'Aged Care Support',    to: '/our-work#aged-care'   },
    { label: 'Youth Transition',     to: '/our-work#youth'       },
    { label: 'Community Development',to: '/our-work#community'   },
    { label: 'Employment Pathways',  to: '/our-work#employment'  },
    { label: 'Mentorship Programs',  to: '/our-work#mentorship'  },
  ],
  about: [
    { label: 'Our Story',     to: '/about'           },
    { label: 'Mission & Values', to: '/about#values' },
    { label: 'Caura Foundation', to: '/about#foundation' },
    { label: 'News & Updates',   to: '/stories'      },
    { label: 'Careers',          to: '/contact'      },
  ],
  getInvolved: [
    { label: 'Make a Donation',    to: '/contact#donate'    },
    { label: 'Volunteer With Us',  to: '/contact#volunteer' },
    { label: 'Refer Someone',      to: '/contact#refer'     },
    { label: 'Corporate Partners', to: '/contact#partners'  },
  ],
}
