import { useState } from 'react'
import Input from './Input'
import Textarea from './Textarea'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  return (
    <form className='bg-bg border-2 border-black font-body shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-3/4 lg:w-1/2'>
      <div className='flex flex-col gap-2 px-8 py-4'>
        <label htmlFor='name'>Nom</label>
        <Input
          value={name}
          setValue={setName}
          placeholder='Votre nom'
          id='name'
          name='name'
        />
        <label htmlFor='email'>Email</label>
        <Input
          value={email}
          setValue={setEmail}
          placeholder='Votre email'
          id='email'
          name='email'
        />
        <label htmlFor='message'>Message</label>

        <Textarea
          value={message}
          setValue={setMessage}
          placeholder='Votre message'
          id='message'
          name='message'
        />
        <div className='flex justify-center my-4'>
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
