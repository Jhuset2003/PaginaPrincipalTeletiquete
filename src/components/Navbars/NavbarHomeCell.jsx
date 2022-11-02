import {React,useState,memo} from 'react'
import NavHomeStyles from "../../styles/componentsStyles/Navbars/NavbarHome.module.css"
import { ButtonsMenu } from '../ButtonsMenu/ButtonsMenu'
import logTeletiquete from "../../resources/Logs/Teletiquete/log_teletiqueteSinFondo.png"
import { InfoBtn } from './InfoBtn'
import { Link } from 'react-router-dom'

import { BtnCrearCuenta } from '../ButtonsFuncionales/BtnCrearCuenta';
import { BtnIniciarSesion } from '../ButtonsFuncionales/BtnIniciarSesion';
import { BtnCuentaEmpresarial } from '../ButtonsFuncionales/BtnCuentaEmpresarial';

//Iconos a usar
import { CgMenuGridO } from 'react-icons/cg';


const NavbarHomeCell = () => {
  const [menu,setMenu] = useState("")
  

  function openMenu() {
    setMenu(!menu)
  }

  return (
    <nav className={NavHomeStyles.NavBar}>
        <div className={`${NavHomeStyles.NavInfo} ${menu === true ? NavHomeStyles.NavInfoActive : ""}`}>
            <img src={logTeletiquete} alt="Logo Teletiquete" />

            <div className={NavHomeStyles.BtnMenuOpen}>
            <CgMenuGridO onClick={() => {openMenu()}}/>
            </div>
        </div>
        
        {menu && 
          <div className={NavHomeStyles.menuContainer}>
            {InfoBtn.map((info,index)=>{
            return(
              <ButtonsMenu infoBtn={info} key={index} />
            )
          })}
            <div className={NavHomeStyles.BtnFuncionalesContainer}>
                <div>
                  <BtnCrearCuenta/>
                </div>
                <div>
                  <BtnIniciarSesion/>
                </div>
                <div>
                  <BtnCuentaEmpresarial/>
                </div>
            </div>
          </div>
        } 
    </nav>
  )
}

export default memo(NavbarHomeCell)