import React from 'react'
import { InfoComentarios } from './InfoComentarios'
import ComentariosStyle from "../../styles/componentsStyles/Comentarios/Comentarios.module.css"
export const Comentarios = () => {
  return (
    <>
        {InfoComentarios.map((Info,index)=>(
            <div className={ComentariosStyle.ComentContainer} key={index}>
                <div className={ComentariosStyle.burbuja}/>
                <h3>{Info.usuario}</h3>
                <p>{Info.comentario}</p>
            </div>
        ))}
    </>
  )
}
