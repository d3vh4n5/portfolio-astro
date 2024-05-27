import { TAGS } from "@/components/icons/tags/tags"

const EXPERIENCES_EN = [
        {
          logo: "/img/wamnet.png",
          alt: "Wamnet logo",
          "title": "wamNet - Web Studio",
          "date" : "August 2023 - December 2023",
          "description": "In this company I did my professional internship, which was a subject of my career at Teclab. During these 4 months I carried out front-end testing tasks, front-end maintenance of some of the websites and developed 2 projects: A dynamic portfolio and a requirements application, both for the company's clients.",
          "invitation": "To see a DEMO of the projects, visit the following link:",
          "visitURL" : "https://wmnt-portfolio.netlify.app/",
          technologies: [
            TAGS.react,
            TAGS.php,
            TAGS.bootstrap,
            TAGS.codeigniter,
            TAGS.database,
            TAGS.sass
          ]
        },
        {
          "logo": "/me.png",
          "alt": "Photo of me",
          "title": "Freelance",
          "date": "March 2024 - Present",
          "description": "I undertook various freelance projects for clients, friends, and family, developing web applications and customized digital solutions using technologies such as Node, Firebase, React, Next.js, Vue, Astro, Bootstrap, Tailwind, and Python.",
          "invitation": "",
          "visitURL": "",
          "technologies": [
            TAGS.node,
            TAGS.firebase,
            TAGS.react,
            TAGS.next,
            TAGS.vue,
            TAGS.astro,
            TAGS.bootstrap,
            TAGS.tailwind,
            TAGS.python
          ]
        },
        {
          "logo": "/img/easylifemarketing.png",
          "alt": "Easy Life Marketing logo",
          "title": "Easy Life Marketing",
          "date": "May 2024 - Present",
          "description": "I handled the justification and migration of multiple websites for the Spanish company 'EasyLife Marketing', using tools like WordPress and Elementor to optimize site performance and usability.",
          "invitation": "",
          "visitURL": "",
          "technologies": [
            TAGS.wordpress
          ]
        }
    ]

const EXPERIENCES_ES = [
        {
          logo: "/img/wamnet.png",
          alt: "Wamnet logo",
          "title": "wamNet - Estudio Web",
          "date" : "Agosto 2023 - Diciembre 2023",
          "description": "En esta empresa hice mi práctica profesionalizante, la cual fue una materia de mi carrera en Teclab. Durante estos 4 meses realicé tareas de testing de front, mantenimiento de front-end de algunas de las webs y desarrollé 2 proyectos: Un portfolio dinámico y una aplicación de requerimientos, ambos para los clientes de la empresa.",
          "invitation": "Para ver una DEMO de los proyectos, visite el siguiente enlace:",
          "visitURL" : "https://wmnt-portfolio.netlify.app/",
          technologies: [
            TAGS.react,
            TAGS.php,
            TAGS.bootstrap,
            TAGS.codeigniter,
            TAGS.database,
            TAGS.sass
          ]
        },
        {
          logo: "/me.png",
          alt: "Foto de mí",
          "title": "Freelance",
          "date" : "Marzo 2024 - Actualidad",
          "description": "Realicé diversos proyectos freelance para clientes, amigos y familiares, desarrollando aplicaciones web y soluciones digitales personalizadas, empleando tecnologías como Node, Firebase, React, Next.js, Vue, Astro, Bootstrap, Tailwind y Python.",
          "invitation": "",
          "visitURL" : "",
          technologies: [
            TAGS.node,
            TAGS.firebase,
            TAGS.react,
            TAGS.next,
            TAGS.vue,
            TAGS.astro,
            TAGS.bootstrap,
            TAGS.tailwind,
            TAGS.python
          ]
        },
        {
          logo: "/img/easylifemarketing.png",
          alt: "Easy life marketing logo",
          "title": "Easy Life Marketing",
          "date" : "Mayo 2024 - Actualidad",
          "description": "Realización de justificaciónes y migraciones de múltiples sitios webs para la empresa española 'EasyLife Marketing', usando herramientas como Wordpress y Elementor.",
          "invitation": "",
          "visitURL" : "",
          technologies: [
            TAGS.wordpress
          ]
        },
    ]


export const EXPERIENCES = {
    en : EXPERIENCES_EN,
    es: EXPERIENCES_ES
}