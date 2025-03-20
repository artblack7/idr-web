import React, { useEffect, useState } from "react";
import Image from "next/image";
// import Link from "@/components/assets/icons/link.svg";

interface ContactFormProps {
  title?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ title }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    subject: '',
    message: '',
    email: '',
  });

  const handleFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFiles(Array.from(files));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="contact-page">
      <div className="form-container" onClick={(e) => e.stopPropagation()}>
        <div className="">
          <form 
            className="contact-form" 
            action={`mailto:your-email@example.com`}
            method="POST"
            encType="text/plain"
          >
            <div className="form-box">
              <p className="smallcaps">Email</p>
              <input
                name="email"
                type="email"
                placeholder="Enter email"
                className="form-input"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-box">
              <p className="smallcaps">Concepte</p>
              <input
                name="subject"
                type="text"
                placeholder="Enter subject"
                className="form-input"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-box">
              <p className="smallcaps">Missatge</p>
              <textarea
                name="message"
                placeholder="Enter message"
                className="form-textarea"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="column-center">
              <button className="SmallBtn" type="submit">
                Enviar Missatge
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;