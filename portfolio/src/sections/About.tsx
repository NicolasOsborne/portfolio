import Profile from '../assets/images/profile_pic.jpg'

const About = () => {
  return (
    <section
      className='grid grid-cols-2 border-b-4 border-black scroll-mt-header'
      id='about'
    >
      <div className='border-r-4 border-black p-10 flex flex-col gap-10'>
        <h2 className='text-4xl font-heading text-center'>À Propos</h2>
        <p className='font-body text-xl'>
          Hello ! Moi c'est Nicolas, développeur Front-End et intégrateur web,
          qui transforme toutes tes idées et tes visions en sites webs
          interactifs et attractifs ! Avec mon obsession pour le pixel perfect
          et ma passion pour les interfaces intuitives et accessibles, je suis
          prêt à rendre le web plus génial, un site après l'autre !
        </p>
      </div>
      <div className='flex items-center justify-center p-10'>
        <img
          src={Profile}
          className='border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
        ></img>
      </div>
    </section>
  )
}

export default About
