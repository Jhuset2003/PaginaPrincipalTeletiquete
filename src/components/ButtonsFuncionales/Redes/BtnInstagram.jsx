import React from 'react'
import BtnRedesS from "../../../styles/componentsStyles/ButtonsFuncionales/BtnRedes.module.css"
import { AiFillInstagram } from 'react-icons/ai';

export const BtnInstagram = () => {
  return (
    <a href="https://www.instagram.com/teletiquete/" target="_blank" rel="noreferrer" >
        <button className={`${BtnRedesS.BtnRedesDefault} ${BtnRedesS.BtnInstagram}`}>
            <AiFillInstagram/>
        </button>
    </a>
  )
}