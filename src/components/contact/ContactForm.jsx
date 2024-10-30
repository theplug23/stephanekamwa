import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./style.scss";
import { dsnCN } from "../../hooks/helper";
import { useTranslation } from "react-i18next";

function ContactForm({ className }) {
  const form = useRef();
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm("service_j2lu66k", "template_rukjdbg", form.current, "21I8nFC1Kg4MEBMER")
       .then(
        (result) => {
          setLoading(false);
          setResult(true);
          form.current.reset();
        },
        (error) => {
          alert("Erreur d'envoi du message, veuillez réessayer !")
          setLoading(false);
          setResult(false)
        }
      );
  };

  setTimeout(() => setResult(false), 5000);
  
  const {t} =useTranslation("common")

  return (
    <div className={dsnCN("form-box", className)}>
      <h3 className="mb-30">{t("Ecrivez nous ici")}</h3>
      <form ref={form} onSubmit={sendEmail}>
        <div className="input__wrap controls">
          <div className="form-group">
            <label>{t("VOTRE NOM :")} </label>
            <input
              id="form_name"
              type="text"
              name="form_name"
             
              placeholder={t("Entrez votre nom")}
              required="required"
            />
          </div>

          <div className="form-group">
            <label>{t("VOTRE E-MAIL :")}</label>
            <input
              id="form_email"
              type="email"
              name="form_email"
              placeholder={t("Entrez votre e-mail")}
              required="required"
            />
          </div>

          <div className="form-group">
            <label> {t("VOTRE MESSAGE :")} </label>
            <textarea
              id="form_message"
              className="form-control"
              name="form_message"
              placeholder={t("Parlez-nous de vous et de votre projet")}
              required="required"
            />
          </div>

          <div className="image-zoom">
            <button type="submit" id="btn-contact">{t("ENVOYER UN MESSAGE")}</button>
          </div>
          
           {loading && <div className="loading-message mt-20" style={{color: '#b99226',fontWeight: 'bold'}}>Méssage en envoi ......</div>}
                    {result &&
                    <p className="success-message mt-20" style={{color: 'green',fontWeight: 'bold'}}>Votre méssage a été envoyé avec succès. Nous vous contacterons plustard.</p>} 
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
