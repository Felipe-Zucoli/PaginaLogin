import React from 'react'
import './Home.css'

const Header = () => {
  return(
    <div className='HeaderText'>
      <h1 className='WelcomeText'>Seja Bem vindo.</h1>
      <h2 className='SubText'>Aqui temos em foco você!</h2>
    </div>
  )
}

const Home = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

export default Home
