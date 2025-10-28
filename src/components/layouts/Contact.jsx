import React from "react";

const Contact = () => {
  return (
    <section className="contacto">
      <h3>CONTACTO</h3>
      <form className="contacto-form">
        <input type="text" placeholder="NOMBRES" />
        <input type="text" placeholder="APELLIDOS" />
        <textarea placeholder="MENSAJE" rows="4"></textarea>
        <button type="submit">ENVIAR</button>
      </form>
    </section>
  );
};

export default Contact;
