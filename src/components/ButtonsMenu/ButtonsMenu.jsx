import {React} from 'react'
import { Link } from 'react-router-dom'
import BtnsMenuStyles from "../../styles/componentsStyles/ButtonsMenu/ButtonsMenu.module.css"

//iconos

export const ButtonsMenu = ({infoBtn = []}) => {
    
  return (
    <div className={BtnsMenuStyles.container}>
        <div className={BtnsMenuStyles.BtnContainer}>
            <Link to={`/Teletiquete/${infoBtn.BtnLink}`}>
            <button>
                <span>{infoBtn.BtnName}</span>
                <span >{infoBtn.icon}</span>
            </button>
            </Link>
        </div>       
    </div>
  )
}
