import {React,useState} from 'react'
import { InfoBtn } from '../InfoBtn'
import { Link } from 'react-router-dom';
import NavBarHomeDesktopStyles from "../../../styles/componentsStyles/Navbars/NavBarHomeDesktop.module.css"

export const ButtonsMenuNavDesktop = () => {
    const [OpenMenu,setOpenMenu] = useState()
    const [InfoOpenMenu,setInfoOpenMenu] = useState()

    function OpeningAndClose() {
        setOpenMenu(true)   
    }

  return (
    <>
    <div>
        {InfoBtn.map((info,index)=>{
            return(
                <div key={index}>
                        <button>
                            <span 
                            onPointerEnter={() => {OpeningAndClose();setInfoOpenMenu(info)}}
                            onPointerLeave={() => {setOpenMenu(false)}}
                            >{info.BtnName}</span>
                        </button>
                </div>
            )
        })}
    </div>
    {OpenMenu && 
            <div className={NavBarHomeDesktopStyles.MenuContainer}>
                <div className={NavBarHomeDesktopStyles.Menu}>
                    {InfoOpenMenu.BtnLink === "" ||  !InfoOpenMenu.BtnLink ? 
                    <div>
                        {InfoOpenMenu.BtnInfo}
                    </div> 
                    : 
                    <Link to={`/Teletiquete/${InfoOpenMenu.BtnLink}`}>
                        Hola
                    </Link>    
                    }
                </div>
            </div>
        }
    </>
  )
}
