// Svg Icon Imports
import { github, instagram, linkedin, facebook, mail, phone, location, } from '../assets';

// Icon Imports
import {
  html, css, javascript, react, nextjs, vue, tailwind, bootstrap, gsap, php, figma, git, npm,
} from '../assets/icons';

// Logo Imports
import {
  qcu, bcp, htmllogo, csslogo, jslogo, figmalogo, reactlogo, vuelogo, nextlogo, phplogo, netlogo, gsaplogo, framerlogo, nodelogo, expresslogo, mongodblogo, postmanlogo, vitelogo, vercellogo, gitlogo, githublogo, npmlogo, vscodelogo, vslogo, tailwindlogo, bootstraplogo, FMLogo, fmUILogo,
} from '../assets/logos';

// Certification Imports
import {
  cert01, cert02, cert03, cert04, cert05, cert06, cert07, cert08, cert09, cert10, cert11, cert12, cert13, cert14, cert15
} from '../assets/certifications';

// Profile Imports
import { FrederickMoreno, LianTorres, KielMariceSerrano } from '../assets/profiles';

// Graphics Imports
import {
  TechCommrGraphics, fmUIGraphics, FMPortfolioGraphics, FMDailyUIGraphics, FMGalleryGraphics, quackOverflowGraphics, FUNKOshopGraphics,
} from '../assets/graphics';

// Banner and Thumbnail Imports
import {
  TechCommrThumbnail, TechCommrBanner, fmUIThumbnail, fmUIBanner, FMPortfolioThumbnail, FMPortfolioBanner, FMDailyUIBanner, FMDailyUIThumbnail, FMGalleryThumbnail, FMGalleryUIBanner, quackOverflowThumbnail, quackOverflowBanner, FUNKOshopThumbnail, FUNKOshopBanner,
} from '../assets/banners';

// Navigation Links Data
export const navLinks = [
  { id: 'home', title: 'HOME', },
  { id: 'about', title: 'ABOUT', },
  { id: 'education', title: 'EDUCATION', },
  { id: 'expertise', title: 'EXPERTISE', },
  { id: 'projects', title: 'PROJECTS', },
  { id: 'contact', title: 'CONTACT', },
]

// Socials Data
export const Socials = [
  {
    svg: 'M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z',
    name: "GITHUB",
    link: "https://www.github.com/fwedwicc",
  },
  {
    svg: 'M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z',
    name: "LINKEDIN",
    link: "https://www.linkedin.com/in/frederick-moreno/",
  },
  {
    svg: 'M12 2a10 10 0 1 0 10 10A10.009 10.009 0 0 0 12 2Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.093 20.093 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM10 3.707a8.82 8.82 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.755 45.755 0 0 0 10 3.707Zm-6.358 6.555a8.57 8.57 0 0 1 4.73-5.981 53.99 53.99 0 0 1 3.168 4.941 32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.641 31.641 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM12 20.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 15.113 13a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z',
    name: "DRIBBBLE",
    link: "https://dribbble.com/fwedwic",
  },
  {
    svg: 'M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z',
    name: "INSTAGRAM",
    link: "https://instagram.com/freefinnn",
  },
  {
    svg: 'M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z',
    name: "FACEBOOK",
    link: "https://facebook.com/fwedwic",
  }
];

// Hero Data
export const HeroData = [
  {
    role: ["Front-end", "UI/UX"],
    name: "FREDERICK MORENO",
    content: " a BSIT student based in the Philippines. I am a Front-end Developer and UI/UX Designer, combining technology and creativity. I'm also a traditional artist, bringing a unique blend of artistic sensibility and technical expertise to all my projects."
  }
]

// About Data
export const AboutData = [
  {
    whoAmI: [
      {
        name: "Frederick Moreno",
        content: "A dedicated BSIT student from the Philippines with a fervent passion for technology and creativity. My digital career focuses on front-end development and UI/UX design, aiming to create seamless and engaging user experiences. My expertise lies in bridging the gap between design and development, ensuring that every project is both functional and visually appealing. Beyond my technical pursuits, I am a traditional artist, bringing a unique blend of artistic sensibility and technical prowess to my work.",
        badge: [
          { title: "Front-end Developer", svgPath: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" },
          { title: "UI/UX Designer", svgPath: "m4.988 19.012 5.41-5.41m2.366-6.424 4.058 4.058-2.03 5.41L5.3 20 4 18.701l3.355-9.494 5.41-2.029Zm4.626 4.625L12.197 6.61 14.807 4 20 9.194l-2.61 2.61Z" },
          { title: "Traditional Artist", svgPath: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" },
        ]
      }
    ],
    howItStarted: [
      {
        icons: [
          { icon: html, tooltip: "HyperText Markup Language" },
          { icon: css, tooltip: "Cascading Style Sheet" },
          { icon: javascript, tooltip: "JavaScript" },
          { icon: figma, tooltip: "Figma" },
        ],
        content: "Way back in 2019 (SHS), my journey began with a curiosity for how websites work, leading me to dive into the world of web development. Starting with the basics of HTML, CSS, and JavaScript, I quickly found joy in crafting interactive and visually appealing web pages. As I honed my skills, Figma became my go-to tool for designing intuitive user interfaces, merging creativity with functionality. This foundation laid the groundwork for my ongoing passion and expertise in front-end development and UI/UX design."
      }
    ],
    howsItGoing: [
      {
        icons: [
          { icon: html, tooltip: "HyperText Markup Language" },
          { icon: css, tooltip: "Cascading Style Sheet" },
          { icon: javascript, tooltip: "JavaScript" },
          { icon: figma, tooltip: "Figma" },
          { icon: react, tooltip: "React JS" },
          { icon: nextjs, tooltip: "Next JS" },
          { icon: vue, tooltip: "Vue JS" },
          { icon: php, tooltip: "Hypertext Preprocessor" },
          { icon: tailwind, tooltip: "Tailwind CSS" },
          { icon: bootstrap, tooltip: "Bootstrap" },
        ],
        content: `Since starting in web development, I have significantly expanded my skill set. I've mastered HTML, CSS, and JavaScript, and embraced modern frameworks like React JS, Next JS, and Vue JS. PHP aids my server-side scripting, while Tailwind CSS and Bootstrap ensure responsive design. This diverse expertise allows me to create functional and visually engaging projects, driven by a passion for continuous learning and growth in web development and UI/UX design.`
      }
    ],
    education: [
      {
        logo: bcp,
        title: 'BCP',
        name: 'Bestlink College of the Philippines',
        level: 'Senior High School (2019 - 2021)',
        course: 'Information and Communication Technology'
      },
      {
        title: 'BCP',
        name: 'Bestlink College of the Philippines',
        level: 'Tertiary - 1st Year College (2022)',
        course: 'Bachelor of Science in Information Technology'
      },
      {
        logo: qcu,
        title: 'QCU',
        name: 'Quezon City University',
        level: 'Tertiary (2022 - Present)',
        course: 'Bachelor of Science in Information Technology'
      }
    ]
  }
];

export const ProjectData = [
  {
    title: "Projects",
    content: "This section serves as a comprehensive showcase of my innovative and creative web development projects. In these endeavors, I take on multiple roles, including Front-end Developer and UI/UX Designer, to ensure the delivery of high-quality websites and web applications.",
    badge: [
      { title: "Front-end Development", svgPath: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" },
      { title: "UI/UX Design", svgPath: "m4.988 19.012 5.41-5.41m2.366-6.424 4.058 4.058-2.03 5.41L5.3 20 4 18.701l3.355-9.494 5.41-2.029Zm4.626 4.625L12.197 6.61 14.807 4 20 9.194l-2.61 2.61Z" },
    ],
  }
];

export const ContactData = [
  {
    name: "Frederick Moreno",
    contacts: [
      { icon: mail, alt: "mail", name: "moreno.frederick.capiral@gmail.com" },
      { icon: phone, alt: "phone", name: "+63 951 432 6912" },
      { icon: location, alt: "location", name: "Caloocan City, Philippines" }
    ]
  }
];

export const ExpertiseData = [
  {
    techStacks: [
      { icon: htmllogo, tooltip: "HyperText Markup Language" },
      { icon: csslogo, tooltip: "Cascading Style Sheet" },
      { icon: jslogo, tooltip: "JavaScript" },
      { icon: reactlogo, tooltip: "ReactJS" },
      { icon: nextlogo, tooltip: "NextJS" },
      { icon: vuelogo, tooltip: "VueJS" },
      { icon: tailwindlogo, tooltip: "Tailwind CSS" },
      { icon: bootstraplogo, tooltip: "Bootstrap" },
      { icon: phplogo, tooltip: "Hypertext Preprocessor" },
      { icon: netlogo, tooltip: ".NET" },
      { icon: gsaplogo, tooltip: "GSAP" },
      { icon: framerlogo, tooltip: "Framer Motion" },
      { icon: vitelogo, tooltip: "Vite" },
      { icon: vercellogo, tooltip: "Vercel" },
      { icon: gitlogo, tooltip: "Git" },
      { icon: npmlogo, tooltip: "NPM" },
      { icon: figmalogo, tooltip: "Figma" },
      { icon: githublogo, tooltip: "GitHub" },
      { icon: vscodelogo, tooltip: "VS Code" },
      { icon: vslogo, tooltip: "Visual Studio" },
    ],
    githubStats: [],
    certifications: [
      {
        // TODO: Certification Link
        title: "Certifications",
        content: "My extensive collection includes a variety of completed courses, active participation in <br class='md:block hidden' /> numerous workshops and seminars, and from tech industry-relevant webinars.",
        btnText: "View Certificates",
        link: "https://drive.google.com/drive/folders/1zmwS59a85LqUvTd-WQXUFQ-SKbuyvmCv?usp=sharing",
        images01: [{ src: cert05 }, { src: cert06 }, { src: cert07 }, { src: cert01 }, { src: cert02 }, { src: cert03 }, { src: cert04 }, { src: cert02 }, { src: cert03 },
        ],
        images02: [{ src: cert11 }, { src: cert12 }, { src: cert08 }, { src: cert15 }, { src: cert09 }, { src: cert05 }, { src: cert10 }, { src: cert02 }, { src: cert03 },
        ]
      }
    ]
  }
];

export const ProjectOverviewData = [
  {
    // Tech-Commr
    id: 'Tech-Commr',
    type: 'special',
    pageStatus: 'Done',
    img: TechCommrThumbnail,
    title: 'Tech-Commr',
    desc: 'A platform delivering custom technical solutions in programming, web development, database management, graphic design, and paperworks for students and professionals.',
    roles: ['Front-end Developer', 'UI/UX Designer', 'Graphic Designer'],
    poster: TechCommrBanner,
    content: "Tech-Commr is a platform providing personalized technical solutions to help students and professionals succeed in academic and professional projects. From programming and web development to database management and graphic design, we offer a range of services tailored to each client's needs, ensuring precise and successful outcomes.",
    siteLink: "https://tech-commr.vercel.app/",
    githubLink: "https://github.com/itgauy/Tech-Commr",
    category: ['Startup Project', 'Full-Stack Project', 'Team Project', 'Business Project'],
    tools: [
      { icon: htmllogo, tooltip: "HyperText Markup Language" },
      { icon: csslogo, tooltip: "Cascading Style Sheet" },
      { icon: jslogo, tooltip: "JavaScript" },
      { icon: reactlogo, tooltip: "ReactJS" },
      { icon: nodelogo, tooltip: "NodeJS" },
      { icon: expresslogo, tooltip: "ExpressJS" },
      { icon: mongodblogo, tooltip: "MongoDB" },
      { icon: postmanlogo, tooltip: "Postman" },
      { icon: tailwindlogo, tooltip: "Tailwind CSS" },
      { icon: framerlogo, tooltip: "Framer Motion" },
      { icon: githublogo, tooltip: "GitHub" },
      { icon: gitlogo, tooltip: "Git" },
      { icon: vitelogo, tooltip: "Vite" },
      { icon: npmlogo, tooltip: "NPM" },
    ],
    graphics: TechCommrGraphics,
    date: 'August 2024 - September 2024',
    status: 'Finished',
    contributor: [
      {
        profile: LianTorres,
        name: 'Lian Torres',
        role: ['Founder', 'Lead Programmer', 'Back-end Developer']
      },
      {
        profile: FrederickMoreno,
        name: 'Frederick Moreno',
        role: ['Front-end Developer', 'UI/UX Designer', 'Graphic Designer']
      },
      // INSERT: Reanna Carreon | Ate totssss
      {
        profile: KielMariceSerrano,
        name: 'Kiel Marice Serrano',
        role: ['Project Coordinator', 'Social Media Manager', 'System Analyst']
      },
    ],
    summary: "As the lead Front-end Developer, UI/UX Designer, and Graphic Designer at Tech-Commr, I focus on delivering custom solutions that are both visually compelling and functionally seamless. From design to execution, I ensure each project meets the highest standards, driving success through expert design and technical precision."
  },
  {
    // TODO: profolios Project Content
    // profolios
    id: 'profolios',
    type: 'special',
    pageStatus: '',
    img: '',
    title: 'profolios',
    desc: 'profolios Description',
    roles: ['Web Developer', 'Front-end Developer', 'UI/UX Designer'],
    poster: '',
    content: "profolios Content",
    siteLink: "",
    githubLink: "https://github.com/fwedwicc/profolios",
    category: ['Freelance Project', 'Full-Stack Project', 'Business Project'],
    tools: [
      { icon: htmllogo, tooltip: "HyperText Markup Language" },
      { icon: csslogo, tooltip: "Cascading Style Sheet" },
      { icon: jslogo, tooltip: "JavaScript" },
      { icon: nextlogo, tooltip: "NextJS" },
      { icon: tailwindlogo, tooltip: "Tailwind CSS" },
      { icon: framerlogo, tooltip: "Framer Motion" },
      { icon: githublogo, tooltip: "GitHub" },
      { icon: gitlogo, tooltip: "Git" },
      { icon: npmlogo, tooltip: "NPM" },
    ],
    graphics: '',
    date: 'August 2024 - Present',
    status: 'Work in progress',
    contributor: [
      {
        profile: FrederickMoreno,
        name: 'Frederick Moreno',
        role: ['Web Developer', 'Front-end Developer', 'UI/UX Designer']
      }
    ],
    summary: 'profolios Summary'
  },
  {
    // fmUI
    id: 'fmUI',
    type: 'special',
    pageStatus: 'Done',
    img: fmUIThumbnail,
    title: 'fmUI',
    desc: 'A project aimed at providing a diverse range of open-source Tailwind CSS components and templates for seamless web development.',
    roles: ['Web Developer', 'UI/UX Designer'],
    poster: fmUIBanner,
    content: "fmUI is an extensive collection of free Tailwind CSS components and templates created specifically for your forthcoming project. With a diverse set of components and sample pages, you are able to develop websites, web apps, and much more.",
    siteLink: "https://fwedwicc.github.io/fmUI/",
    githubLink: "https://github.com/fwedwicc/fmUI",
    category: ['Web Development Project', 'UI/UX Design Project', 'Career Project'],
    tools: [
      { icon: htmllogo, tooltip: "HyperText Markup Language" },
      { icon: csslogo, tooltip: "Cascading Style Sheet" },
      { icon: jslogo, tooltip: "JavaScript" },
      { icon: reactlogo, tooltip: "ReactJS" },
      { icon: tailwindlogo, tooltip: "Tailwind CSS" },
      { icon: framerlogo, tooltip: "Framer Motion" },
      { icon: githublogo, tooltip: "GitHub" },
      { icon: gitlogo, tooltip: "Git" },
      { icon: vitelogo, tooltip: "Vite" },
      { icon: npmlogo, tooltip: "NPM" },
    ],
    graphics: fmUIGraphics,
    date: 'June 2024 - Present',
    status: 'Work in progress',
    contributor: [
      {
        profile: FrederickMoreno,
        name: 'Frederick Moreno',
        role: ['Web Developer', 'Front-end Developer', 'UI/UX Designer']
      },
    ],
    summary: "As the Web Developer and UI/UX Designer for this project, I am dedicated to crafting and maintaining high-quality components and templates. Every Tailwind CSS component was thoughtfully designed from scratch, ensuring a seamless and error-free experience across the application. My role is to ensure that each element not only meets the project's aesthetic goals but also functions flawlessly."
  },
  {
    // FM DailyUI
    id: 'FM-DailyUI',
    pageStatus: 'Done',
    img: FMDailyUIThumbnail,
    title: 'FM DailyUI',
    desc: 'A curated collection of 100 Days of UI challenge prompts from https://www.dailyui.co, showcasing creative and innovative UI designs using my design system; fmUI.',
    roles: ['Front-end Developer', 'UI/UX Designer'],
    poster: FMDailyUIBanner,
    content: "FM DailyUI is an extensive compilation of 100 Days of UI challenge prompts from DailyUI. This project showcases a wide range of creative and innovative UI designs, each crafted using my custom design system, fmUI. It's a journey through diverse design challenges, highlighting the versatility and capabilities of fmUI in creating dynamic and visually appealing user interfaces.",
    siteLink: "https://fwedwicc.github.io/FM-DailyUI/",
    githubLink: "https://github.com/fwedwicc/FM-DailyUI",
    category: ['Front-end Development Project', 'UI/UX Design Project', 'Career Project'],
    tools: [
      { icon: htmllogo, tooltip: "HyperText Markup Language" },
      { icon: csslogo, tooltip: "Cascading Style Sheet" },
      { icon: jslogo, tooltip: "JavaScript" },
      { icon: reactlogo, tooltip: "ReactJS" },
      { icon: tailwindlogo, tooltip: "Tailwind CSS" },
      { icon: framerlogo, tooltip: "Framer Motion" },
      { icon: githublogo, tooltip: "GitHub" },
      { icon: gitlogo, tooltip: "Git" },
      { icon: vitelogo, tooltip: "Vite" },
      { icon: npmlogo, tooltip: "NPM" },
    ],
    graphics: FMDailyUIGraphics,
    date: 'July 2024 - Present',
    status: 'Work in progress',
    contributor: [
      {
        profile: FrederickMoreno,
        name: 'Frederick Moreno',
        role: ['Web Developer', 'Front-end Developer', 'UI/UX Designer']
      },
    ],
    summary: 'As a Front-end Developer and UI/UX Designer, I tackled the 100 Days of UI challenge from DailyUI by crafting original, dynamic designs using my custom system, fmUI. This project showcases my ability to merge design and development, creating flexible, visually striking user interfaces that excel in both aesthetics and functionality, even when facing complex challenges.'
  },
  {
    // FM Gallery
    id: 'FM-Gallery',
    pageStatus: 'Done',
    img: FMGalleryThumbnail,
    title: 'FM Gallery',
    desc: 'FM Gallery: an assemblage of my finest portrait masterpieces from throughout my career as an artist.',
    roles: ['Front-end Developer', 'UI/UX Designer'],
    poster: FMGalleryUIBanner,
    content: "FM Gallery is a curated collection of my most exceptional portrait masterpieces, showcasing the artistic journey and growth I have experienced throughout my career. Each piece reflects my dedication to capturing the essence of my subjects and the evolution of my skills as an artist.",
    siteLink: "https://fwedwicc.github.io/FM-Gallery/",
    githubLink: "https://github.com/fwedwicc/FM-Gallery",
    category: ['Front-end Development Project', 'Career Project', 'Personal Project'],
    tools: [
      { icon: htmllogo, tooltip: "HyperText Markup Language" },
      { icon: csslogo, tooltip: "Cascading Style Sheet" },
      { icon: jslogo, tooltip: "JavaScript" },
      { icon: tailwindlogo, tooltip: "Tailwind CSS" },
      { icon: gsaplogo, tooltip: "GSAP" },
      { icon: githublogo, tooltip: "GitHub" },
      { icon: gitlogo, tooltip: "Git" },
      { icon: npmlogo, tooltip: "NPM" },
    ],
    graphics: FMGalleryGraphics,
    date: 'July 2024',
    status: 'Finished',
    contributor: [
      {
        profile: FrederickMoreno,
        name: 'Frederick Moreno',
        role: ['Web Developer', 'Front-end Developer', 'UI/UX Designer']
      },
    ],
    summary: 'As a Front-end Developer and UI/UX Designer, I developed FM Gallery to beautifully present my most exceptional portrait masterpieces. By combining technical skill with creative design, I crafted an engaging platform that highlights both my artistic journey and the evolution of my skills.'
  },
  {
    // FM Portfolio
    id: 'FM-Portfolio',
    pageStatus: 'Done',
    img: FMPortfolioThumbnail,
    title: 'FM Portfolio',
    desc: 'FM Portfolio: a thorough exhibition that pertains to my background, interests, education & achievements, innovative & creative works, and tech profession.',
    roles: ['Web Developer', 'UI/UX Designer'],
    poster: FMPortfolioBanner,
    content: "FM Portfolio is an extensive showcase that delves into my personal background, interests, education, and achievements. It highlights my innovative and creative works, as well as my professional journey in the tech industry. This project serves as a comprehensive representation of my skills, experiences, and dedication to front-end development and UI/UX design.",
    siteLink: "https://fwedwicc.github.io/FM-Portfolio/",
    githubLink: "https://github.com/fwedwicc/FM-Portfolio",
    category: ['Front-end Development Project', 'UI/UX Design Project', 'Career Project'],
    tools: [
      { icon: htmllogo, tooltip: "HyperText Markup Language" },
      { icon: csslogo, tooltip: "Cascading Style Sheet" },
      { icon: jslogo, tooltip: "JavaScript" },
      { icon: reactlogo, tooltip: "ReactJS" },
      { icon: tailwindlogo, tooltip: "Tailwind CSS" },
      { icon: gsaplogo, tooltip: "GSAP" },
      { icon: framerlogo, tooltip: "Framer Motion" },
      { icon: githublogo, tooltip: "GitHub" },
      { icon: gitlogo, tooltip: "Git" },
      { icon: vitelogo, tooltip: "Vite" },
      { icon: npmlogo, tooltip: "NPM" },
    ],
    graphics: FMPortfolioGraphics,
    date: 'June 2024 - Present',
    status: 'Work in progress',
    contributor: [
      {
        profile: FrederickMoreno,
        name: 'Frederick Moreno',
        role: ['Web Developer', 'Front-end Developer', 'UI/UX Designer']
      },
    ],
    summary: 'As a Web Developer and UI/UX Designer, I crafted FM Portfolio to provide an in-depth showcase of my professional journey. This project highlights my personal background, education, and achievements while also featuring my innovative works in the tech industry. I focused on creating a seamless user experience that effectively represents my skills, experiences, and dedication to front-end development and UI/UX design.'
  },
  {
    // quackOverflow
    id: 'quackOverflow',
    pageStatus: 'Done',
    img: quackOverflowThumbnail,
    title: 'quackOverflow',
    desc: 'quackOverflow: A chat app that helps you debug code by explaining it to a virtual rubber duck, inspired by the Rubber Duck Debugging theory.',
    roles: ['Web Developer', 'UI/UX Designer'],
    poster: quackOverflowBanner,
    content: "quackOverflow: A chat app where you can debug your code by explaining it to a virtual rubber duck. Inspired by the Rubber Duck Debugging theory, quackOverflow helps programmers find solutions by walking through their code line-by-line, turning obstacles into opportunities for discovery.",
    siteLink: "https://quack-overflow.vercel.app/",
    githubLink: "https://github.com/fwedwicc/quackOverflow",
    category: ['Personal Project', 'Entertainment Project'],
    tools: [
      { icon: htmllogo, tooltip: "HyperText Markup Language" },
      { icon: csslogo, tooltip: "Cascading Style Sheet" },
      { icon: jslogo, tooltip: "JavaScript" },
      { icon: tailwindlogo, tooltip: "Tailwind CSS" },
      { icon: githublogo, tooltip: "GitHub" },
      { icon: gitlogo, tooltip: "Git" },
      { icon: vercellogo, tooltip: "Vercel" },
      { icon: npmlogo, tooltip: "NPM" },
    ],
    graphics: quackOverflowGraphics,
    date: 'May 2024',
    status: 'Finished',
    contributor: [
      {
        profile: FrederickMoreno,
        name: 'Frederick Moreno',
        role: ['Web Developer', 'Front-end Developer', 'UI/UX Designer']
      },
    ],
    summary: "As a Web Developer and UI/UX Designer in this project, I created quackOverflow to make debugging both fun and effective. This quirky app lets you chat your code problems to a virtual rubber duck that only says 'quack, ' turning the serious task of debugging into a lighthearted, yet surprisingly helpful, experience."
  },
  {
    // FUNKO Shop
    id: 'FUNKOshop',
    pageStatus: 'Done',
    img: FUNKOshopThumbnail,
    title: 'FUNKO Shop',
    desc: "FUNKO Shop: An e-commerce front-end project, featuring various components of a fully functional e-commerce web app centered around the Demon Slayer-themed Funko Pop collection.",
    roles: ['Front-end Developer', 'UI/UX Designer'],
    poster: FUNKOshopBanner,
    content: "FUNKO Shop is a front-end project that demonstrates the development of a e-commerce application. The project features a wide array of components, including dynamic product showcases, user-friendly navigation, and interactive elements, all centered around the Demon Slayer-themed Funko Pop collection. This project focuses on creating engaging, responsive, and visually appearling interfaces tailored to an e-commerce environment.",
    siteLink: "",
    githubLink: "https://github.com/fwedwicc/IPT101-Moreno-eCommerce",
    category: ['University Project', 'Web Development Project', 'Front-end Development Project'],
    tools: [
      { icon: htmllogo, tooltip: "HyperText Markup Language" },
      { icon: csslogo, tooltip: "Cascading Style Sheet" },
      { icon: tailwindlogo, tooltip: "Tailwind CSS" },
      { icon: netlogo, tooltip: "ASP.Net" },
      { icon: vslogo, tooltip: "Visual Studio" },
      { icon: githublogo, tooltip: "GitHub" },
    ],
    graphics: FUNKOshopGraphics,
    date: 'March 2024',
    status: 'Finished',
    contributor: [
      {
        profile: FrederickMoreno,
        name: 'Frederick Moreno',
        role: ['Web Developer', 'Front-end Developer', 'UI/UX Designer']
      },
    ],
    summary: "As a Front-end Developer and UI/UX Designer, I developed the FUNKO Shop for my university project, featuring a visually appealing interfaces of an e-commerce web app. This project highlights my skills in creating dynamic, responsive, and visually engaging components that enhance the shopping experience, all while integrating a popular cultural theme into the design."
  },
];