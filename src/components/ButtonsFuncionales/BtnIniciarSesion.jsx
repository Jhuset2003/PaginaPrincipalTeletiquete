import React from 'react'
import BtnStlyesFuncionales from "../../styles/componentsStyles/ButtonsFuncionales/BtnFuncionales.module.css"

export const BtnIniciarSesion = () => {
  return (
    <div className={`${BtnStlyesFuncionales.BtnIniciarSesion} ${BtnStlyesFuncionales.BtnContainer}`}>
        <span>Iniciar Sesion</span>
    </div>
  )
}
