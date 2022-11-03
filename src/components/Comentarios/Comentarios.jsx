import React,{memo} from 'react'
import { InfoComentarios } from './InfoComentarios'
import ComentariosStyle from "../../styles/componentsStyles/Comentarios/Comentarios.module.css"

import { AiFillStar } from 'react-icons/ai';

const Comentarios = () => {
  let i
  return (
    <>
        {InfoComentarios.map((Info,index)=>(
            <div className={ComentariosStyle.ComentContainer} key={index}>
                <div className={ComentariosStyle.estrellas}><AiFillStar/> {Info.N_estrellas}</div>
                <h3>{Info.usuario}</h3>
                <p>{Info.comentario}</p>
                <span>{Info.ruta}</span>
            </div>
        ))}
    </>
  )
}

export default memo(Comentarios)
