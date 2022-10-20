import {React,useState} from 'react'
import { Link } from 'react-router-dom'
import BtnsMenuStyles from "../../styles/componentsStyles/ButtonsMenu/ButtonsMenu.module.css"

//iconos
import { IoMdArrowDropdown } from 'react-icons/io';

export const ButtonsMenu = ({infoBtn = []}) => {
    const [BtnInfoSee,setBtnInfoSee] = useState();
    const [BtnInfo,setBtnInfo] = useState();

    function openInfo() {
        setBtnInfoSee(!BtnInfoSee)
    }


  return (
    <div className={BtnsMenuStyles.container}>
        <div className={BtnsMenuStyles.BtnContainer}>
            <button onClick={() => {openInfo(); setBtnInfo(infoBtn);}}>
                <span>{infoBtn.BtnName}</span>
                <span ><IoMdArrowDropdown className={`${BtnsMenuStyles.arrowBtnName} ${BtnInfoSee === true ? BtnsMenuStyles.arrowBtnNameActive : "" }`}/></span>
            </button>
        </div>
        {BtnInfoSee &&
        <div className={`${BtnsMenuStyles.information} ${BtnInfoSee === true ? BtnsMenuStyles.informationActivade : "" }`}>
            {BtnInfo.BtnLink === "" ||  !BtnInfo.BtnLink ? 
                <div>
                    {BtnInfo.BtnInfo}
                </div> 
                : 
                <Link to={`/Teletiquete/${BtnInfo.BtnLink}`}>
                    Hola
                </Link> }
        </div>  
           
        }
    </div>
  )
}
