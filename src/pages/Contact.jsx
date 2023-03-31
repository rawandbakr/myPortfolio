
import React, { useState ,useRef} from 'react';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { Result } from 'postcss';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const setDataToNull=(()=>{
setEmail('')
setName('')
setMessage('')
  })

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const myPromise=emailjs.sendForm('service_ojqj4xs', 'template_mj09859', form.current, 'HXP9fXNePn3YgPP8h')
    toast.promise(myPromise, {
      loading: 'Sending.......' ,
      success:'Got the email',
      error: 'Error when sending',
    });

    if(myPromise)
    setDataToNull();
  };
  return (
    <div className='max-h-max w-full p-5 flex flex-col text-black'>
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <br/>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col justify-center items-center'>
        <label className="block mb-2 font-bold">Name</label>
        <input type="text"  name="user_name"  value={name} onChange={handleNameChange}  className=" p-2 mb-6  bg-blue-100 rounded-lg border-gray-300" />

        <label className="block mb-2 font-bold">Email</label>
        <input type="email"  name="user_email" value={email} onChange={handleEmailChange}  className=" p-2 mb-6 bg-blue-100 rounded-lg border-gray-300" />

        <label htmlFor="message" className="block mb-2 font-bold">Message</label>
        <textarea  name="message" value={message} onChange={handleMessageChange} className=" p-2 mb-6 bg-blue-100 rounded-lg border-gray-300"></textarea>

        <button type="submit"  className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">Submit</button>
        <Toaster
        position="top-center"
        reverseOrder={false}
      />
      </form>
    </div>
  )
}

export default Contact;
