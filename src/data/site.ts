import type { ImageMetadata } from 'astro';
import curtainsImage from '../assets/images/service-curtains-blinds.jpg';
import stagingImage from '../assets/images/service-home-staging.jpg';
import commonPartsImage from '../assets/images/service-common-parts.jpg';
import videoShowcase from '../assets/images/video-showcase.jpg';
import videoDayInTheLife from '../assets/images/video-day-in-the-life.jpg';

export const site = {
  name: 'Indigo Interiors',
  url: 'https://www.indigo-interiors.com',
  description:
    'Interior design for the residential and commercial sector in London: curtains and blinds, home staging and bespoke furniture packs, and common parts.',
  phone: {
    display: '+44 7976 155741',
    href: 'tel:+447976155741',
  },
  email: 'info@indigo-int.co.uk',
  credit: {
    name: 'Jake Lowy',
    href: 'https://jakelowy.webflow.io',
  },
};

export interface Service {
  slug: string;
  num: string;
  /** Full page title. */
  title: string;
  /** Title used on the Home cards and in the dropdown. */
  cardTitle: string;
  /** Label used in the footer and mobile menu. */
  navLabel: string;
  tagline: string;
  /** Subheading on the service page. */
  subtitle: string;
  body: string[];
  image: ImageMetadata;
  imageAlt: string;
}

export const services: Service[] = [
  {
    slug: 'curtains-and-blinds',
    num: '01',
    title: 'Curtains and Blinds',
    cardTitle: 'Curtains And Blinds',
    navLabel: 'Curtains and Blinds',
    tagline: 'Made to measure window treatments',
    subtitle: 'Bespoke Window Coverings for Every Property',
    body: [
      'At Indigo Interiors, we craft made-to-measure window coverings that transform any space. From curtains and Roman blinds to roller, Velux, perfect fit, electric tracks and wood Venetian blinds, we offer a wide range of fabrics, headings, and linings to suit every style and need.',
      'Our expert makers and fitters ensure exceptional quality at any price range, blending aesthetics with functionality. Whether you prefer contemporary minimalism or classic elegance, we deliver tailored designs with a flawless finish.',
      'Get in touch today to find the perfect window dressing for your property.',
    ],
    image: curtainsImage,
    imageAlt: 'Bedroom with a fitted Roman blind, dark headboard and cream bench',
  },
  {
    slug: 'home-staging-furniture-packs',
    num: '02',
    title: 'Home Staging & Bespoke Furniture Packs',
    cardTitle: 'Home Staging & Bespoke Furniture Packs',
    navLabel: 'Home Staging & Bespoke',
    tagline: 'We make your investment property feel like home',
    subtitle: 'We make your investment property feel like home',
    body: [
      'At Indigo Interiors, we help landlords, developers, and investors maximise rental yields and sales with expertly styled interiors. Our bespoke furniture packages make properties feel like home, attracting tenants and buyers instantly.',
      'Every property is unique, and so is our approach. We design tailored solutions to enhance appeal, reduce void periods, work to a budget and boost returns. From design to installation, our turnkey service handles everything, leaving your property market-ready.',
      'Covering all areas within the M25, we bring style, efficiency, and attention to detail to every project. Get in touch to transform your property today.',
    ],
    image: stagingImage,
    imageAlt: 'Console table styled with flowers, a brass lamp and abstract artwork',
  },
  {
    slug: 'common-parts',
    num: '03',
    title: 'Common Parts',
    cardTitle: 'Common Parts',
    navLabel: 'Common Parts',
    tagline: 'Elevate your communal spaces with Indigo Interiors',
    subtitle: 'Elevate your communal spaces with Indigo Interiors',
    body: [
      'At Indigo Interiors, we transform communal areas in residential and commercial developments into warm, inviting spaces. Our expert team carefully selects, installs, and arranges furniture, accessories, artwork, curtains, and blinds, enhancing shared environments with both style and functionality.',
      'Whether it’s a lobby, lounge, hallways or co-working space, we create welcoming atmospheres that leave a lasting impression.',
    ],
    image: commonPartsImage,
    imageAlt: 'Black and white photo of a furnished office reception with a polished floor',
  },
];

/** Gallery photos per service, from src/assets/gallery/<slug>/NN.jpg, in filename order. */
const galleryFiles = import.meta.glob<{ default: ImageMetadata }>('../assets/gallery/*/*.jpg', { eager: true });

export const galleryFor = (slug: string): ImageMetadata[] =>
  Object.entries(galleryFiles)
    .filter(([path]) => path.includes(`/gallery/${slug}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, mod]) => mod.default);

export const serviceHref = (slug: string) => `/services/${slug}/`;

export const routes = {
  home: '/',
  about: '/about/',
  contact: '/contact/',
};

/** Every page, in the order used by the mobile menu and footer. */
export const allPages = [
  { label: 'Home', href: routes.home },
  { label: 'About Us', href: routes.about },
  ...services.map((s) => ({ label: s.navLabel, href: serviceHref(s.slug) })),
  { label: 'Contact Us', href: routes.contact },
];

export const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/indigointeriors/' },
  { label: 'X', href: 'https://x.com/indigointeriors' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/indigo-interiors/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@indigointeriors1' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@indigo.interiors1' },
];

export const videos = [
  {
    id: 'N3NElSEqvyE',
    eyebrow: 'As Featured on Property TV',
    title: 'Indigo Interiors Showcase',
    thumbnail: videoShowcase,
  },
  {
    id: '6Uovfcv7zbE',
    eyebrow: 'A Day in the Life',
    title: 'A day with Indigo Interiors - take a look inside this beautiful London property',
    thumbnail: videoDayInTheLife,
  },
];

export const testimonials = [
  {
    quote:
      'Janine provided us with stellar service. Her design expertise and skill took our home to the next level.',
    name: 'Mr MM',
  },
  {
    quote:
      'We had a great experience working with Janine, Russell and the team. Attention to details great, and we always felt in safe hands. Was great communication and advice for the entire journey. Highly recommended.',
    name: 'Mr JW',
  },
  {
    quote:
      'I used Indigo Interiors for new curtains and a blind, plus a repair on an existing blind. Janine was so helpful with choosing fabrics and immediately understood what I was after and helped source fabrics she knew were in stock and available. I am very happy with the fitting of the curtains and blinds, and so pleased I used Indigo, nothing was any trouble.',
    name: 'Mrs NF',
  },
];
