const ContactForm = () => {
  return (
    <form className='bg-bg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-1/2'>
      <div className='flex flex-col px-8 py-4'>
        <label htmlFor='name'>Nom</label>
        <input type='text' id='name' name='name' required></input>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' required></input>
        <label htmlFor='message'>Message</label>
        <textarea id='message' name='message'></textarea>
        <div className='flex justify-center mt-4'>
          <button
            type='submit'
            className='flex cursor-pointer items-center border-2 border-black bg-main px-4 py-2 text-sm font-base shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none'
          >
            Envoyer
          </button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
