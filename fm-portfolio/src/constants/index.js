import {
  github,
  instagram,
  linkedin,
  facebook,
  html,
  css,
  javascript,
  react,
  tailwind,
  bootstrap,
  gsap,
  php,
  figma,
  git,
  npm,
  bcp,
  qcu,
  mail,
  phone,
  location,
  cert01,
  cert02,
  cert03,
  cert04,
  cert05,
  cert06,
  cert07,
  htmllogo,
  csslogo,
  jslogo,
  poster01,
} from '../assets';

export const navLinks = [
  {
    id: 'home',
    title: 'HOME',
  },
  {
    id: 'about',
    title: 'ABOUT',
  },
  {
    id: 'education',
    title: 'EDUCATION',
  },
  {
    id: 'expertise',
    title: 'EXPERTISE',
  },
  {
    id: 'projects',
    title: 'PROJECTS',
  },
  {
    id: 'contact',
    title: 'CONTACT',
  },
]

export const Socials = [
  {
    icon: github,
    name: "GITHUB",
    link: "https://www.github.com/fwedwicc",
  },
  {
    icon: linkedin,
    name: "LINKEDIN",
    link: "https://www.linkedin.com/in/frederick-moreno/",
  },
  {
    icon: instagram,
    name: "INSTAGRAM",
    link: "https://www.instagram.com/freefinnn",
  },
  {
    icon: facebook,
    name: "FACEBOOK",
    link: "https://www.facebook.com/fwedwic",
  }
];

// TODO: Hero Content
export const HeroData = [
  {
    role: [
      "Front-end",
      "UI/UX"
    ],
    name: "FREDERICK MORENO",
    content: " consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
]

export const AboutData = [
  {
    // TODO: 'WHO AM I?' Content
    whoAmI: [
      {
        name: "Frederick Moreno",
        content: "I am Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nulla eligendi sapiente est recusandae, voluptates, officia iusto quaerat molestiae maiores dolores praesentium ab quas maxime nam molestias? Consequuntur, asperiores dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque expedita soluta unde libero consequuntur eos numquam praesentium officia ratione ea, alias tempora fuga cupiditate eveniet a, ipsam consectetur maxime iure!",
        badge: [
          {
            title: "Front-end Developer",
            svgPath: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
          },
          {
            title: "UI/UX Designer",
            svgPath: "m4.988 19.012 5.41-5.41m2.366-6.424 4.058 4.058-2.03 5.41L5.3 20 4 18.701l3.355-9.494 5.41-2.029Zm4.626 4.625L12.197 6.61 14.807 4 20 9.194l-2.61 2.61Z"
          },
          {
            title: "Traditional Artist",
            svgPath: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
          },
        ]
      }
    ],
    // TODO: 'HOW IT STARTED?' Content
    howItStarted: [
      {
        icons: [
          {
            icon: html,
            tooltip: "HyperText Markup Language"
          },
          {
            icon: css,
            tooltip: "Cascading Style Sheet"
          },
          {
            icon: javascript,
            tooltip: "JavaScript"
          }
        ],
        content: "It began Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nulla eligendi sapiente est recusandae, voluptates, officia iusto quaerat molestiae maiores dolores praesentium ab quas maxime nam molestias? Consequuntur, asperiores dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque expedita soluta unde libero consequuntur eos numquam praesentium officia ratione ea, alias tempora fuga cupiditate eveniet a, ipsam consectetur maxime iure!"
      }
    ],
    // TODO: 'HOW'S IT GOING?' Content and Icons
    howsItGoing: [
      {
        icons: [
          {
            icon: html,
            tooltip: "HyperText Markup Language"
          },
          {
            icon: css,
            tooltip: "Cascading Style Sheet"
          },
          {
            icon: javascript,
            tooltip: "JavaScript"
          },
          {
            icon: react,
            tooltip: "React JS"
          },
          {
            icon: tailwind,
            tooltip: "Tailwind CSS"
          },
          {
            icon: bootstrap,
            tooltip: "Bootstrap"
          },
          {
            icon: gsap,
            tooltip: "GSAP"
          },
          {
            icon: php,
            tooltip: "Hypertext Preprocessor"
          },
          {
            icon: figma,
            tooltip: "Figma"
          },
          {
            icon: git,
            tooltip: "Git"
          },
          {
            icon: npm,
            tooltip: "NPM"
          },
        ],
        content: "SIt began Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nulla eligendi sapiente est recusandae, voluptates, officia iusto quaerat molestiae maiores dolores praesentium ab quas maxime nam molestias? Consequuntur, asperiores dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque expedita soluta unde libero consequuntur eos numquam praesentium officia ratione ea, alias tempora fuga cupiditate eveniet a, ipsam consectetur maxime iure!"
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

// TODO: Project Content
export const ProjectData = [
  {
    title: "Projects",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, cupiditate! Sapiente placeat tempora ab eaque veniam maxime, doloremque iusto ipsa dolores! Natus reprehenderit vero et ex culpa expedita nostrum facilis.",
    badge: [
      {
        title: "Front-end Development",
        svgPath: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
      },
      {
        title: "UI/UX Designing",
        svgPath: "m4.988 19.012 5.41-5.41m2.366-6.424 4.058 4.058-2.03 5.41L5.3 20 4 18.701l3.355-9.494 5.41-2.029Zm4.626 4.625L12.197 6.61 14.807 4 20 9.194l-2.61 2.61Z"
      },
      {
        title: "Wireframing",
        svgPath: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
      },
    ],

  }
];

export const ContactData = [
  {
    name: "Frederick Moreno",
    contacts: [
      {
        icon: mail,
        alt: "mail",
        name: "moreno.frederick.capiral@gmail.com"
      },
      {
        icon: phone,
        alt: "phone",
        name: "+63 951 432 6912"
      },
      {
        icon: location,
        alt: "location",
        name: "Caloocan City"
      }
    ]
  }
];

// TODO: Expertise Logos
export const ExpertiseData = [
  {
    techStacks: [
      {
        icon: htmllogo,
        tooltip: "HyperText Markup Language"
      },
      {
        icon: csslogo,
        tooltip: "Cascading Style Sheet"
      },
      {
        icon: jslogo,
        tooltip: "Javascript"
      },
      {
        icon: figma,
        tooltip: "Figma"
      },
      {
        icon: git,
        tooltip: "Git"
      },
      {
        icon: npm,
        tooltip: "NPM"
      },
      {
        icon: figma,
        tooltip: "Figma"
      },
      {
        icon: git,
        tooltip: "Git"
      },
      {
        icon: npm,
        tooltip: "NPM"
      },
      {
        icon: figma,
        tooltip: "Figma"
      },
      {
        icon: git,
        tooltip: "Git"
      },
      {
        icon: npm,
        tooltip: "NPM"
      }
    ],
    githubStats: [],
    certifications: [
      {
        // TODO: Certification Content
        title: "Certifications",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non praesentium, quibusdam inventore quaerat vitae debitis optio illo. um, quibusdam inventore quaerat vitae debitis optio illo.",
        btnText: "View Certificates",
        link: "#",
        // TODO: Certification Carousel Images
        images01: [
          { src: cert05 },
          { src: cert06 },
          { src: cert07 },
          { src: cert01 },
          { src: cert02 },
          { src: cert03 },
          { src: cert04 }
        ],
        images02: [
          { src: cert05 },
          { src: cert06 },
          { src: cert07 },
          { src: cert04 },
          { src: cert01 },
          { src: cert02 },
          { src: cert03 }
        ]
      }
    ]
  }
];

// TODO: Project Overview Content
export const ProjectOverviewData = [
  {
    id: 'qcu-lms',
    title: 'QCU-LMS',
    desc: 'Lorem ipsum bcaecati nisi mollitia hic.',
    content: "Lorem Lorem ipsum dolor sit amet consectetur, adipisEnim, provident obcaecati nisi mollitia hic Lorem ipsum dolor sit amet consectetur, adipisEnim, provident obcaecati nisi mollitia hicLorem ipsum dolor sit amet consectetur, adipisEnim, provident obcaecati nisi mollitia hic.",
    img: 'https://placehold.co/300x200',
    roles: ['Front-end Developer', 'UI/UX Designer'],
    category: ['School Project'],
    tools: [
      {
        icon: htmllogo,
        tooltip: "HyperText Markup Language"
      },
      {
        icon: csslogo,
        tooltip: "Cascading Style Sheet"
      },
      {
        icon: jslogo,
        tooltip: "Javascript"
      },
      {
        icon: htmllogo,
        tooltip: "HyperText Markup Language"
      },
      {
        icon: csslogo,
        tooltip: "Cascading Style Sheet"
      },
      {
        icon: jslogo,
        tooltip: "Javascript"
      },
      {
        icon: htmllogo,
        tooltip: "HyperText Markup Language"
      },
      {
        icon: csslogo,
        tooltip: "Cascading Style Sheet"
      },
      {
        icon: jslogo,
        tooltip: "Javascript"
      },
    ],
    githubLink: "https://github.com/fwedwicc/QCU-LMS",
    siteLink: "#",
    miroLink: "#",
    figmaLink: "#",
    poster: poster01,
    miro: 'https://miro.com/app/live-embed/uXjVNgfIihc=/?moveToViewport=-4631,-5002,6372,3049&embedId=604395391311',
    figma: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FlypKtruQL7Eg7AKbuk5iul%2FPAPS-Barbershop-(Prototypes)%3Fnode-id%3D0-1%26t%3DHKRJ4kcALtbAnqwM-1'
  },
  {
    id: 'paps-barbershop',
    title: "PAP'S Barbershop",
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisEnim, provident obcaecati nisi mollitia hic.',
    content: "Lorem Lorem ipsum dolor sit amet consectetur, adipisEnim, provident obcaecati nisi mollitia hic Lorem ipsum dolor sit amet consectetur, adipisEnim, provident obcaecati nisi mollitia hicLorem ipsum dolor sit amet consectetur, adipisEnim, provident obcaecati nisi mollitia hic.",
    img: 'https://placehold.co/300x200',
    roles: ['Front-end Developer', 'UI/UX Designer'],
    tools: [
      {
        icon: htmllogo,
        tooltip: "HyperText Markup Language"
      },
      {
        icon: csslogo,
        tooltip: "Cascading Style Sheet"
      },
      {
        icon: jslogo,
        tooltip: "Javascript"
      },
    ],
    poster: poster01,
    miro: 'https://miro.com/app/live-embed/uXjVNgfIihc=/?moveToViewport=-4631,-5002,6372,3049&embedId=604395391311',
    figma: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FlypKtruQL7Eg7AKbuk5iul%2FPAPS-Barbershop-(Prototypes)%3Fnode-id%3D0-1%26t%3DHKRJ4kcALtbAnqwM-1'
  },
  {
    id: 'paps-barbershop',
    title: "PAP'S Barbershop",
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisEnim, provident obcaecati nisi mollitia hic.',
    content: "Lorem Lorem ipsum dolor sit amet consectetur, adipisEnim, provident obcaecati nisi mollitia hic Lorem ipsum dolor sit amet consectetur, adipisEnim, provident obcaecati nisi mollitia hicLorem ipsum dolor sit amet consectetur, adipisEnim, provident obcaecati nisi mollitia hic.",
    img: 'https://placehold.co/300x200',
    roles: ['Front-end Developer', 'UI/UX Designer'],
    tools: [
      {
        icon: htmllogo,
        tooltip: "HyperText Markup Language"
      },
      {
        icon: csslogo,
        tooltip: "Cascading Style Sheet"
      },
      {
        icon: jslogo,
        tooltip: "Javascript"
      },
    ],
    poster: poster01,
    miro: 'https://miro.com/app/live-embed/uXjVNgfIihc=/?moveToViewport=-4631,-5002,6372,3049&embedId=604395391311',
    figma: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FlypKtruQL7Eg7AKbuk5iul%2FPAPS-Barbershop-(Prototypes)%3Fnode-id%3D0-1%26t%3DHKRJ4kcALtbAnqwM-1'
  },
  {
    id: 'paps-barbershop',
    title: "PAP'S Barbershop",
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisEnim, provident obcaecati nisi mollitia hic.',
    content: "Lorem Lorem ipsum dolor sit amet consectetur, adipisEnim, provident obcaecati nisi mollitia hic Lorem ipsum dolor sit amet consectetur, adipisEnim, provident obcaecati nisi mollitia hicLorem ipsum dolor sit amet consectetur, adipisEnim, provident obcaecati nisi mollitia hic.",
    img: 'https://placehold.co/300x200',
    roles: ['Front-end Developer', 'UI/UX Designer'],
    tools: [
      {
        icon: htmllogo,
        tooltip: "HyperText Markup Language"
      },
      {
        icon: csslogo,
        tooltip: "Cascading Style Sheet"
      },
      {
        icon: jslogo,
        tooltip: "Javascript"
      },
    ],
    poster: poster01,
    miro: 'https://miro.com/app/live-embed/uXjVNgfIihc=/?moveToViewport=-4631,-5002,6372,3049&embedId=604395391311',
    figma: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FlypKtruQL7Eg7AKbuk5iul%2FPAPS-Barbershop-(Prototypes)%3Fnode-id%3D0-1%26t%3DHKRJ4kcALtbAnqwM-1'
  },
  {
    id: 'paps-barbershop',
    title: "PAP'S Barbershop",
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisEnim, provident obcaecati nisi mollitia hic.',
    content: "Lorem Lorem ipsum dolor sit amet consectetur, adipisEnim, provident obcaecati nisi mollitia hic Lorem ipsum dolor sit amet consectetur, adipisEnim, provident obcaecati nisi mollitia hicLorem ipsum dolor sit amet consectetur, adipisEnim, provident obcaecati nisi mollitia hic.",
    img: 'https://placehold.co/300x200',
    roles: ['Front-end Developer', 'UI/UX Designer'],
    tools: [
      {
        icon: htmllogo,
        tooltip: "HyperText Markup Language"
      },
      {
        icon: csslogo,
        tooltip: "Cascading Style Sheet"
      },
      {
        icon: jslogo,
        tooltip: "Javascript"
      },
    ],
    poster: poster01,
    miro: 'https://miro.com/app/live-embed/uXjVNgfIihc=/?moveToViewport=-4631,-5002,6372,3049&embedId=604395391311',
    figma: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FlypKtruQL7Eg7AKbuk5iul%2FPAPS-Barbershop-(Prototypes)%3Fnode-id%3D0-1%26t%3DHKRJ4kcALtbAnqwM-1'
  },
  {
    id: 'paps-barbershop',
    title: "PAP'S Barbershop",
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisEnim, provident obcaecati nisi mollitia hic.',
    content: "Lorem Lorem ipsum dolor sit amet consectetur, adipisEnim, provident obcaecati nisi mollitia hic Lorem ipsum dolor sit amet consectetur, adipisEnim, provident obcaecati nisi mollitia hicLorem ipsum dolor sit amet consectetur, adipisEnim, provident obcaecati nisi mollitia hic.",
    img: 'https://placehold.co/300x200',
    roles: ['Front-end Developer', 'UI/UX Designer'],
    tools: [
      {
        icon: htmllogo,
        tooltip: "HyperText Markup Language"
      },
      {
        icon: csslogo,
        tooltip: "Cascading Style Sheet"
      },
      {
        icon: jslogo,
        tooltip: "Javascript"
      },
    ],
    poster: poster01,
    miro: 'https://miro.com/app/live-embed/uXjVNgfIihc=/?moveToViewport=-4631,-5002,6372,3049&embedId=604395391311',
    figma: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FlypKtruQL7Eg7AKbuk5iul%2FPAPS-Barbershop-(Prototypes)%3Fnode-id%3D0-1%26t%3DHKRJ4kcALtbAnqwM-1'
  },
];