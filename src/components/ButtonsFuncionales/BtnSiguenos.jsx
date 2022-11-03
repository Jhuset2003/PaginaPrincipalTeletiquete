import {React,useState} from 'react'
import BtnStlyesFuncionales from "../../styles/componentsStyles/ButtonsFuncionales/BtnFuncionales.module.css"

import { BsPeopleFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { BtnFacebook } from './Redes/BtnFacebook';
import { BtnInstagram } from './Redes/BtnInstagram';
import { BtnYoutube } from './Redes/BtnYoutube';


export const BtnSiguenos = () => {
    const [OpenModalSiguenos,setOpenModalSiguenos] =useState()
  return (
    <>
      <div className={`${BtnStlyesFuncionales.BtnHover} ${OpenModalSiguenos ? BtnStlyesFuncionales.BtnHoverActivate: ""}`} onClick={()=>{setOpenModalSiguenos(!OpenModalSiguenos)}}>
        <div className={`${BtnStlyesFuncionales.BtnContainer} ${BtnStlyesFuncionales.BtnSiguenosContainer}`}>
          <span>Nuestras redes</span><i><BsPeopleFill/></i>
        </div>
      </div>
      {OpenModalSiguenos &&
        <div className={BtnStlyesFuncionales.ModalSiguenos}>
            <div className={BtnStlyesFuncionales.BackModalSiguenos} />
            <div className={BtnStlyesFuncionales.ModalSiguenosContent}>
                <div className={BtnStlyesFuncionales.LetterModalSiguenos}>
                    <p>
                      <span>Siguenos y enterate </span><br/>
                      <span>de los mejores destinos para visitar</span>
                    </p>  
                    <div className={BtnStlyesFuncionales.imgLogTeletiquete}/>      
                </div>
                <div className={BtnStlyesFuncionales.RedesModalSiguenos}>
                 <div className={BtnStlyesFuncionales.CloseBtn} onClick={()=>{setOpenModalSiguenos(!OpenModalSiguenos)}} ><AiOutlineClose/></div>
                 <div className={BtnStlyesFuncionales.RedesContainer}>
                    <BtnFacebook/>
                    <BtnInstagram/>
                    <BtnYoutube/>
                 </div>
                </div>
            </div>
        </div>
      }
    </>
  )
}
