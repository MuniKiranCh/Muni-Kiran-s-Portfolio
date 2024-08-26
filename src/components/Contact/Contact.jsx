import React from 'react'
import './Contact.css';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted', formData);
  };

  return (
    <>
      <br /><br /><br />
      <div className="contact">
      <div className="contact-content">
        <div className="contact-info">
          <h2 style={{color:'red'}} >Get in touch</h2>
          <br /><br />
          <p>Boys Hostel, NITK Surathkal, Mangalore, Karnataka, India</p>
          <p>Phone no: 9121716854</p>
          <p>Gmail: munikiran.ch2005@gmail.com</p>
        </div>
        <div className="contact-form">
          {/* <h2>Contact Form</h2> */}
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </label>
            <label>
              Email:
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </label>
            <label>
              Message:
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
              />
            </label>
            <button type="submit">Submit</button>
          </form>
          <br /><br /><br /><br /><br />
        </div>
      </div>
    </div>

    </>
  );
};

export default Contact;