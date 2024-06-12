import ExperienceCard from '../components/ExperienceCard'
import Openclassrooms from '../assets/images/logos/openclassrooms.svg'
import Extellient from '../assets/images/logos/extellient.svg'
import Nathnet from '../assets/images/logos/nathnet.svg'
import Codecademy from '../assets/images/logos/codecademy.svg'
import Uga from '../assets/images/logos/uga.svg'

const Experience = () => {
  return (
    <section
      className='border-b-4 border-black py-[200px] scroll-mt-header flex flex-col items-center'
      id='experience'
    >
      <h2 className='text-center mb-5 text-4xl font-heading'>
        Où est-ce que j'ai appris à faire ça ?
      </h2>
      <div className='flex flex-col gap-10 py-12 w-[80%]'>
        <ExperienceCard
          className='bg-bg'
          imageUrl={Openclassrooms}
          title='OpenClassrooms'
          type='Formation Développeur Front-End et Intégrateur Web'
          description="Formation professionnalisante et certifiante d'une durée de 9 mois, incluant des cours théoriques et des projets pratiques pour maîtriser les langages de développement Front-End, l'intégration de designs graphiques sur tous types de navigateurs et tailles d'écrans, la création d'applications web complètes, dynamiques et responsives, la communication entre des interfaces Front-End et le Back-End, l'optimisation des performances et la maintenance de sites web, la gestion intégrale de projets web."
          dateEnd='Juin 2024'
          dateStart='Sept. 2023'
        />
        <ExperienceCard
          className='bg-main'
          imageUrl={Extellient}
          title='Extellient'
          type='Stage'
          description="Stage au cours duquel ma mission était de réaliser la refonte complète du site internet de l'agence grenobloise Extellient. Je travaillais en étroite collaboration avec la designer et la chargée de communication de l'agence, participant à l'ensemble du processus créatif, à la réalisation de wireframes et de maquettes ainsi que la rédaction des contenus textuels. J'ai ensuite créé et intégré les différentes pages du site en utilisant Wordpress et le thème Salient. J'ai également mis en place le référencement et le SEO du site."
          dateEnd='Août 2023'
          dateStart='Juil. 2023'
        />
        <ExperienceCard
          className='bg-bg'
          imageUrl={Nathnet}
          title='Nathnet'
          type='Stage'
          description="Stage d'immersion professionnelle visant à confirmer mon envie de reconversion dans le domaine du Développement Web. Cette expérience m'a permis de découvrir le métier et le quotidien d'un développeur web, de la gestion des contacts clients à la conception, la gestion et à la maintenance de sites web. J'ai également pu mettre en pratique les langages de développement HTML, CSS, JavaScript et PHP."
          dateEnd='Janv. 2023'
        />
        <ExperienceCard
          className='bg-main'
          imageUrl={Codecademy}
          title='Codecademy & Sololearn'
          type='Auto-formation'
          description="Ayant fait mes premiers pas dans l'univers du web en participant régulièrement à la création de sites pour des associations et des entreprises locales avec WordPress, j'ai envie d'en apprendre plus et je décide donc de me former de manière autodidacte aux langages de développement. En exploitant l'infinité de ressources, de cours, de tutoriels et de projets disponibles sur des plateformes telles que Codecademy, Sololearn, OpenClassrooms ou encore Grafikart, j'ai appris à maîtriser les langages web et de programmation HTML, CSS, JavaScript, PHP et Java. Plongé dans cet océan de nouvelles connaissances, je me suis senti comme un poisson dans l'eau, et j'ai adoré chaque instant ! C'était le début d'une nouvelle vocation."
          dateEnd='Sept. 2023'
          dateStart='Sept. 2022'
        />
        <ExperienceCard
          className='bg-bg'
          imageUrl={Uga}
          title='Institut de Géographie Alpine'
          type='Master en Géographie Environnementale, Géomatique et SIG'
          description="Avant de me lancer dans l'univers du web, j'ai obtenu un Master en Géographie, Aménagement du Territoire et Géomatique en 2016, après des études à Grenoble et Berlin. Pendant ma Licence, je me suis focalisé sur le développement durable, l'agriculture urbaine et la dimension sociale de l'aménagement territorial. Pour mon Master, je me suis spécialisé dans la géographie environnementale, étudiant les risques naturels, les hydrosystèmes, la biodiversité, la climatologie et la glaciologie. J'ai acquis des compétences en outils d'analyse spatiale, télédétection, photogrammétrie, SQL, QGIS, ArcGIS, Python et analyse de données avec R. Au cours de mon Master, j'ai effectué deux stages : Dans une Réserve Naturelle Régionale, où j'ai créé une base de données géoréférencées des relevés naturalistes. Dans une Communauté de Communes, où j'ai développé une base de données des lieux de production et d'achat de produits locaux et une carte interactive en ligne."
          dateEnd='2016'
          dateStart='2014'
        />
      </div>
    </section>
  )
}

export default Experience
