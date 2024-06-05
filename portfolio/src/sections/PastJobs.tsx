import { GiBarStool, GiHops } from 'react-icons/gi'
import SkillIcon from '../components/SkillIcon'
import { RiBeerLine, RiRestaurantLine } from 'react-icons/ri'
import { FaChild, FaCocktail, FaSkiing, FaSwimmer } from 'react-icons/fa'
import Button from '../components/Button'

const PastJobs = () => {
  return (
    <section className='border-b-4 border-black py-10'>
      <h2 className='text-center mb-5'>Dans ma vie, j'ai aussi été</h2>
      <div className='flex flex-row flex-wrap justify-center gap-4 py-12'>
        <SkillIcon logo={GiHops} name='Brasseur' />
        <SkillIcon logo={GiBarStool} name='Pub Manager' />
        <SkillIcon logo={RiBeerLine} name='Barman' />
        <SkillIcon logo={FaCocktail} name='Mixologue' />
        <SkillIcon logo={FaSkiing} name='Perchiste' />
        <SkillIcon logo={FaSwimmer} name='Maître-Nageur' />
        <SkillIcon logo={RiRestaurantLine} name='Serveur' />
        <SkillIcon logo={FaChild} name='Animateur' />
      </div>
      <div className='flex justify-center'>
        <Button text='Télécharger mon CV' onClick={() => {}} />
      </div>
    </section>
  )
}

export default PastJobs
