const RESOURCES_ES = {
    home: {
        msg: "Mis recursos"
    },
    page: {
        seo: {
            title: "Mis recursos",
            description: "Estos son los recursos que uso o recomiendo para aprender."
        },
        title: "Mis canales de Youtube preferidos para apreder:",
        ytChannels: [
            {
                name: 'midudev',
                language: 'Español',
                content: ['Node', 'React', 'Astro', 'AWS', 'Next', 'JavaScript', 'Typescript', 'PHP', 'HTML', 'CSS', 'Tailwind'],
                mainContent: 'Node',
                logo: 'https://yt3.googleusercontent.com/ytc/AIdro_lPBcTSzb5NqMhKQSo6aaTPcnPM2EZhvhdcQi0YvPmflQ=s176-c-k-c0x00ffffff-no-rj',
                channel: 'https://www.youtube.com/@midulive',
                description: 'Midu es un Sr en programacion, con una alta experienca en varios lenguajes y frameworks de programación. Su principal contenido es del leguaje Node y de frameworks de frontend como React y Astro. Explica muy bien, y siempre tira tips espectaculares de programación y configuración, algo muy bueno para aprender tanto del desarrollo como de su entorno.',
                  difficulty: "media"
            },
            {
                name: '',
                language: '',
                content: [],
                mainContent: '',
                logo: '',
                channel: '',
                description: ''
            },
            {
                name: '',
                language: '',
                content: [],
                mainContent: '',
                logo: '',
                channel: '',
                description: ''
            },
        ]
    }
}
const RESOURCES_EN = {

}

export const RESOURCES = {
    es: RESOURCES_ES,
    en: RESOURCES_EN,
}