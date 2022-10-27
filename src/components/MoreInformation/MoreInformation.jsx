import React,{memo} from 'react'
import { InfoMore } from './InfoMore'
import MoreInfoStyle from "../../styles/componentsStyles/MoreInformationS/MoreInformationS.module.css"

const MoreInformation = () => {
  return (
    <>
        {InfoMore.map((info,index)=>{
            return(
                <div key={index}  className={`${MoreInfoStyle.MoreInfo} ${index % 2 ? MoreInfoStyle.MoreInfo2 : "" }`} >
                    <div className={MoreInfoStyle.imgContainer }>
                        <img src={info.imagen} alt="" />
                    </div>
                    <div className={MoreInfoStyle.titleContainer}>
                        <h2>{info.titulo}</h2>
                        <p>{info.texto}</p>
                    </div>
                </div>
            )
        })}
    </>
  )
}

export default memo(MoreInformation);