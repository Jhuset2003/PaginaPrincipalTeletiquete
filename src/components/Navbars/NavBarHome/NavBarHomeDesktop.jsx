import React,{memo} from 'react'
import NavBarHomeDesktopStyles from "../../../styles/componentsStyles/Navbars/NavBarHomeDesktop.module.css"
import { InfoBtn } from '../InfoBtn'
import { BtnCrearCuenta } from '../../ButtonsFuncionales/BtnCrearCuenta';
import { BtnIniciarSesion } from '../../ButtonsFuncionales/BtnIniciarSesion';
import { Link } from 'react-router-dom';
import { BtnSiguenos } from '../../ButtonsFuncionales/BtnSiguenos';

const NavBarHomeDesktop = () => {
    
  return (
    <div className={NavBarHomeDesktopStyles.NavBox}>
    <nav  className={NavBarHomeDesktopStyles.NavDesktopConatiner}>
        <div className={NavBarHomeDesktopStyles.BtnNavDesktopContainer}>
            <div className={NavBarHomeDesktopStyles.imgContainer}>
                <Link to={"/Teletiquete"} style={{cursor:'pointer'}}>
                <div className={NavBarHomeDesktopStyles.imgLogTeletiquete}/>
                </Link>
            </div>
            <div className={NavBarHomeDesktopStyles.BtnContainerDesktop}>
                <div className={NavBarHomeDesktopStyles.BtnContentDesktop}>
                    <div className={NavBarHomeDesktopStyles.BtnCrearCuentaContainer}>
                        <BtnCrearCuenta/>
                    </div>
                    <div className={NavBarHomeDesktopStyles.BtnIniciarSesionContainer}>
                        <BtnIniciarSesion/>      
                    </div>
                    <div className={NavBarHomeDesktopStyles.BtnSiguenosContainer}>
                        <BtnSiguenos/>
                    </div>
                </div>
                <ul>
                    {InfoBtn.map((info,index)=>{
                        return(
                            <li key={index}>
                                <Link to={`/Teletiquete/${info.BtnLink}`}>
                                    {info.icon}
                                    <span>{info.BtnName}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
               
        </div>
       

        
    </nav>
 </div>
  )
}
export default memo(NavBarHomeDesktop)
