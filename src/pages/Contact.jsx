
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';


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

  const handleSubmit = (event) => {
    toast.success('We will contact you asap.');
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // Send form data to server or perform other actions here
  };

  return (
    <div className='max-h-max w-full p-5 flex flex-col text-black'>
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <br/>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
        <label className="block mb-2 font-bold">Name</label>
        <input type="text" id="name" name="name" value={name} onChange={handleNameChange} className=" p-2 mb-6  bg-blue-100 rounded-lg border-gray-300" />

        <label className="block mb-2 font-bold">Email</label>
        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} className=" p-2 mb-6 bg-blue-100 rounded-lg border-gray-300" />

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
