
import React, { useState ,useRef,useContext} from 'react';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { DarkModeContext } from '../context/DarkModeContext'



const Contact = () => {
  const {darkMode} = useContext(DarkModeContext);

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
    const myPromise=emailjs.sendForm(`${import.meta.env.VITE_SERV}`, `${import.meta.env.VITE_TEMP}`, form.current, `${import.meta.env.VITE_KEY}`)
    toast.promise(myPromise, {
      loading: 'Sending message . .' ,
      success:'Got the message',
      error: 'Error while sending message',
    });
    if(myPromise)
    setDataToNull();
  };

  const style=`p-2 mb-6  rounded-lg ${darkMode?`bg-white text-black`:`bg-black text-white`}`;
  return (
    <div id="contact" className='max-h-max w-full p-5 flex flex-col'>
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <br/>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col justify-center items-center'>
        <label className="block mb-2 font-bold">Name</label>
        <input type="text"  name="user_name"  value={name} required onChange={handleNameChange}  className={style} />

        <label className="block mb-2 font-bold">Email</label>
        <input type="email"  name="user_email" value={email} required onChange={handleEmailChange}  className={style} />

        <label htmlFor="message" className="block mb-2 font-bold">Message</label>
        <textarea  name="message" value={message} required onChange={handleMessageChange} className={style}></textarea>

        <button type="submit" className={` py-2 px-4 rounded hover:bg-cyan-900 ${darkMode?`bg-white text-black`:`bg-black text-white`}`}>Submit</button>
        <Toaster
        position="top-center"
        reverseOrder={false}
      />
      </form>
    </div>
  )
}

export default Contact;
