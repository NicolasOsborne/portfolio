import ContactForm from '../components/ContactForm'
import WaveBackground from '../assets/images/background_waves.svg'

const Contact = () => {
  return (
    <section
      className='w-full flex flex-col justify-center border-b-4 border-black py-[200px] scroll-mt-header bg-no-repeat bg-cover'
      id='contact'
      style={{ backgroundImage: `url(${WaveBackground})` }}
    >
      <h2 className='text-center text-4xl font-heading'>Contactez moi !</h2>
      <h3 className='text-center text-2xl font-heading my-20 mx-10 sm:mx-20'>
        Mon profil vous intéresse, vous intrigue, ou vous souhaitez en savoir
        plus ? N'hésitez plus !
      </h3>
      <div className='w-full flex justify-center'>
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact
