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
      <h2 className='mb-5 text-4xl font-heading'>Expérience</h2>
      <div className='flex flex-row flex-wrap gap-10'>
        <ExperienceItem
          imageUrl={Openclassrooms}
          text='OpenClassrooms'
          description='Formation Développeur Front-End et Intégrateur Web'
        />
        <ExperienceItem
          imageUrl={Extellient}
          text='Extellient'
          description='Stage'
        />
        <ExperienceItem imageUrl={Nathnet} text='Nathnet' description='Stage' />
        <ExperienceItem
          imageUrl={Codecademy}
          text='Codecademy & Sololearn'
          description='Auto-formation'
        />
        <ExperienceItem
          imageUrl={Uga}
          text='Institut de Géographie Alpine'
          description='Master en Géographie, Géomatique et SIG'
        />
      </div>
      {/* <div className='w-[80%] border-b-4 border-black'></div> */}
    </section>
  )
}

export default Experience
