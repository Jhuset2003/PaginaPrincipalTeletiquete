import React from 'react';
import BtnStlyesFuncionales from "../../styles/componentsStyles/ButtonsFuncionales/BtnFuncionales.module.css"

export const BtnCrearCuenta = () => {
  return (
    <div className={`${BtnStlyesFuncionales.BtnCrearCuenta} ${BtnStlyesFuncionales.BtnContainer}`}>
        <span>Registrate</span>
    </div>
  )
}
