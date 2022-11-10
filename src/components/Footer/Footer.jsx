import React,{memo} from 'react'
import FooterS from "../../styles/componentsStyles/FooterStyles/FooterS.module.css"
import logTeletiquete from "../../resources/Logs/Teletiquete/log_teletiqueteSinFondo.png"
import { Link } from 'react-router-dom';

import { BiCopyright } from 'react-icons/bi';
import { PrguntasF } from './PartsFooter/TerminosCondiciones/PrguntasF';


const Footer = () => {

  return (
    <footer className={FooterS.InfoFooterContainer}>
        <div className={FooterS.InfoFooterPartTop}>
            <div className={FooterS.InfoFooterPartTopContent}>
                <h3>Información</h3>
                <ul>
                  <li>
                    <Link to={"/Teletiquete/TerminosYCondiciones"}>
                      Terminos Y Condiciones
                    </Link>  
                  </li>
                  <li>
                    <Link to={"/Teletiquete/PoliticasPrivacidad"}>
                      Privacidad
                    </Link>
                  </li>
                  <PrguntasF/>
                </ul>
            </div>
            <div className={FooterS.InfoFooterPartTopContent} >
              <h3>Desarrolladores</h3>
              <ul>
                <li><img src={logTeletiquete} alt="Teletiquete" /></li>
                <li><img src="https://avatars.githubusercontent.com/u/97614491?v=4" alt="Aj dev" /></li>
              </ul>

            </div>
            <div className={FooterS.InfoFooterPartTopContent} >
              <h3>Nuestro entorno</h3>
              <ul>
                <li>¿Que es Teletiquete?</li>
              </ul>
            </div>
        </div>
        <hr/>
        <div className={FooterS.InfoFooterPartBot}>
          <BiCopyright/>
          <p>Derechos reservados para Teletiquete </p>
        </div>
    </footer>
  )
}
export default memo(Footer)
