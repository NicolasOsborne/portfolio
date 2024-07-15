import { useState } from 'react'
import emailjs from '@emailjs/browser'

import Input from './Input'
import Textarea from './Textarea'
import FormModal from './FormModal'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [isModalActive, setisModalActive] = useState(false)
  const [formModalMessage, setFormModalMessage] = useState('')

  const handleCloseModal = () => {
    setisModalActive(false)
    setFormModalMessage('')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const templateId = 'template_njrwt6l'
    const serviceId = 'service_m37a60q'
    const publicKey = '5Ro12CjTefEFQ_vG9'
    const templateParams = {
      name,
      email,
      message,
    }
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setName('')
        setEmail('')
        setMessage('')
        setFormModalMessage(
          'Merci beaucoup ! Votre message a bien été envoyé avec succès ! Je reviens vers vous et vous réponds dans les plus brefs délais !'
        )
        setisModalActive(true)
      })
      .catch(() => {
        setFormModalMessage(
          "Oops... Il y a eu un problème lors de l'envoi de votre message. Veuillez réessayer."
        )
        setisModalActive(true)
      })
  }

  return (
    <>
      <form
        className='bg-bg border-2 border-black dark:border-dark-black dark:bg-main rounded-base font-body shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-5/6 md:w-3/4 lg:w-1/2'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col gap-2 px-8 py-4'>
          <label htmlFor='name' className='font-semibold'>
            Nom
          </label>
          <Input
            value={name}
            setValue={setName}
            placeholder='Votre nom'
            id='name'
            name='name'
            type='text'
          />
          <label htmlFor='email' className='font-semibold'>
            Email
          </label>
          <Input
            value={email}
            setValue={setEmail}
            placeholder='Votre email'
            id='email'
            name='email'
            type='email'
          />
          <label htmlFor='message' className='font-semibold'>
            Message
          </label>

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
              className='flex cursor-pointer items-center rounded-base border-2 border-black bg-main px-4 py-2 text-sm font-base shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:bg-secondary'
            >
              C'est parti !
            </button>
          </div>
        </div>
      </form>
      <FormModal
        active={isModalActive}
        setActive={setisModalActive}
        formModalMessage={formModalMessage}
        onClose={handleCloseModal}
      />
    </>
  )
}

export default ContactForm
