import ExperienceCard from '../components/ExperienceCard'
import Openclassrooms from '../assets/images/logos/openclassrooms.svg'
import Extellient from '../assets/images/logos/extellient.svg'
import NathnetLogo from '../assets/images/logos/nathnet.png'
import CodecademyLogo from '../assets/images/logos/codecademy.png'
import Uga from '../assets/images/logos/uga.svg'

const Experience = () => {
  return (
    <section
      className='border-b-4 border-black py-[100px] md:py-[200px] scroll-mt-header flex flex-col items-center'
      id='experience'
    >
      <h2 className='text-center mb-5 text-4xl font-heading px-4'>
        Où est-ce que j'ai appris à faire ça ?
      </h2>
      <div className='flex flex-col gap-10 py-12 w-[80%]'>
        <ExperienceCard
          className='bg-bg'
          imageUrl={Openclassrooms}
          title='OpenClassrooms'
          type='Formation Développeur Front-End et Intégrateur Web'
          description={
            <p className='text-md font-body'>
              Formation certifiante de 9 mois, combinant cours théoriques et
              projets pratiques, pour maîtriser le{' '}
              <span className='font-bold'>développement Front-End</span>, l'
              <span className='font-bold'>
                intégration de designs graphiques et responsives
              </span>{' '}
              pour tous types de navigateurs et d'écrans, la{' '}
              <span className='font-bold'>
                création d'applications web complètes et dynamiques
              </span>
              , la{' '}
              <span className='font-bold'>
                communication entre Front-End et Back-End
              </span>
              , l'
              <span className='font-bold'>
                optimisation et la maintenance
              </span>{' '}
              de sites web, ainsi que la{' '}
              <span className='font-bold'>gestion de projets web</span>.
            </p>
          }
          dateEnd='Juin 2024'
          dateStart='Sept. 2023'
        />
        <ExperienceCard
          className='bg-main'
          imageUrl={Extellient}
          title='Extellient'
          type='Stage'
          description={
            <p className='text-md font-body'>
              Stage ayant pour mission de réaliser la{' '}
              <span className='font-bold'>
                refonte complète du site internet
              </span>{' '}
              de l'agence grenobloise{' '}
              <span className='font-bold'>Extellient</span>. Je travaillais en
              étroite collaboration avec la designer et la chargée de
              communication de l'agence, en participant à l'ensemble du{' '}
              <span className='font-bold'>processus créatif</span>, à la
              réalisation de{' '}
              <span className='font-bold'>wireframes et de maquettes</span>, à
              la rédaction des{' '}
              <span className='font-bold'>contenus textuels</span>, à la{' '}
              <span className='font-bold'>création</span> et à l'
              <span className='font-bold'>intégration</span> des pages du site
              avec <span className='font-bold'>WordPress</span> et le thème
              Salient, ainsi qu'à la mise en place du{' '}
              <span className='font-bold'>SEO</span>.
            </p>
          }
          dateEnd='Août 2023'
          dateStart='Juil. 2023'
        />
        <ExperienceCard
          className='bg-bg'
          imageUrl={NathnetLogo}
          title='Nathnet'
          type='Stage'
          description={
            <p className='text-md font-body'>
              Stage d'immersion professionnelle visant à confirmer mon objectif
              de{' '}
              <span className='font-bold'>
                reconversion dans le domaine du Développement Web
              </span>
              . Cette expérience m'a permis de découvrir le métier et le
              quotidien d'un développeur, de la gestion des contacts clients à
              la conception, la gestion et à la maintenance de sites. J'ai
              également pu mettre en pratique les langages{' '}
              <span className='font-bold'>HTML</span>,{' '}
              <span className='font-bold'>CSS</span>,{' '}
              <span className='font-bold'>JavaScript</span> et{' '}
              <span className='font-bold'>PHP</span>.
            </p>
          }
          dateEnd='Janv. 2023'
        />
        <ExperienceCard
          className='bg-main'
          imageUrl={CodecademyLogo}
          title='Codecademy & Sololearn'
          type='Auto-formation'
          description={
            <p className='text-md font-body'>
              Ayant débuté dans l'univers du web en participant régulièrement à
              la <span className='font-bold'>création de sites</span> pour des
              associations et des entreprises locales avec{' '}
              <span className='font-bold'>WordPress</span>, et désireux d'en
              apprendre plus, je me suis formé en{' '}
              <span className='font-bold'>autodidacte</span> aux langages{' '}
              <span className='font-bold'>HTML</span>,{' '}
              <span className='font-bold'>CSS</span>,{' '}
              <span className='font-bold'>JavaScript</span>,{' '}
              <span className='font-bold'>PHP</span> et{' '}
              <span className='font-bold'>Java</span> via des plateformes comme{' '}
              <span className='font-bold'>Codecademy</span>,{' '}
              <span className='font-bold'>Sololearn</span>,
              <span className='font-bold'>OpenClassrooms</span> et{' '}
              <span className='font-bold'>Grafikart</span>. Plongé dans cet
              océan infini de nouvelles connaissances, je me suis senti comme un
              poisson dans l'eau, et j'ai adoré chaque instant ! C'était le
              début d'une
              <span className='font-bold'> nouvelle vocation</span>.
            </p>
          }
          dateEnd='Sept. 2023'
          dateStart='Sept. 2022'
        />
        <ExperienceCard
          className='bg-bg'
          imageUrl={Uga}
          title='Institut de Géographie Alpine'
          type='Master en Géographie Environnementale, Géomatique et SIG'
          description={
            <p className='text-md font-body'>
              Avant de me tourner vers l'univers du web, j'ai obtenu un{' '}
              <span className='font-bold'>
                Master en Géographie, Aménagement du Territoire et Géomatique
              </span>{' '}
              en 2016, après des études à{' '}
              <span className='font-bold'>Grenoble</span> et{' '}
              <span className='font-bold'>Berlin</span>. Pendant ma
              <span className='font-bold'>Licence</span>, je me suis concentré
              sur le <span className='font-bold'>développement durable</span> et
              l'<span className='font-bold'>agriculture urbaine</span>. En{' '}
              <span className='font-bold'>Master</span>, j'ai étudié les{' '}
              <span className='font-bold'>risques naturels</span>, les{' '}
              <span className='font-bold'>hydrosystèmes</span>, la{' '}
              <span className='font-bold'>biodiversité</span> et acquis des
              compétences en <span className='font-bold'>télédétection</span>,{' '}
              <span className='font-bold'>SQL</span>,{' '}
              <span className='font-bold'>QGIS</span>,{' '}
              <span className='font-bold'>ArcGIS</span>,{' '}
              <span className='font-bold'>Python</span> et{' '}
              <span className='font-bold'>R</span>.
              <br />
              J'ai effectué deux stages : Pour une{' '}
              <span className='font-bold'>Réserve Naturelle Régionale</span>,
              j'ai créé une{' '}
              <span className='font-bold'>base de données géoréférencées</span>{' '}
              des relevés naturalistes. Pour une{' '}
              <span className='font-bold'>Communauté de Communes</span>, j'ai
              développé une
              <span className='font-bold'>base de données</span> ainsi qu'une{' '}
              <span className='font-bold'>carte interactive en ligne</span>
              recensant les lieux de production et d'achat de produits locaux.
            </p>
          }
          dateEnd='2016'
          dateStart='2011'
        />
      </div>
    </section>
  )
}

export default Experience
