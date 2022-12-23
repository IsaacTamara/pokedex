import React from 'react'
import { useDispatch } from 'react-redux'
import { setNameTrainerGobal } from '../store/slices/nameTrainer.slice'
import "./styles/Header.css"

const Header = () => {

  const dispatch = useDispatch()

  const handleClickLogout = () => {
    dispatch(setNameTrainerGobal(""))
  }

  return (
    <header className='header'>
      <img className='header__img' src="/images/pokedex.png" alt="" />
      <div className='header__black'></div>
      <div className='header__circle'>
        <div className='header__circle-inte'>
          <i onClick={handleClickLogout} className='header__logout bx bx-log-out'></i>
        </div>
      </div>
    </header>
  )
}

export default Header