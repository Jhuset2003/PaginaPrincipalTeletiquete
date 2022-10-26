import {React,useEffect,useState} from 'react'
import { InfoGalleria } from './InfoGalleria'
import GalleriaStyles from "../../../styles/componentsStyles/Galleria/Galleria.module.css"
import { BsArrowRight } from 'react-icons/bs';


export const OtherImgGalleria = () => {
  const [All,setAll] = useState([]);
  function guardaTodo(Data) {
    setAll(Data)
  }
  useEffect (()=> {
    function takeOne() {
      var information = []
        InfoGalleria.map((info,index)=> {
          
          if (index > 0) {
            information.push(info)
            guardaTodo(information)
          }

        })
    
    }
    takeOne()
   },[])

  return (
    <div className={GalleriaStyles.OtherImagesContainer}>
          {All.map((data,index)=>{
            return(
              <div className={GalleriaStyles.OtherImages} key={index}>
                <img src={data.imgUrl} alt={data.ciudad} />
                <div className={GalleriaStyles.infoImg}>
                  <div className={GalleriaStyles.backBtnImg}/>
                  <div className={GalleriaStyles.infoImageContainer}>
                    <p>{data.ciudad}</p>
                    <button>ir <BsArrowRight/></button>
                  </div>
                </div>
              </div>
            )
          })}
    </div>
  )
}
