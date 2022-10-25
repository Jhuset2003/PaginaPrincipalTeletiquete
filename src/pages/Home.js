import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CardAliados } from '../components/CardsAliados/CardAliados'
import { Comentarios } from '../components/Comentarios/Comentarios'
import { Galleria } from '../components/Galleria/Galleria'
import { MetodosPago } from '../components/PaymentsM/MetodosPago'
import HomeStyles from "../styles/componentsStyles/PagesStyles/Home.module.css"

import ilustracioSeguridad from "../resources/Varios/ilustracionSeguridad.png"

export const Home = () => {
  return (
    <div className={HomeStyles.HomeContainer}>
      <Helmet>
        <title>Teletiquete</title>
      </Helmet>
        <section className={HomeStyles.SecSeacrh}>
          <div className={HomeStyles.part1}>
            <div className={HomeStyles.ImgBack}/>
            <div className={HomeStyles.ImgBackSecond}/>
            <div className={HomeStyles.ContentInfo}>
              <div className={HomeStyles.PositionAInfo}>
                <div className={HomeStyles.InfoContainer}>
                  <div className={HomeStyles.lettersContainer}>
                    <h1>
                      Tiquetes de bus al mejor precio para tu próximo viaje
                    </h1>
                    <span>
                      Busca, compara y compra tu próximo Teletiquete en bus fácilmente
                    </span>
                  </div>
                  <div>
                    Hola
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={HomeStyles.part2}>
            <div className={HomeStyles.FormasDePago}>
              <MetodosPago/>
            </div>
          </div>
        </section>

        <section className={HomeStyles.SecAliados}>
          <div className={HomeStyles.SecAliadosInfoContainer}>
            <div className={HomeStyles.SecAliadosInfo}>
              <div className={HomeStyles.SecAliadosLetters}>
                <h2>Nos hemos aliado a las empresas de buses más conocidas de Colombia </h2>
                <span>¿Que esperar para viajar con nosotros?</span>
              </div>
              <div className={HomeStyles.SecAliadosCompanies}>
                  <CardAliados/>
              </div>
              <div className={HomeStyles.SecAliadosButtonContainer}>
                <button className={HomeStyles.SecAliadosBtn}>
                    Viajar
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className={HomeStyles.SecComentarios}>
          <div className={HomeStyles.SecComentariosContainer}>
              <div className={HomeStyles.SecComentariosTitle}>
                  <h2>Que opinan de Teletiquete</h2>
              </div>
              <div className={HomeStyles.SecComentariosInfo}>
                  <Comentarios/>
              </div>
              <hr/>
          </div>
        </section>

        <section className={HomeStyles.SecDestinosMasVistados}>
          <div className={HomeStyles.SecDestinosMasVistadosContainer}>
              <div className={HomeStyles.SecDestinosMasVistadosTitle}>
                <h2>Destinos mas visitados</h2>
              </div>
              <div className={HomeStyles.GalleryContainer}>
                <Galleria/>
              </div>
            </div>
        </section>

        <section className={HomeStyles.SecInfoSeguridad}>
          <div className={HomeStyles.SecInfoSeguridadContainer}>
              <div className={HomeStyles.BackSecInfoSeguridadContainer}/>
              <div className={HomeStyles.InfoSeguridad}>
                <div className={HomeStyles.IlustracionSeguridadContainer}>
                  <img src={ilustracioSeguridad} alt='' />
                </div>
                <div className={HomeStyles.TextSeguridad}>
                  <h3>Nuestra seguridad</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus nulla ut et augue eleifend habitant.</p>
                </div>
              </div>
          </div>
        </section>

    </div>
  )
}
