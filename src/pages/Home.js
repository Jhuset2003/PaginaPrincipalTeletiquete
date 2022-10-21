import React from 'react'
import { Helmet } from 'react-helmet-async'
import { MetodosPago } from '../components/PaymentsM/MetodosPago'
import HomeStyles from "../styles/componentsStyles/PagesStyles/Home.module.css"

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

        <section>
          
        </section>
    </div>
  )
}
