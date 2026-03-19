import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './assets/LOGO.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <body>
      
    </body>
      <div className="auth-container">
        <div className="auth-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>

        <div className="auth-card">
          <div className="auth-header">
              <img src={Logo} alt="" id='logoSilver'/>
            <h1>Bem-Vindo</h1>
            <p>Cadastre-se para continuar</p>
          </div>

          <div className="form-group">
            <label htmlFor="usuario">Usuário</label>
            <input 
              type="text" 
              id='usuario' 
              name='usuario' 
              placeholder='Crie nome de usuario' 
              required  />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="text" 
              id='email' 
              name='email' 
              placeholder='Digite seu email' 
              required  />
          </div>
          <div className="form-group">
            <label htmlFor="Telefone">Digite seu Telefone</label>
            <input 
              type="Telefone" 
              id='Telefone' 
              name='telefone' 
              placeholder='(00) 1234-5678' 
              required  />
          </div>

          <div className="form-group">
            <label htmlFor="senha">Crie uma Senha</label>
            <input 
              type="password" 
              id='senha' 
              name=' senha' 
              placeholder='*********' 
              required  />
          </div>

          <div className="form-group">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input 
              type="password" 
              id='confirmarSenha' 
              name='confirmarSenha' 
              placeholder='*********' 
              required  />
          </div>


          <button type='submit' className='submit-btn'>
            Cadastrar
          </button>

          <div className="auth-footer">
            <p>Já tem uma conta?</p>
            <button className='toggle-btn'>Faça login</button>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
