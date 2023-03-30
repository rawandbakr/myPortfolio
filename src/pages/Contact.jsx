
import React, { useState ,useRef} from 'react';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [user_name, setName] = useState('');
  const [user_email, setEmail] = useState('');
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // Send form data to server or perform other actions here
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ojqj4xs', 'template_mj09859', form.current, 'HXP9fXNePn3YgPP8h')
      .then((result) => {
          console.log(result.text)
          toast.success('We will contact you asap.');
          setEmail('')
          setMessage('')
          setName('')
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='max-h-max w-full p-5 flex flex-col text-black'>
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <br/>
      <form onSubmit={sendEmail} ref={form} className='flex flex-col justify-center items-center'>
        <label className="block mb-2 font-bold">Name</label>
        <input type="text" id="name" name="user_name" value={user_name} onChange={handleNameChange} className=" p-2 mb-6  bg-blue-100 rounded-lg border-gray-300" />

        <label className="block mb-2 font-bold">Email</label>
        <input type="email" id="email" name="user_email" value={user_email} onChange={handleEmailChange} className=" p-2 mb-6 bg-blue-100 rounded-lg border-gray-300" />

        <label htmlFor="message" className="block mb-2 font-bold">Message</label>
        <textarea id="message" name="message" value={message} onChange={handleMessageChange} className=" p-2 mb-6 bg-blue-100 rounded-lg border-gray-300"></textarea>

        <button type="submit" className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">Submit</button>
      </form>
      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </div>
  )
}

export default Contact;
