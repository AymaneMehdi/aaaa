import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import React, { useState } from "react";
import emailjs from 'emailjs-com';
import Head from "next/head";
import ArrowIcon from "@layouts/svg-icons/Arrow";

const Contact = () => {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your EmailJS service ID and template ID
    const serviceId = 'service_ole5bjd';
    const templateId = 'template_4n97eh2';

    try {
      const response = await emailjs.sendForm(serviceId, templateId, e.target, 'qH0Flh8U6ZvtOp3E6');
      console.log('Email sent successfully!', response);
      setStatusMessage('Votre message a été envoyé avec succès!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending email:', error);
      setStatusMessage('Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer.');
    }
  };



  return (
    <Layouts>
    <Head>
        <title>FeizhouCom - Contact</title>
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
        breadTitle={"Contact"}
        anchorLabel={"MAP"}
        anchorLink={"#map"}
        paddingBottom={1}
        align={"center"}
      />

      {/* contact form */}
      
        <div className="container mil-p-120-90">
          <h3 className="mil-center mil-up mil-mb-120 text-4xl ">
          CONTACTEZ-NOUS
          </h3>

          
          <form onSubmit={handleSubmit} className="row align-items-center">
          <div className="col-lg-6 mil-up">
            <input
              type="text"
              placeholder="Nom complet"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col-lg-6 mil-up">
            <input
              type="email"
              placeholder="Votre Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="col-lg-12 mil-up">
            <textarea
              placeholder="Message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="col-lg-8">
            <p className="mil-up mil-mb-30">
              <span className="mil-accent">*</span> Nous promettons de ne
              pas divulguer vos informations personnelles à des tiers.
            </p>
          </div>
          <div className="col-lg-4">
            <div className="mil-adaptive-right mil-up mil-mb-30 ">
            <button type="submit" className="mil-button mil-arrow-place mt-5">
            <span>Envoyer</span>
            <ArrowIcon />
            </button>
            </div>
          </div>
          <div className="form-status" id="contactFormStatus">
            {statusMessage && <p>{statusMessage}</p>}
          </div>
        </form>
            </div>
      {/* map */}
      <section id="map">
      <div className="mil-map-frame mil-up">
        <div className="mil-map">
        <iframe
        title="FeizhouCom"
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3324.349305035921!2d-7.5163623!3d33.5702788!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDM0JzEzLjAiTiA3wrAzMCc1OC45Ilc!5e0!3m2!1sen!2sma!4v1713801813063!5m2!1sen!2sma"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
      </div>
      {/* map end */}</section>
    </Layouts>
  );
};
export default Contact;
