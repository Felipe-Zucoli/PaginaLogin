import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='LoginPage'>
      <div className='LoginText'>
        <div className='LogoContainer'>
        <p className='Marca'>FZ</p>
        <p className='MarcaText'>Sempre junto com você</p>
        </div>
      <div className='Login'>
        <p>Insira seu E-mail: <input type="email" /></p>
        <p>Insira sua senha: <input type="password" /></p>
      </div>
      </div>
    </div>
  )
}

export default Login
