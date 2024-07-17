import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png'; // Asegúrate de tener una imagen de logo en la carpeta src

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add">Agregar Video</Link>
      </nav>
    </header>
  );
};

export default Header;
