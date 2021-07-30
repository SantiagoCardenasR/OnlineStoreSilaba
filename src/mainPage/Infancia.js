import React from 'react'
import "./Infancia.css"
import { Link } from "react-router-dom";
import nio from "../assets/img/ni.o.jpg"
import plana from "../assets/img/plana.png"
import nios4 from "../assets/img/ni.os4.jpg"
import nios2 from "../assets/img/ni.os2.jpg"

const Infancia = () => {
    return (
        <div className="infancia">
            <section id="introInfancia" class="clearfix">
                <div class="container" data-aos="fade-up">
                    <div class="intro-img" data-aos="zoom-out" data-aos-delay="200"></div>
                    <div class="intro-info" data-aos="zoom-in" data-aos-delay="100">
                      <h2 style={{color: "white"}}>Infancia y juventud</h2>
                    <div style={{width: "10%",
                                backgroundColor: "rgba(255,255,255,0.7)",
                                borderRadius: "25px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center"}}>
                        <Link to="/donation" class="btn-get-started scrollto">Donación</Link>
                    </div>
                    </div>
                </div>
            </section>

            <main id="main">
                <section id="about">
                    <header class="section-header">
                        <p>
                            Creamos espacios de igualdad y dignidad para la infancia y la adolescencia. Son escenarios de libertad que visibilizan las condiciones, 
                            entornos, derechos, imaginarios y problemáticas de los niños y niñas. Sílaba promueve el autorreconocimiento, el cuidado de si, el valor de las palabras 
                            y la ética de la compasión.
                        </p>

                    </header>
                    <div class="container" data-aos="fade-up">
                        <div class="row about-extra">
                            <div class="col-lg-6" data-aos="fade-right">
                                <img src={nio} class="img-fluid" alt="" />
                            </div>
                            <div class="col-lg-6 pt-5 pt-lg-0" data-aos="fade-left">
                                <h4>Sensibilización con niños y niñas en hospitales</h4>
                                <p>
                                    Creamos espacios desde la literatura y el acercamiento sensible a la naturaleza, para la  transformación del tiempo y el espacio clínico.
                                </p>
                            </div>
                        </div>

                        <div class="row about-extra">
                            <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
                              <img src={plana} class="img-fluid" alt="" />
                            </div>
                            <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-right">
                              <h4>Niños y niñas en salud mental</h4>
                                <p>
                                  La sensibilización de la naturaleza, los libros ilustrados, su lectura en círculos, la poesía y 
                                  los talleres de pintura, permiten resinificar la enfermedad, la soledad, el aislamiento y la recuperación. 
                                  Con Sílaba, los niños y niñas encuentran  elementos alegóricos que los reafirman y, poco a poco, recobran la confianza en sí mismos y en el mundo.            
                                </p>
                            </div>
                        </div>

                        <div class="row about-extra">
                            <div class="col-lg-6" data-aos="fade-right">
                              <img src={nios4} class="img-fluid" alt="" />
                            </div>
                            <div class="col-lg-6 pt-5 pt-lg-0" data-aos="fade-left">
                              <h4>Igualdad de oportunidades con niños y niñas</h4>
                                <p>
                                    Sílaba llega a los barrios más deprimidos, a los márgenes de las grandes ciudades, llevando literatura, libros ilustrados y 
                                    talleres de ecología, permitiendo así, que niños y niñas tengan acceso, no solo a la cultura escrita, sino también al asombro, 
                                    la imaginación, la técnica, la estética, y la reconstrucción de entornos libres de violencia.              
                                </p>
                            </div>
                        </div>
          
                        <div class="row about-extra">
                            <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
                              <img src={nios2} class="img-fluid" alt="" />
                            </div>

                            <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-right">
                              <h4>Niños y niñas en protección</h4>
                                <p>
                                    Son hogares en los cuales los niños y niñas se encuentran recuperándose de experiencias de abuso, explotación sexual, indigencia y consumo de drogas. 
                                    Sílaba incide en esta población con libros ilustrados, cuidadosamente escogidos, que permiten una profunda reconstrucción interior, una catarsis desde la creatividad, 
                                    el encuentro con la naturaleza y la escritura. La memoria, la infancia, el trauma, el dolor, el sentimiento de extravío, son algunos de los ejes en los que se erige poderosamente cada sesión.
                                </p>              
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Infancia
