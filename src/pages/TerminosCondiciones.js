import React from 'react'
import TCP from "../styles/componentsStyles/PagesStyles/TerminosYCondiciones.module.css"
import { useLocation } from "react-router-dom";
import { infoTerminosYcondiciones } from './InfoPages/FooterInfo';
import { infoPoliticaDePrivacidad } from './InfoPages/FooterInfo';
import Footer from '../components/Footer/Footer';


export const TerminosCondiciones = () => {

  let location = useLocation();

  return (
    <>
    <div className={TCP.TCPContainer}>
        {
        location.pathname === "/Teletiquete/TerminosYCondiciones" ?
        
          <div className={TCP.TCPContent}>
            <h1>Terminos Y Condiciones</h1>
            {infoTerminosYcondiciones.map((info,index)=>{
              return(
                <div key={index} className={TCP.containerInfo}>
                  {info.title ? <h2><br/>{info.title}<br/></h2> : ""}
                  {info.subtitle ? <h4><br/>{info.subtitle}<br/></h4> : ""}
                  {info.contentPrincipal ? <h3><br/>{info.contentPrincipal}<br/></h3> : ""}
                  {info.content ? <span><br/>{info.content}<br/></span> : ""}
                </div>
              )
            })}
          </div>
        : 

        location.pathname === "/Teletiquete/PoliticasPrivacidad" ?
            <div className={TCP.TCPContent}>
              <h1>Politica De Privacidad</h1>
              {infoPoliticaDePrivacidad.map((info,index)=>{
                return(
                  <div key={index} className={TCP.containerInfo}>
                    {info.title ? <h2><br/>{info.title}<br/></h2> : ""}
                    {info.subtitle ? <h4><br/>{info.subtitle}<br/></h4> : ""}
                    {info.contentPrincipal ? <h3><br/>{info.contentPrincipal}<br/></h3> : ""}
                    {info.content ? <span><br/>{info.content}<br/></span> : ""}
                  </div>
                )
              })}
            </div>
        :  
        ""
        }

    </div>
      <Footer/>
    </>
  )
}
