import React, { useState } from "react";
import Layouts from "@/src/layouts/Layouts";
import PageBanner from "@/src/components/PageBanner";
import emailjs from 'emailjs-com';
import Head from "next/head";
const Contact = () => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [Positionsouhaitée, setPositionsouhaitée] = useState('');
  const [fille, setFille] = useState(null);

    const handleImageUpload = async (e) => {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'ml_default');
      try {
        const response = await fetch('https://api.cloudinary.com/v1_1/dzpd450fk/image/upload', {
          method: 'POST',
          body: formData,
        });
        const data = await response.json();
        setFille(data.secure_url);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    };
    
    
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      const serviceId = 'service_ole5bjd';
      const templateId = 'template_z5fgqom';
    
      try {
        const emailData = {
          nom: nom,
          tel: tel,
          email: email,
          Positionsouhaitée: Positionsouhaitée,
          fille: fille, // Include the Cloudinary URL directly in the email data object
        };
    
        const response = await emailjs.send(serviceId, templateId, emailData, 'bTzzJi5rNKmrkV_0h');
    
        console.log('Email sent successfully!', response);
    
        // Reset form fields after successful submission
        setNom('');
        setEmail('');
        setTel('');
        setPositionsouhaitée('');
        setFille(null);
      } catch (error) {
        console.error('Error sending email:', error);
      }
    };

  return (
    <Layouts>
    <Head>
        <title>FeizhouCom - Carrière</title>
        <meta
          name="description"
          content="FeizhouCom l'agence qui donne vie à votre identité, reflétant fidèlement votre essence et vos valeurs."
        />
        <meta
          name="keywords"
          content="Sites web, Traduction, Communication, Relations publiques, Communication corporate, Image de marque"
        />
        <meta name="author" content="FeizhouCom" />
        <link rel="icon" href="./FeizhouCom.png" type="image/png" />

      </Head>
       <PageBanner
        breadTitle={"Carrière"}
      /> 

      {/* Job Application Form */}
      <section id="contact" className="container mx-auto mb-5 mt-9">
        <h3 className="text-center text-3xl font-semibold mb-12">
          Envoyez Nous <span className="font-thin">Votre CV</span>
        </h3>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 mx-auto max-w-md" /* This centers the form and sets the max width */
        >
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
            Nom Complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
            />
          </div>
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/* Phone Input */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Téléphone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              required
            />
          </div>
          <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
        Position souhaitée: </label>
        <input
          type="text"
          id="Positionsouhaitée"
          name="Positionsouhaitée"
          value={Positionsouhaitée}
          onChange={(e) => setPositionsouhaitée(e.target.value)}
          required
        />
          {/* Resume Input */}
          <div>
            <label
              htmlFor="resume"
              className="block text-sm font-medium text-gray-700"
            >
              CV
            </label>
            <input
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ff5733] sm:text-sm sm:leading-6 pt-3"
            type="file" id="file" name="file"
            onChange={handleImageUpload} 
          />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-2xl font-medium bg-[#ff5733] text-black py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-3"
          >
            Envoyer
          </button>
        </form>
      </section>
    </Layouts>
  );
};

export default Contact;
