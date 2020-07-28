import React from 'react';

import './Menu.css';

import Logo from '../../assets/logo.png';
import Button from '../Button/Index.js'


function Menu() {
  return(
    <nav className="Menu">
      <a href="/">
        <img src={Logo} className="Logo" alt="Aluraflix logo"/>
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
