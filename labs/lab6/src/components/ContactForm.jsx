import React, { useState, useEffect } from 'react';
import { submitContactForm } from '../services/api'; 
import './ContactForm.css'; 

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ message: '', type: '' }); 
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load draft from localStorage on component mount
  useEffect(() => {
    const savedDraft = localStorage.getItem('contactFormDraft');
    if (savedDraft) {
      try {
        const draftData = JSON.parse(savedDraft);
        setFormData(draftData);
        setStatus({ message: 'Draft restored.', type: 'info' });
      } catch (e) {
        console.error("Failed to parse draft:", e);
        localStorage.removeItem('contactFormDraft'); // Clear invalid draft
      }
    }
  }, []);

  // Save draft to localStorage whenever formData changes (excluding consent)
  useEffect(() => {
    // Debounce saving to avoid excessive writes
    const handler = setTimeout(() => {
      const { consent, ...draftData } = formData; 
      if (Object.values(draftData).some(value => value !== '')) { 
          localStorage.setItem('contactFormDraft', JSON.stringify(formData));
          // Only show 'Draft saved' if it wasn't just restored
          if (status.message !== 'Draft restored.') {
             setStatus({ message: 'Draft saved.', type: 'info' });
          }
      } else {
          localStorage.removeItem('contactFormDraft'); 
          if (status.message === 'Draft saved.') {
              setStatus({ message: '', type: '' });
          }
      }
    }, 500); // Save 500ms after last change

    return () => {
      clearTimeout(handler);
    };
  }, [formData]); // Rerun effect if formData changes


  const validateField = (name, value) => {
    let errorMsg = '';
    switch (name) {
      case 'name':
        if (!value) {
          errorMsg = 'Name is required.';
        } else if (!/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(value)) {
          errorMsg = 'Name contains invalid characters.';
        }
        break;
      case 'email':
        if (!value) {
          errorMsg = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          errorMsg = 'Email address is invalid.';
        }
        break;
      case 'subject':
         if (!value) {
          errorMsg = 'Subject is required.';
        } else if (!/^[a-zA-Z\s]+$/.test(value)) { 
          errorMsg = 'Subject should only contain letters and spaces.';
        }
        break;
      case 'message':
        if (!value) {
          errorMsg = 'Message is required.';
        } else if (/[<>]/g.test(value)) { 
           errorMsg = 'Message cannot contain HTML characters like < or >.';
        }
        break;
      case 'consent':
        if (!value) {
          errorMsg = 'You must consent to continue.';
        }
        break;
      default:
        break;
    }
    return errorMsg;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));

    // Validate field on change and clear error if valid
    const error = validateField(name, newValue);
     setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
     }));

    // Clear main status message on interaction after submission attempt
    if (status.type === 'success' || status.type === 'error') {
       setStatus({ message: '', type: '' });
    }
     // Clear 'Draft restored' message on interaction
    if (status.message === 'Draft restored.') {
        setStatus({ message: '', type: '' });
    }
  };

  const validateForm = () => {
     const newErrors = {};
     let isValid = true;
     Object.keys(formData).forEach(key => {
        const error = validateField(key, formData[key]);
        if (error) {
            newErrors[key] = error;
            isValid = false;
        }
     });
     setErrors(newErrors);
     return isValid;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: '', type: '' }); // Clear previous status

    if (!validateForm()) {
      setStatus({ message: 'Please fix the errors above.', type: 'error' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ message: 'Submitting...', type: 'info' });


    try {
      // Exclude consent from data sent to backend if not needed there
      const dataToSend = { ...formData };
      // delete dataToSend.consent; // Uncomment if backend doesn't need the consent field value itself

      await submitContactForm(dataToSend); // Call the API function

      setStatus({ message: 'Message sent successfully!', type: 'success' });
      // Clear form and localStorage
      setFormData({ name: '', email: '', subject: '', message: '', consent: false });
      localStorage.removeItem('contactFormDraft');
      setErrors({}); // Clear errors as well

    } catch (error) {
      console.error('Submission error:', error);
       setStatus({
         message: `Submission failed. ${error.response?.data?.message || error.message || 'Please try again later.'}`,
         type: 'error'
       });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="contact-form">
      <h2>Contact Us</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          aria-describedby="name-error"
          required
        />
        {errors.name && <p id="name-error" className="error-message">{errors.name}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          aria-describedby="email-error"
          required
        />
        {errors.email && <p id="email-error" className="error-message">{errors.email}</p>}
      </div>

       <div className="form-group">
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          aria-invalid={!!errors.subject}
          aria-describedby="subject-error"
          required
        />
        {errors.subject && <p id="subject-error" className="error-message">{errors.subject}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          aria-invalid={!!errors.message}
          aria-describedby="message-error"
          required
        ></textarea>
        {errors.message && <p id="message-error" className="error-message">{errors.message}</p>}
      </div>

      <div className="form-group form-group-checkbox">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          aria-invalid={!!errors.consent}
          aria-describedby="consent-error"
          required
        />
        <label htmlFor="consent" className="consent-label">
            I consent to being contacted using the information provided and understand my information will be stored securely.
        </label>
         {errors.consent && <p id="consent-error" className="error-message error-message-checkbox">{errors.consent}</p>}
      </div>

        {status.message && (
            <p className={`status-message status-${status.type}`}>
            {status.message}
            </p>
        )}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

export default ContactForm;