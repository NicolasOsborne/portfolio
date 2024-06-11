import ExperienceItem from '../components/ExperienceItem'
import Openclassrooms from '../assets/images/logos/openclassrooms.jpg'
import Extellient from '../assets/images/logos/extellient.jpg'
import Nathnet from '../assets/images/logos/nathnet.jpg'
import Codecademy from '../assets/images/logos/codecademy.jpg'
import Uga from '../assets/images/logos/uga.jpg'

const Experience = () => {
  return (
    <section
      className='border-b-4 border-black py-[200px] scroll-mt-header flex flex-col items-center'
      id='experience'
    >
      <h2 className='mb-5 text-4xl font-heading'>
        Où est-ce que j'ai appris à faire ça ?
      </h2>
      <div className='flex flex-row flex-wrap gap-10 py-12'>
        <ExperienceItem
          imageUrl={Openclassrooms}
          text='OpenClassrooms'
          description='Formation Développeur Front-End et Intégrateur Web'
          date='Septembre 2023 - Juin 2024'
        />
        <ExperienceItem
          imageUrl={Extellient}
          text='Extellient'
          description='Stage'
          date='Juillet - Août 2023'
        />
        <ExperienceItem
          imageUrl={Nathnet}
          text='Nathnet'
          description='Stage'
          date='Janvier 2023'
        />
        <ExperienceItem
          imageUrl={Codecademy}
          text='Codecademy & Sololearn'
          description='Auto-formation'
          date='Septembre 2022 - Septembre 2023'
        />
        <ExperienceItem
          imageUrl={Uga}
          text='Institut de Géographie Alpine'
          description='Master en Géographie, Géomatique et SIG'
          date='2014 - 2016'
        />
      </div>
      {/* <div className='w-[80%] border-b-4 border-black'></div> */}
    </section>
  )
}

export default Experience
