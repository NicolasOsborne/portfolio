import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <section
      className='w-full flex flex-col justify-center border-b-4 border-black py-10 scroll-mt-header'
      id='contact'
    >
      <h2 className='text-center mb-5 text-4xl font-heading'>Contact</h2>
      <div className='w-full flex justify-center'>
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact
