import {React} from 'react'
import NavBarHomeDesktopStyles from "../../../styles/componentsStyles/Navbars/NavBarHomeDesktop.module.css"

import { BtnCrearCuenta } from '../../ButtonsFuncionales/BtnCrearCuenta';
import { BtnIniciarSesion } from '../../ButtonsFuncionales/BtnIniciarSesion';
import { BtnCuentaEmpresarial } from '../../ButtonsFuncionales/BtnCuentaEmpresarial';
import { ButtonsMenuNavDesktop } from './ButtonsMenuNavDesktop';

export const NavBarHomeDesktop = () => {
    

  


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
                <ButtonsMenuNavDesktop/>
            </div>
               
        </div>
       

        
    </nav>
 </div>
  )
}
