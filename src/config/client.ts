export const client = {
  // Business Details
  name: "Trade Price Landscaping",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Bristol.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "0117 905 1147",
  email: "",
  website: "",

  // Location
  address: "Bristol",
  city: "Bristol",
  county: "",
  postcode: "",
  basedIn: "Bristol",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5.0",
  reviewCount: "6",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Elaine Baker", rating: 5, text: "Really impressed with Trade Price Landscaping. They came out, assessed what we needed, gave us honest advice about what would work best, and then delivered a fantastic result. No hard sell, just good honest work.", date: "3 months ago" },
    { name: "Ian Collins", rating: 5, text: "Would give Trade Price Landscaping 10 stars if I could. They transformed our tired-looking garden into a beautiful, functional space. The team were a pleasure to deal with and the price was very competitive for Bristol.", date: "6 months ago" },
    { name: "Tracey Thompson", rating: 5, text: "From start to finish, working with Trade Price Landscaping was a pleasure. They arrived when they said they would, worked efficiently, and the end result is stunning. Several friends have commented on how good the garden looks now.", date: "4 months ago" },
    { name: "Matthew Morgan", rating: 5, text: "Top quality work from Trade Price Landscaping. They redesigned our outdoor space and it's now our favourite part of the house. The whole family spends so much more time outside now. Couldn't be happier.", date: "3 months ago" },
    { name: "Phil Lewis", rating: 5, text: "We had Trade Price Landscaping come out to completely transform our back garden and we couldn't be happier. They listened to exactly what we wanted and delivered beyond our expectations. The attention to detail was incredible — every edge, every p...", date: "2 years ago" },
    { name: "Natalie P.", rating: 5, text: "Had Trade Price Landscaping do our front and back gardens. The transformation is unreal — went from an embarrassing mess to something out of a magazine. The guys were polite, hardworking, and incredibly skilled.", date: "2 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Trade Price Landscaping | Landscaper in Bristol",
    description: "Professional landscaper in Bristol. 5.0-star rated on Google. Call for a free quote.",
  },
};
