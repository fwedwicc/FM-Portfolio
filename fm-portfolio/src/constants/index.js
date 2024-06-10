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
    id: 'projects',
    title: 'PROJECTS',
  },
  {
    id: 'experience',
    title: 'EXPERIENCE',
  },
  {
    id: 'contact',
    title: 'CONTACT',
  },
]

export const Socials = [
  {
    icon: github,
    link: "https://www.github.com/fwedwicc",
  },
  {
    icon: instagram,
    link: "https://www.instagram.com/fwedwiccc",
  },
  {
    icon: linkedin,
    link: "https://www.facebook.com/fwedwic",
  },
  {
    icon: facebook,
    link: "https://www.facebook.com/fwedwic",
  }
];

export const AboutData = [
  {
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