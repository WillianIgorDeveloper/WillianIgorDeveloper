import Image from 'next/image'
import style from './projectsCarousel.module.scss'

const cards = {
    webPages: [
        {
            image: '/projects/empire-burger.png',
            title: "Empire Burger",
            demo: 'https://willianigordeveloper.github.io/br-challenges-empire-burger/',
            repository: 'https://github.com/WillianIgorDeveloper/br-challenges-empire-burger',
        },
        {
            image: '/projects/origin-six.png',
            title: "Origin Six",
            demo: 'https://willianigordeveloper.github.io/BeautySalon/',
            repository: 'https://github.com/WillianIgorDeveloper/BeautySalon',
        },
        {
            image: '/projects/edie-homepage.png',
            title: "Edie Homepage",
            demo: 'https://willianigordeveloper.github.io/edie-homepage-devChallenges/',
            repository: 'https://github.com/WillianIgorDeveloper/edie-homepage-devChallenges',
        },
        {
            image: '/projects/interior-consultant.png',
            title: "Interior Consultant",
            demo: 'https://willianigordeveloper.github.io/Interior-Consultant-devChallenges/',
            repository: 'https://github.com/WillianIgorDeveloper/Interior-Consultant-devChallenges',
        },
        {
            image: '/projects/my-team-page.png',
            title: "My Team Page",
            demo: 'https://willianigordeveloper.github.io/My-team-page-devChallenges/',
            repository: 'https://github.com/WillianIgorDeveloper/My-team-page-devChallenges',
        },
        {
            image: '/projects/my-galery.png',
            title: "My Galery",
            demo: 'https://willianigordeveloper.github.io/My-gallery-devChallenges/',
            repository: 'https://github.com/WillianIgorDeveloper/My-gallery-devChallenges',
        },
        {
            image: '/projects/recipe-page.png',
            title: "Recipe Page",
            demo: 'https://willianigordeveloper.github.io/Recipe-page-devChallenge/',
            repository: 'https://github.com/WillianIgorDeveloper/Recipe-page-devChallenge',
        },
    ],
    webApps: [
        {
            image: '/projects/ignite-lab-design-system.png',
            title: "Ignite Lab 03",
            demo: "https://ignite-lab-03-green.vercel.app/",
            repository: "https://github.com/WillianIgorDeveloper/ignite-lab-03",
        },
    ],
    mit: [
        {
            image: '/projects/to-do-list.png',
            title: "To-Do List",
            demo: 'https://willianigordeveloper.github.io/to-do-list/',
            repository: 'https://github.com/WillianIgorDeveloper/to-do-list',
        },
    ],
}


export default function ProjectsCarousel ({title, type}) {
    return (
        <div className={style.container}>
            <h3>{title}</h3>
            <ul>
                {
                    cards[type].map(card => {
                        return (
                            <li key={card.demo}>
                                <Image
                                    src={card.image}
                                    width={220}
                                    height={250}
                                    alt={card.title}
                                />
                                <div className={style.footerWrapper}>
                                    <h4>{card.title}</h4>
                                    <div className={style.linkWrapper}>
                                        <a href={card.repository} target="__blank">
                                            Repositório
                                        </a>
                                        <a href={card.demo} target="__blank">
                                            Demo
                                        </a>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}