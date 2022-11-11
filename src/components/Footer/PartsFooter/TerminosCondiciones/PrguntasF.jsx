import {React,useState} from 'react'
import { InfoFooter } from '../../InfosFooter/InfoFooter'
import PartsFooter from "../../../../styles/componentsStyles/FooterStyles/FooterParts.module.css"
import { AcordionPF } from './AcordionPF'

export const PrguntasF = () => {
    const [OpenBtn,setOpenBtn] = useState()

   
  return (
    <>
    <li>
        <span onClick={()=>{setOpenBtn(true)}}>Preguntas Frecuentes</span>
    </li>

    {OpenBtn && 
        <div className={PartsFooter.StateOpenBtnContainer}>
            <div className={PartsFooter.BackBtnContent}onClick={()=>{setOpenBtn(false)}}/>
            <div className={PartsFooter.StateOpenBtnContent}>
              {InfoFooter.map((info,index)=>{
                return(
                  <div className={PartsFooter.StateOpenBtn}>
                    <AcordionPF key={index} info={info} index={index}/>
                  </div>
                )
              })}
            </div>
        </div>
    }
    </>
  )
}
