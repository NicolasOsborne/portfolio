import Profile from '../assets/images/profile_pic.jpg'

const About = () => {
  return (
    <section
      className='grid grid-cols-2 border-b-4 border-black scroll-mt-header'
      id='about'
    >
      <div className='border-r-4 border-black p-10 flex flex-col'>
        <h2 className='text-center'>À Propos</h2>
        <p>
          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum
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
