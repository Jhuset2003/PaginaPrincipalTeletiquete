import {React,useState} from 'react'
import { InfoBtn } from './InfoBtn'
import { Link } from 'react-router-dom';
import NavBarHomeDesktopStyles from "../../styles/componentsStyles/Navbars/NavBarHomeDesktop.module.css"

import { BtnCrearCuenta } from '../ButtonsFuncionales/BtnCrearCuenta';
import { BtnIniciarSesion } from '../ButtonsFuncionales/BtnIniciarSesion';
import { BtnCuentaEmpresarial } from '../ButtonsFuncionales/BtnCuentaEmpresarial';

export const NavBarHomeDesktop = () => {
    const [OpenMenu,setOpenMenu] = useState()
    const [InfoOpenMenu,setInfoOpenMenu] = useState()

    function OpeningAndClose() {
            setOpenMenu(true)   
    }


  return (
    <div className={NavBarHomeDesktopStyles.NavBox}>
    <nav  className={NavBarHomeDesktopStyles.NavDesktopConatiner}>
        <div className={NavBarHomeDesktopStyles.BtnNavDesktopContainer}>
            <div className={NavBarHomeDesktopStyles.imgContainer}>
                <div className={NavBarHomeDesktopStyles.imgLogTeletiquete}/>
            </div>
            <div className={NavBarHomeDesktopStyles.BtnContainerDesktop}>
                <div>
                    <div>
                        <BtnCuentaEmpresarial/>
                    </div>
                    <div>
                        <BtnCrearCuenta/>
                    </div>
                    <div>
                        <BtnIniciarSesion/>      
                    </div>
                </div>
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
            </div>
               
        </div>
       

        
    </nav>
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
 </div>
  )
}
