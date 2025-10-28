import React from "react";

const programas = [
  "ADSO",
  "REDES DE DATOS",
  "ANIMACIÓN 3D",
  "LOGÍSTICA",
  "MERCADEO",
  "SISTEMAS",
];

const Programas = () => {
  return (
    <section className="programas">
      <div className="programas-grid">
        {programas.map((p) => (
          <div className="programa-card" key={p}>
            {p}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programas;
