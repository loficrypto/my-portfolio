import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send the message. Please try again.');
      });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="p-8 bg-gray-100">
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-2xl font-bold">
        Contact Me
      </motion.h2>
      <form onSubmit={sendEmail} className="mt-4 space-y-4">
        <motion.input 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          type="text" name="from_name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" className="w-full p-2 border rounded" />
        <motion.input 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          type="email" name="reply_to" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" className="w-full p-2 border rounded" />
        <motion.textarea 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" className="w-full p-2 border rounded"></motion.textarea>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Submit
        </motion.button>
      </form>
    </section>
  );
};

export default Contact;
