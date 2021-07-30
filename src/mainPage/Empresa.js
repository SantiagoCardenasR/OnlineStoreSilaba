import React from 'react'
import "./Empresa.css"
import plana from "../assets/img/plana.png"
import equipo3 from "../assets/img/equipo3.jpg"
import confi from "../assets/img/confi.png"

const Empresa = () => {
    return (
        <div className="empresa">
            <section id="about">
                <div class="container" data-aos="fade-up">
                    <div class="row about-extra">
                        <div class="col-lg-6" data-aos="fade-right">
                            <img src={plana} class="img-fluid" alt="" />
                        </div>
                        <div class="col-lg-6 pt-5 pt-lg-0" data-aos="fade-left">
                          <h4>Funcionarios</h4>
                          <p>
                              Crear espacios dialógicos de intervención para la prevención del riesgo psicosocial, mediante talleres literarios y del cuidado del entorno, junto a ejercicios de crecimiento personal y bienestar colectivo, reafirmando lazos de solidaridad, ética y sentido de pertenencia, fortaleciendo redes de comunicación para un trato más sensible y humano, acorde a las necesidades de la organización.
                          </p>
                        </div>
                    </div>

                    <div class="row about-extra">
                      <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
                        <img src={equipo3} class="img-fluid" alt="" />
                      </div>

                      <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-right">
                        <h4>Líderes</h4>
                        <p> Encuentros de formación y reflexión alrededor de lo que significa ser líder, de manera que se logre articular elementos transformadores, 
                            como el valor y poder de la palabra, el reconocimiento del otro, la escucha y la ética, mejorando el ambiente laboral y las relaciones interpersonales.
                        </p>
                      </div>

                    </div>
                    <div class="row about-extra">
                        <div class="col-lg-6" data-aos="fade-right">
                          <img src={confi} class="img-fluid" alt="" />
                        </div>
                        <div class="col-lg-6 pt-5 pt-lg-0" data-aos="fade-left">
                          <h4>Población del área de influencia de los proyectos de la empresa</h4>
                          <p>
                            Ser agentes transformadores en la comunidad circundante, de manera que se adelanten procesos de humanización por medio de la naturaleza, la literatura, el reencuentro y cuidado del entorno.
                          </p>

                        </div>
                      </div>
                    </div>
            </section>
        </div>
    )
}

export default Empresa
