import {React,useState,useEffect} from 'react'
import AliadosS from "../styles/componentsStyles/PagesStyles/Aliados.module.css"
import { Helmet } from 'react-helmet-async'
import Footer from '../components/Footer/Footer'

import { AiOutlineWhatsApp } from 'react-icons/ai';
import { TbClipboardText } from 'react-icons/tb';
import { BiPurchaseTagAlt } from 'react-icons/bi';

import { InfoAliados } from './InfoPages/InfoAliados'


export const Aliados = () => {

  const [InfoCardAliados,setInfoCardAliados] = useState([])
  useEffect (()=>{
    function First() {
        InfoAliados.map((info,index)=>{
          return(
            index === 0 ? setInfoCardAliados(info) :""
          )
        })
    }
    First()
  },[])
  const scrollToTop = () =>{                      
   console.log(window.scrollY)
  }
  return (
    <>
        <Helmet>
        <title>Aliados</title>
        </Helmet>
        <div className={AliadosS.AliadosContainer} >
            <section className={AliadosS.AliadosContent}>
                <div className={AliadosS.CardContainer}>
                  
                 
                   
                        <div className={AliadosS.CardAliados}>
                          <div 
                          className={AliadosS.LogAliados} 
                           style={{background:`linear-gradient(rgba(0, 0, 0, 0.308),rgba(0,0,0,0.308)),url(${InfoCardAliados.urlImgBack}) center / cover no-repeat`}}
                          >
                            <img src={InfoCardAliados.ImgAli} alt={InfoCardAliados.nombreAli}/>
                          </div>
                          <div className={AliadosS.LettersCardAliados}>
                              <div className={AliadosS.DescripcionAliados}>
                                  <h2>Acerca de</h2>
                                  <span>{InfoCardAliados.descripcion}</span>
                              </div>
                              <div className={AliadosS.ButtonsAliContainer}>
                                <button><span>Comprar</span> <i><BiPurchaseTagAlt/></i></button>
                                <button><span>WhatsApp</span> <i><AiOutlineWhatsApp/></i></button>
                                <button> <span>Leer</span> <i><TbClipboardText/></i></button>
                              </div>
                          </div>
                      </div>
                    
                </div>
            </section>
            <section className={AliadosS.AllAliadosLogs}>
                <div className={AliadosS.AllAliadosLogsContainer}>
                    {InfoAliados.map((info,index)=>{
                      return(
                          <img width={500} src={info.ImgAli} cursor="pointer" alt={info.nombreAli} key={index} onClick={() => {setInfoCardAliados(info)}}  />
                      )
                    })}
                </div>
            </section>
        </div>
        <Footer/>
    </>
  )
}
