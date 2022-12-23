import React from "react";
import { useDispatch } from "react-redux";
import { setNameTrainerGobal } from "../store/slices/nameTrainer.slice";
import "./styles/FormHome.css"

const FormHome = () => {

  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    const nameTrainer = e.target.nameTrainer.value.trim()
    dispatch(setNameTrainerGobal(nameTrainer))
  }

  return (
    <form onSubmit={handleSubmit} className="home__form">
      <input required className="home__input" type="text" placeholder="Your name ..." id="nameTrainer" />
      <button className="home__btn">Begin</button>
    </form>
  );
};

export default FormHome;
