import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import Logo from '../../assets/logo.png';
import Button from '../Button/Index.js'


function Menu() {
  return(
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} className="Logo" alt="Aluraflix logo"/>
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
