import {React,useState,memo} from 'react'
import { Link } from 'react-router-dom';
import NavBarHomeDesktopStyles from "../../../styles/componentsStyles/Navbars/NavBarHomeDesktop.module.css"

const ButtonsMenuNavDesktop = ({InfoBtn = {}}) => {
    const [OpenMenu,setOpenMenu] = useState(false)
    const [InfoOpenMenu,setInfoOpenMenu] = useState()

    function Open() {
        setOpenMenu(true) 
    }
    function Close() {
        setOpenMenu(false)   
    }


  return (
    <>
    <div>
        {InfoBtn.map((info,index)=>{
            return(
                <div key={index}>
                        <button>
                            <span 
                            onClick={() => {Open(true);setInfoOpenMenu(info)}}
                            className={`${NavBarHomeDesktopStyles.letterBtnDesktop} ${OpenMenu === true ? NavBarHomeDesktopStyles.letterBtnDesktopActive: ""}`}
                            >{info.BtnName}</span>
                        </button>
                </div>
            )
        })}
    </div>
    {OpenMenu && 
            <div className={NavBarHomeDesktopStyles.MenuContainer} onPointerLeave={()=>{Close()}}>
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

export default memo(ButtonsMenuNavDesktop)
