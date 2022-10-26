import React from 'react'
import { InfoAliados } from './InfoAliados'
import CardAliadosStyles from '../../styles/componentsStyles/CardAliados/CardAliados.module.css'
import "../../styles/componentsStyles/CardAliados/CardAliado.css"

const CardAliados = () => {
    return(
        <>
            {InfoAliados.map((Aliados, index)=>{
                return(
                    <div className={`${CardAliadosStyles.CardAliadosContainer} ${Aliados.empresa}`} key={index} />
                )
            })}
        </>
    )
}
export default CardAliados