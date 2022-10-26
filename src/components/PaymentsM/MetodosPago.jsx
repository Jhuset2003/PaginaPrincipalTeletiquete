import React from 'react';
import StylesPM from "../../styles/componentsStyles/PaymentsMS/StylesPM.module.css"
import "../../styles/componentsStyles/PaymentsMS/cardPM.css"
import {MetodosPagoDisponibles} from "./MetodosDisponibles"

const MetodosPago = () => {
  return (
    <div className={StylesPM.MetodosPagoInfo}>
        <div className={StylesPM.MetodosPagoTitle}>
            <h2>Tus formas de pago favoritas</h2>
        </div>
        <div className={StylesPM.MetodosPagoImg}>
            <ul>
                {MetodosPagoDisponibles.map((M,index)=> {
                    return(
                        <li key={index}>
                            <div className={`${M.metodo} ${StylesPM.MetodoContainer}`}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}
export default MetodosPago
