import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact">
    <center><h1>Contact Us</h1></center>  
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" onChange={handleChange}></textarea>
        <center><button type="submit">Send</button></center>
      </form>
    </div>
  );
};

export default Contact;
