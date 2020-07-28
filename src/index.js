import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/pages/Home/Index';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import cadastroVideo from './components/pages/cadastro/Video/Index';
import cadastroCategoria from './components/pages/cadastro/Categoria/Index';

const pagina404 = () => (<div>ERRO 404. Página não encontrada</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cadastro/video" component={cadastroVideo} />
      <Route path="/cadastro/categoria" component={cadastroCategoria}  />
      <Route component={pagina404} />
    </Switch> 
  </BrowserRouter>,
  document.getElementById('root')
);


