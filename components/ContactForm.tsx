import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";

interface ContactFormProps {
  title?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ title }) => {
  const [state, handleSubmit] = useForm("mgvkgvqk"); // Replace with your Formspree form ID
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
    email: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (state.succeeded) {
    return <p className="smallcaps">Gràcies pel teu missatge!</p>;
  }

  return (
    <div className="contact-page">
      <div className="form-container" onClick={(e) => e.stopPropagation()}>
        <div className="">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-box">
              <p className="smallcaps">Email</p>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter email"
                className="form-input"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="form-box">
              <p className="smallcaps">Concepte</p>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Enter subject"
                className="form-input"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
            </div>
            <div className="form-box">
              <p className="smallcaps">Missatge</p>
              <textarea
                id="message"
                name="message"
                placeholder="Enter message"
                className="form-textarea"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="column-center">
              <button
                className="SubBtn"
                type="submit"
                disabled={state.submitting}
              >
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

// import React, { useEffect, useState } from "react";
// import Image from "next/image";

// interface ContactFormProps {
//   title?: string;
// }

// const ContactForm: React.FC<ContactFormProps> = ({ title }) => {
//   const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
//   const [formData, setFormData] = useState({
//     subject: '',
//     message: '',
//     email: '',
//   });

//   const handleFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const files = event.target.files;
//     if (files && files.length > 0) {
//       setSelectedFiles(Array.from(files));
//     }
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   return (
//     <div className="contact-page">
//       <div className="form-container" onClick={(e) => e.stopPropagation()}>
//         <div className="">
//           <form 
//             className="contact-form" 
//             action={`mailto:your-email@example.com`}
//             method="POST"
//             encType="text/plain"
//           >
//             <div className="form-box">
//               <p className="smallcaps">Email</p>
//               <input
//                 name="email"
//                 type="email"
//                 placeholder="Enter email"
//                 className="form-input"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="form-box">
//               <p className="smallcaps">Concepte</p>
//               <input
//                 name="subject"
//                 type="text"
//                 placeholder="Enter subject"
//                 className="form-input"
//                 value={formData.subject}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="form-box">
//               <p className="smallcaps">Missatge</p>
//               <textarea
//                 name="message"
//                 placeholder="Enter message"
//                 className="form-textarea"
//                 value={formData.message}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="column-center">
//               <button className="SubBtn" type="submit">
//                 Enviar Missatge
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;