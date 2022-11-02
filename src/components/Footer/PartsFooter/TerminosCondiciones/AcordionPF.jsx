import React,{useState} from 'react'
import PartsFooter from "../../../../styles/componentsStyles/FooterStyles/FooterParts.module.css"


export const AcordionPF = ({info , index}) => {
    const [InfoAcordion,setInfoAcordion] = useState()
    const [OpenAcordion,setOpenAcordion] = useState()
  return (
    <>  
        <h3 onClick={()=> {setInfoAcordion(info.content);setOpenAcordion(!OpenAcordion)}} 
        className={`${PartsFooter.title} ${OpenAcordion === true ? PartsFooter.titleActive : ""}`}
        ><span>{info.title}</span> <span>{index + 1}</span></h3>
        {OpenAcordion &&
            <div className={`${PartsFooter.content} ${OpenAcordion === true ? PartsFooter.contentActivate : ""}`}>
                <span>{InfoAcordion}</span>
            </div>
        }     
    </>
    
  )
}
