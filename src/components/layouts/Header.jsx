import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo-circle"></div>
        <nav className="nav-links">
          <a href="#">INICIO</a>
          <a href="#">PROGRAMAS</a>
          <a href="#">CONTACTO</a>
        </nav>
      </div>
      <div className="header-text">
        <p>servicio nacional de aprendizaje</p>
        <h3>CGMLTI</h3>
        <p>BOGOTA</p>
      </div>
    </header>
  );
};

export default Header;
