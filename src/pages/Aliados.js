import React from 'react'
import AliadosS from "../styles/componentsStyles/PagesStyles/Aliados.module.css"
import { Helmet } from 'react-helmet-async'
import Footer from '../components/Footer/Footer'
import AliDemoImg from "../resources/Logs/Empresas/Autoboy.png"


export const Aliados = () => {
  return (
    <>
        <Helmet>
        <title>Aliados</title>
        </Helmet>
        <div className={AliadosS.AliadosContainer}>
            <section className={AliadosS.AliadosContent}>
                <div className={AliadosS.CardContainer}>
                    <div className={AliadosS.CardAliados}>
                        <div className={AliadosS.LogAliados}>
                          <img src={AliDemoImg} alt="" />
                        </div>
                        <div className={AliadosS.LettersCardAliados}>
                            <h3>Autoboy</h3>
                            <hr/>
                            <div className={AliadosS.ButtonsAliContainer}>
                            <button>Btn</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer/>
    </>
  )
}
