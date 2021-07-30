import React from 'react'
import { Link } from "react-router-dom";
import "./Mujer.css"
import unomujer from "../assets/img/unomujer1.jpg"
import dosmujer from "../assets/img/dosmujer.jpeg"

const Mujer = () => {
    return (
        <div className="mujer">
            <section id="introMujer" class="clearfix">
                <div class="container" data-aos="fade-up">
                    <div class="intro-img" data-aos="zoom-out" data-aos-delay="200"></div>
                        <div class="intro-info" data-aos="zoom-in" data-aos-delay="100">
                            <h2>Mujer renaciente </h2>
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
                                            <img class="d-block w-100" src={unomujer} alt="First slide" />
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src={dosmujer} alt="Second slide" />
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
                                <p>
                                    Sílaba interviene en centros comunitarios, fundaciones, institutos, y demás espacios, donde la mujer se encuentre reconstruyéndose de experiencias de maltrato, 
                                    exclusión, abuso, prostitución, indigencia, consumo de drogas y pobreza.
                                </p>
                                
                                <p>
                                    Los libros, los ejercicios de escritura, los talleres ecológicos, son ventanas para mirar nuevos horizontes, nuevas rutas de crecimiento interior, intelectual y 
                                    espiritual. En cada encuentro, las mujeres tomarán herramientas de los libros y la naturaleza, para poder expresar sus resquebrajaduras, sus heridas, sus dolorosas 
                                    huellas, visibilizando así, memorias y voces que construirán una sociedad más justa.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Mujer
