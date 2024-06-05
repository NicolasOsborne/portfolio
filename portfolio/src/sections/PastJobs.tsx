import { GiBarStool, GiHops } from 'react-icons/gi'
import SkillIcon from '../components/SkillIcon'
import { RiBeerLine, RiRestaurantLine } from 'react-icons/ri'
import { FaChild, FaCocktail, FaSkiing, FaSwimmer } from 'react-icons/fa'
import Button from '../components/Button'

const PastJobs = () => {
  return (
    <section className='border-b-4 border-black py-10'>
      <h2 className='text-center mb-5'>Dans ma vie, j'ai aussi été</h2>
      <div className='flex flex-row flex-wrap justify-center gap-10 py-12'>
        <SkillIcon logo={GiHops} name='Brasseur' className='bg-red-400' />
        <SkillIcon
          logo={GiBarStool}
          name='Pub Manager'
          className='bg-orange-400'
        />
        <SkillIcon logo={RiBeerLine} name='Barman' className='bg-yellow-400' />
        <SkillIcon logo={FaCocktail} name='Mixologue' className='bg-lime-400' />
        <SkillIcon logo={FaSkiing} name='Perchiste' className='bg-teal-400' />
        <SkillIcon
          logo={FaSwimmer}
          name='Maître-Nageur'
          className='bg-sky-400'
        />
        <SkillIcon
          logo={RiRestaurantLine}
          name='Serveur'
          className='bg-indigo-400'
        />
        <SkillIcon logo={FaChild} name='Animateur' className='bg-purple-400' />
      </div>
      <div className='flex justify-center'>
        <Button text='Télécharger mon CV' onClick={() => {}} />
      </div>
    </section>
  )
}

export default PastJobs
