import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <section className='w-full flex flex-col justify-center border-b-4 border-black py-10'>
      <h2 className='text-center mb-5'>Contact</h2>
      <div className='w-full flex justify-center'>
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact
