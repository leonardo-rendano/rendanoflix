import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault/Index';
import FormField from '../../../FormField/Index';

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

        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              name="descrição"
              value={values.descrição}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <FormField 
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleInputChange}
        />
        

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categoria.map((categoria, indice) => {
          return(
            <li key={`${categoria} ${indice}`}>
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