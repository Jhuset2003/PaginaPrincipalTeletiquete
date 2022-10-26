import {React,useEffect,useState} from 'react'
import { InfoGalleria } from './InfoGalleria'
import GalleriaStyles from "../../../styles/componentsStyles/Galleria/Galleria.module.css"
import { BsArrowRight } from 'react-icons/bs';


export const PrincipaImg = () => {
    const [first,setFirt] = useState([]);

    useEffect (()=> {
        function takeOne() {
            InfoGalleria.map((info,index)=> {
              
              if (index === 0) {
                setFirt(info)
              }
            })
        
        }
        takeOne()
       },[first])

  return (
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
  )
}
