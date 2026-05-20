// import React, { useState } from "react";

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "", email: "", subject: "", message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = () => {
//     if (!form.name || !form.email || !form.message) {
//       alert("Veuillez remplir les champs obligatoires.");
//       return;
//     }
//     setSubmitted(true);
//   };

//   return (
//     <section id="contact" className="contact">
//       <h1 className="section-title">Mon Contact ^-^</h1> <br></br><br></br>

//       <div className="contact-layout">

//         {/* Colonne gauche */}
//         <div className="contact-left">
//           <p className="contact-text">
//             Une question ou une idée ? ^-^<br></br> Je réponds rapidement et avec plaisir, que ce soit pour un simple échange ou quelque chose de plus concret.          </p>

//           <div className="simple-form">
//             <input type="text" name="name" placeholder="Nom"
//               value={form.name} onChange={handleChange} />
//             <input type="email" name="email" placeholder="Email"
//               value={form.email} onChange={handleChange} />
//             <textarea name="message" placeholder="Votre message..." rows={5}
//               value={form.message} onChange={handleChange} />
//             {!submitted ? (
//               <button onClick={handleSubmit}>Envoyer le message</button>
//             ) : (
//               <p className="form-success">✓ Message envoyé !</p>
//             )}
//           </div>
//         </div>

//         {/* Colonne droite */}
//         <div className="contact-right">
//           <h3>Pour en savoir plus :</h3>
//           <p>Je suis curieuse, autonome et toujours motivée pour apprendre. J’aime explorer, tester et créer, et ces projets reflètent ma manière de travailler.</p>
//           <ul>
//             <li>Site internet HTML/CSS</li>
//             <li>CTF en cybersécurité</li>
//             <li>Réalisation du protocole avant-projet</li>
//             <li>Projet data d’analyse et de traitement de données</li>
//             <li>Chatbot intégré à une plateforme</li>
//           </ul>

//           {/* boutons ICI, dans contact-right */}
//           <div className="contact-right-btns">
//             <a href="https://github.com/celiacml?tab=repositories" target="_blank" rel="noreferrer"
//               className="contact-right-btn btn-github">
//               <i className="bx bxl-github"></i> GitHub
//             </a>
//             <a href="./src/assets/Célia-ML-CV.pdf" download className="contact-right-btn btn-cv">
//               <i className="bx bx-download"></i> Download CV
//             </a>
//           </div>

//         </div> {/* fin contact-right */}

//       </div> {/* fin contact-layout */}

//     </section>

//   );
// }

import React, { useState, useEffect } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Validation automatique
  useEffect(() => {
    const emailValid = form.email.includes("@");
    const requiredFilled = form.name && form.email && form.message;
    setIsValid(requiredFilled && emailValid);
  }, [form]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    const response = await fetch("https://formspree.io/f/mredggqq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } else {
      alert("Erreur lors de l’envoi du message.");
    }
  };

  return (
    <section id="contact" className="contact">
      <h1 className="section-title">Mon Contact ^-^</h1>
      <br /><br />

      <div className="contact-layout">

        {/* Colonne gauche */}
        <div className="contact-left">
          <p className="contact-text">
            Une question ou une idée ? ^-^<br />
            Je réponds rapidement et avec plaisir, que ce soit pour un simple échange ou quelque chose de plus concret.
          </p>

          <form className="simple-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nom*"
              value={form.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={form.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Votre message..."
              rows={5}
              value={form.message}
              onChange={handleChange}
            />

            {!submitted ? (
              <button type="submit" disabled={!isValid}>
                Envoyer le message
              </button>
            ) : (
              <p className="form-success">✓ Message envoyé !</p>
            )}
          </form>
        </div>

        {/* Colonne droite */}
        <div className="contact-right">
          <h3>Pour en savoir plus :</h3>
          <p>
            Je suis curieuse, autonome et toujours motivée pour apprendre.
            J’aime explorer, tester et créer, et ces projets reflètent ma manière de travailler.
          </p>

          <ul>
            <li>Site internet HTML/CSS</li>
            <li>CTF en cybersécurité</li>
            <li>Réalisation du protocole avant-projet</li>
            <li>Projet data d’analyse et de traitement de données</li>
            <li>Chatbot intégré à une plateforme</li>
          </ul>

          <div className="contact-right-btns">
            <a
              href="https://github.com/celiacml?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="contact-right-btn btn-github"
            >
              <i className="bx bxl-github"></i> GitHub
            </a>

            <a
              href="./src/assets/Célia-ML-CV.pdf"
              download
              className="contact-right-btn btn-cv"
            >
              <i className="bx bx-download"></i> Download CV
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
