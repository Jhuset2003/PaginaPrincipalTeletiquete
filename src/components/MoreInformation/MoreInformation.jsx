import React,{memo} from 'react'

import MoreInfoStyle from "../../styles/componentsStyles/MoreInformationS/MoreInformationS.module.css"

const MoreInformation = ({info=[],index=[]}) => {
  return (
        <div className={`${MoreInfoStyle.MoreInfo} ${index % 2 ? MoreInfoStyle.MoreInfo2 : "" }`} >
            <div className={MoreInfoStyle.imgContainer }>
                <img src={info.imagen} alt="" />
            </div>
            <div className={MoreInfoStyle.titleContainer}>
                <h2>{info.titulo}</h2>
                <p>{info.texto}</p>
            </div>
        </div>
  )
}

export default memo(MoreInformation);