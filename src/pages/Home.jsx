import React from 'react'
import FormHome from '../components/FormHome'
import "./styles/Home.css"

const Home = () => {
  return (
    <main className='home'>
      <img className='home__img' src="/images/pokedex.png" alt="img pokedex" />
      <h2 className='home__subtitle'>Hello trainer!</h2>
      <p className='home__text'>Give me your name to start</p>
      <FormHome />      
    </main>
  )
}

export default Home