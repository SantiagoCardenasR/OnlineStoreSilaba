import React from 'react'
import "./Educacion.css"
import { Link } from "react-router-dom";
import educa from "../assets/img/Educa.jpg"

const Educacion = () => {
    return (
        <div className="educacion">
            <section id="introEducacion" class="clearfix">
                <div class="container" data-aos="fade-up">
                    <div class="intro-img" data-aos="zoom-out" data-aos-delay="200"></div>
                    <div class="intro-info" data-aos="zoom-in" data-aos-delay="100">
                      <h2>Sílaba en la educación
                      </h2>
                      <div>
                        <Link to="/donation" class="btn-get-started scrollto">Donación</Link>
                      </div>
                    </div>
                </div>
            </section>

            <main id="main">
                <section id="about">
                    <div class="row about-extra"></div>
                        <div class="container" data-aos="fade-up">
                            <div class="row about-extra">
                                <div class="col-lg-6" data-aos="fade-right">
                                  <img src={educa} class="img-fluid" alt="" />
                                </div>

                                <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-right">
                                    <h4>Educación</h4>
                                    <p>
                                        Creamos encuentros de formación y reflexión con agentes educadores, alrededor de la construcción de escenarios para el acontecimiento literario 
                                        y la sensibilización ambiental en la enseñanza.
                                    </p>
                                    <p>
                                        Trazamos una estela de textos ensayísticos, libros ilustrados, trozos de relatos, entre otros, bajo los cuales, 
                                        divisaremos las herramientas para suscitar en la enseñanza fenómenos como la ética, la inmersión en la cultura escrita, el hábito lector, 
                                        el asombro y el juego, usando como transversalidad el cuidado del planeta, lo cual, nos llevará a una comprensión de las problemáticas en el 
                                        día a día de la escuela, más profunda y crítica.                       
                                    </p>
                                </div>
                            </div>
                        </div>
                </section>
            </main>
        </div>
    )
}

export default Educacion
