import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault/Index';

function cadastroCategoria(props) {
  return(
    <PageDefault >
      <h1>Cadastro de Categoria</h1>

      


      <Link to="/" >
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default cadastroCategoria;