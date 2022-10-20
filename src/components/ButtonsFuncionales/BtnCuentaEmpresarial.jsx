import React from 'react'
import BtnStlyesFuncionales from "../../styles/componentsStyles/ButtonsFuncionales/BtnFuncionales.module.css"


export const BtnCuentaEmpresarial = () => {
  return (
    <div className={`${BtnStlyesFuncionales.BtnCuentaEmpresarial} ${BtnStlyesFuncionales.BtnContainer}`}>
        <span>Vincula tu empresa</span>
    </div>
  )
}
