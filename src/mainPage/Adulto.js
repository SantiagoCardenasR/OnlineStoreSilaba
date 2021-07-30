import React from 'react'
import "./Adulto.css"
import { Link } from "react-router-dom";
import abue2 from "../assets/img/abue2.0.jpg"
import abue from "../assets/img/abue.jpg"

const Adulto = () => {
    return (
        <div className="adulto">
            <section id="introAdulto" class="clearfix">
                <div class="container" data-aos="fade-up">
                    <div class="intro-img" data-aos="zoom-out" data-aos-delay="200"></div>
                        <div class="intro-info" data-aos="zoom-in" data-aos-delay="100">
                          <h2>Adulto mayor</h2>
                          <div>
                            <Link tp="/donation" class="btn-get-started scrollto">Donación</Link>
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
                                          <img class="d-block w-100" src={abue} alt="First slide" />
                                        </div>
                                        <div class="carousel-item">
                                          <img class="d-block w-100" src={abue2} alt="Second slide" />
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
                              <h4>Las palabras de los abuelos y abuelas  </h4>
                              <p>
                                  El abandono, la enfermedad, el alzheimer y el rechazo, son resignificados, reflexionados y, 
                                  desde el acompañamiento de los libros como vehículos que reconstruyen memorias y sentimientos, 
                                  junto a la mediación con la naturaleza, los abuelos y abuelas, encuentran un lugar donde sus palabras vuelven a ser importantes.
                              </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Adulto
