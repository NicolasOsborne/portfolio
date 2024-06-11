import ContactForm from '../components/ContactForm'
import WaveBackground from '../assets/images/background_waves.svg'

const Contact = () => {
  return (
    <section
      className='w-full flex flex-col justify-center border-b-4 border-black py-[200px] scroll-mt-header bg-no-repeat bg-cover'
      id='contact'
      style={{ backgroundImage: `url(${WaveBackground})` }}
    >
      <h2 className='text-center mb-20 text-4xl font-heading'>
        Et après tout, pourquoi pas ?
      </h2>
      <div className='w-full flex justify-center'>
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact
