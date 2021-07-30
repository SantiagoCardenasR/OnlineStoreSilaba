import React from 'react'
import "./Asis.css"
import { Link } from "react-router-dom";

import equipou from "../assets/img/equipou.jpg"
import glo1 from "../assets/img/glo1.jpg"
import bli1 from "../assets/img/bli1.jpg"

const Asis = () => {
    return (
        <div className="asis">
            <section id="introAsiS" class="clearfix">
                <div class="container" data-aos="fade-up">

                    <div class="intro-img" data-aos="zoom-out" data-aos-delay="200"></div>

                    <div class="intro-info" data-aos="zoom-in" data-aos-delay="100">
                        <h2>¿Qué es sílaba?</h2>
                        <div>
                            <Link to="/donation" class="btn-get-started scrollto">Donación</Link>
                        </div>
                    </div>
                </div>
            </section>
            <main id="main">
                <section id="about">
                    <div class="container" data-aos="fade-up">
                        <div class="row about-extra">
                            <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
                                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img class="d-block w-100" src={equipou} alt="First slide" />
                                        </div>
                                        <div class="carousel-item">
                                          <img class="d-block w-100" src={glo1} alt="Second slide" />
                                        </div>
                                        <div class="carousel-item">
                                          <img class="d-block w-100" src={bli1} alt="Third slide" />
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                      <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                      <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>

                            <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-right">
                                <h4>Así es Sílaba</h4>
                                <p>
                                    Desde el acercamiento a la naturaleza,la tecnologia, la riqueza simbólica, alusiva y alegórica de la literatura, suscitamos acontecimientos para la otredad, la dignidad, la libertad, la palabra y la ética de la compasión. 
                                </p>
                                <i>
                                    «¡Y si algún día se llegara a comprobar que nosotros -los eternos penitentes del futuro- hemos vivido en el mejor de los tiempos posibles!»
                                    <p>Elias Canetti</p>
                                </i>
                                <i>
                                    «Yo soy tú cuando soy yo».
                                    <p>Paul Celan</p>
                                </i>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Asis
