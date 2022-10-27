import React,{memo} from 'react'
import NavBarHomeDesktopStyles from "../../../styles/componentsStyles/Navbars/NavBarHomeDesktop.module.css"
import { InfoBtn } from '../InfoBtn'
import { BtnCrearCuenta } from '../../ButtonsFuncionales/BtnCrearCuenta';
import { BtnIniciarSesion } from '../../ButtonsFuncionales/BtnIniciarSesion';
import { BtnCuentaEmpresarial } from '../../ButtonsFuncionales/BtnCuentaEmpresarial';
import  ButtonsMenuNavDesktop  from './ButtonsMenuNavDesktop';

const NavBarHomeDesktop = () => {
    
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
                <ButtonsMenuNavDesktop InfoBtn={InfoBtn}/>
            </div>
               
        </div>
       

        
    </nav>
 </div>
  )
}
export default memo(NavBarHomeDesktop)
