import React from 'react'
import FooterS from "../../styles/componentsStyles/FooterStyles/FooterS.module.css"
import logTeletiquete from "../../resources/Logs/Teletiquete/log_teletiqueteSinFondo.png"

import { BiCopyright } from 'react-icons/bi';

export const Footer = () => {
  return (
    <div className={FooterS.InfoFooterContainer}>
        <div className={FooterS.InfoFooterPartTop}>
            <div>
                <h3>Informacion</h3>
                <ul>
                  <li>Contrato</li>
                  <li>Tarifa Online</li>
                  <li>Recomendaciones</li>
                  <li>Ilustraciones Pixaby</li>
                </ul>
            </div>
            <div>
              <h3>Desarrolladores</h3>
              <ul>
                <li><img src={logTeletiquete} alt="Teletiquete" /></li>
                <li><img src="https://avatars.githubusercontent.com/u/97614491?v=4" alt="Aj dev" /></li>
              </ul>

            </div>
            <div>
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
    </div>
  )
}
