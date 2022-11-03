import React from 'react'
import BtnRedesS from "../../../styles/componentsStyles/ButtonsFuncionales/BtnRedes.module.css"
import { RiYoutubeFill } from 'react-icons/ri';

export const BtnYoutube = () => {
  return (
    <a href="" target="_blank" rel="noreferrer" >
        <button className={`${BtnRedesS.BtnRedesDefault} ${BtnRedesS.BtnYoutube}`}>
            <RiYoutubeFill/>
        </button>
    </a>
  )
}