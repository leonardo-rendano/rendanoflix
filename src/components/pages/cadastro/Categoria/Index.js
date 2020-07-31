import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault/Index';
import FormField from '../../../FormField/Index';
import Button from '../../../Button/Index';

function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descrição: '',
    cor: ''
  }

  const [categoria, setCategoria] = useState([]);
  const [values, setValues] = useState(valoresIniciais);


 
  function handleInputChange(event) {
    setValues(event.target.value)
    setValue(event.target.getAttribute('name'), event.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setCategoria([
      ...categoria,
      values
    ])

    setValues(valoresIniciais)
  }

  // chave: nome, descrição, etc
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor // nome: 'valor
    })
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias'
    
    fetch(URL)
    .then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setCategoria([
        ...resposta,
      ]);
    });

  })
  


  return(
    <PageDefault >
      <h1>Cadastro de Categoria: {values.nome} </h1>

      <form onSubmit={handleSubmit}>
        
        <FormField 
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleInputChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descrição"
          value={values.descrição}
          onChange={handleInputChange}
        />

        <FormField 
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleInputChange}
        />       

        <Button>
          Cadastrar
        </Button>
      </form>

      {categoria.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categoria.map((categoria) => {
          return(
            <li key={`${categoria.nome}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/" >
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;