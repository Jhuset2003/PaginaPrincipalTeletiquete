import React from 'react'
import BtnRedesS from "../../../styles/componentsStyles/ButtonsFuncionales/BtnRedes.module.css"
import { FaFacebookF } from 'react-icons/fa';

export const BtnFacebook = () => {
  return (
    <a href="https://www.facebook.com/Teletiquetecom-591036921026889/" target="_blank" without rel="noreferrer">
        <button className={`${BtnRedesS.BtnRedesDefault} ${BtnRedesS.BtnFacebook}`}>
            <FaFacebookF/>
        </button>
    </a>
  )
}
