import React,{memo} from 'react'
import NavBarHomeDesktopStyles from "../../../styles/componentsStyles/Navbars/NavBarHomeDesktop.module.css"
import { InfoBtn } from '../InfoBtn'
import { BtnCrearCuenta } from '../../ButtonsFuncionales/BtnCrearCuenta';
import { BtnIniciarSesion } from '../../ButtonsFuncionales/BtnIniciarSesion';
import { BtnCuentaEmpresarial } from '../../ButtonsFuncionales/BtnCuentaEmpresarial';
import  ButtonsMenuNavDesktop  from './ButtonsMenuNavDesktop';
import { Link } from 'react-router-dom';

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
                <ButtonsMenuNavDesktop InfoBtn={InfoBtn}/>
            </div>
               
        </div>
       

        
    </nav>
 </div>
  )
}
export default memo(NavBarHomeDesktop)
