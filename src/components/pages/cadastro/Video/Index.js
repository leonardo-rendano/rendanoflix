import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault/Index';

function cadastroVideo(props) {
  return(
    <PageDefault >
      <h1>Cadastro de Vídeo</h1>

      <Link to="/cadastro/categoria" >
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default cadastroVideo;