import { useState } from 'react'
import logo from "./assets/logo.jpg"
import "./App.css";

function App() {
  return (
  <body>
    <header>
      <div id="logo"><img src={logo} alt="" /></div>
    </header>
      <div className="right">
        <div className="login-box">
          <h2>Fazer Cadastro</h2>

          <div className="input-group">
            <input type="text" placeholder="Nome" />
          </div>

            <div className="input-group">
            <input type="text" placeholder="Sobrenome" />
          </div>

          <div className="input-group">
            <input type="password" placeholder="CPF" />
          </div>

           <div className="input-group">
            <input type="text" placeholder="E-MAIL" />
          </div>


           <div className="input-group">
            <input type="password" placeholder="Telefone" />
          </div>

            <div className="input-group">
            <input type="password" placeholder="Crie sua Senha..." />
          </div>
          <button>Entrar</button>

          <a href="#" className="forgot">
            
          </a>
        </div>
      </div>
    </body>
  );
}

export default App;