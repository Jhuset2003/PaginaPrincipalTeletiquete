import React from 'react'
import { InfoGalleria } from './InfoGalleria'


export const Galleria = () => {
  return (
    <>
        {InfoGalleria.map((Info,index)=>{
            return(
                <div key={index}>
                    <img src={Info.imgUrl} alt="" srcset="" key={index}/>   
                </div>
            )
        })}    
    </>
  )
}
