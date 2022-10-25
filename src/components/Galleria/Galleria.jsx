import {React,useEffect,useState} from 'react'
import { InfoGalleria } from './InfoGalleria'
import GalleriaStyles from "../../styles/componentsStyles/Galleria/Galleria.module.css"
import { BsArrowRight } from 'react-icons/bs';


export const Galleria = () => {
  const [first,setFirt] = useState([]);
  const [All,setAll] = useState([]);

  function guardaTodo(Data) {
    setAll(Data)
  }

  useEffect (()=> {
    function takeOne() {
      var information = []
        InfoGalleria.map((info,index)=> {
          
          if (index === 0) {
            setFirt(info)
          }
          else {
            information.push(info)
            guardaTodo(information)
          }

        })
    
    }
    takeOne()
   },[first])
  

  return (
    <div className={GalleriaStyles.GalleriaContainer}>
      <div className={GalleriaStyles.imgsConatiner}>
        <div className={GalleriaStyles.imgs}>
          <div className={GalleriaStyles.firstImageContainer}>
            <div className={GalleriaStyles.firstImage}>
            <img src={first.imgUrl} alt={first.ciudad} />
              <div className={GalleriaStyles.infoImg}>
               <div className={GalleriaStyles.backBtnImg}/>
                <div className={GalleriaStyles.infoImageContainer}>
                  <p>{first.ciudad}</p>
                  <button>ir <BsArrowRight/></button>
                </div>
              </div>
            </div>
          </div>

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
        </div>
      </div>
     
    </div>
  )
}
