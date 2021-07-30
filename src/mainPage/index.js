import React from 'react'
import { Link } from "react-router-dom";
import "./MainpageStyle.css"
import equipou from "../assets/img/equipou.jpg"
import glo1 from "../assets/img/glo1.jpg"
import bli1 from "../assets/img/bli1.jpg"
import OneThree from "../assets/img/1.3.jpg"
import libroC from "../assets/img/libroC.jpg"
import equipo3 from "../assets/img/equipo3.jpg"
import CONFIPETROL from "../assets/img/CONFIPETROL LOGO.png"
import Glorialogo from "../assets/img/Glorialogo.jpg"
import Cangrejo from "../assets/img/Cangrejo.png"
import Abo from "../assets/img/Abo.png"
import clientLogo from "../assets/img/WhatsApp Image 2020-08-06 at 3.41.36 PM.jpeg"
import Suba from "../assets/img/Suba.JPG"
import Magazine from "../assets/img/Magazine.jpg"
import GreenYellow from "../assets/img/greenYellow.png"
import ChildCareIcon from '@material-ui/icons/ChildCare';
import FaceIcon from '@material-ui/icons/Face';
import AccessibleIcon from '@material-ui/icons/Accessible';
import DomainIcon from '@material-ui/icons/Domain';

const MainPageIndex = () => {
  const redirectToExtPage = (page) => {
    window.location.href = page;
  }
    return (
        <div className="mainPage">
            <section id="intro" className="clearfix">
                <div className="container" data-aos="fade-up">
                    <div className="intro-img" data-aos="zoom-out" data-aos-delay="200">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={equipou} alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={glo1} alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={bli1} alt="Third slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                              <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="intro-info index__botonesFrase" data-aos="zoom-in" data-aos-delay="100" style={{ display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",contain: "content"}}>
                    <h2>
                        <em>
                            Desde la riqueza simbólica de la palabra, del arte, desde la alegoría de los libros ilustrados, los cuentos, los trozos de narraciones y la poesía, siempre en contacto con la naturaleza. 
                            creamos escenarios reflexivos y de concertación para aportar a la construcción de un mundo más habitable.
                        </em>
                    </h2>
                    <div>
                      <Link to="/donation" className="btn-get-started scrollto">Donación</Link>
                    </div>
                </div>
            </section>
            <section id="about">
                <div className="container" data-aos="fade-up">
                    <header className="section-header">
                        <h3>¿Por qué sílaba?</h3>
                    </header>
                    <div className="row about-container">
                        <div className="col-lg-6 content order-lg-1 order-2">
                            <p>
                              Acudiendo a su origen etimológico, derivado del verbo comprender, abrazar e incluir, nuestra corporación toma como nombre, Sílaba, 
                              siendo una metáfora de las experiencias colectivas encaminadas a la necesidad social de volver a la unión, la empatía y la solidaridad. 
                            </p>
                        </div>
                        <div className="col-lg-6 background order-lg-2" data-aos="zoom-in">
                          <img src={OneThree} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="row about-extra">
                        <div className="col-lg-6" data-aos="fade-right">
                          <img src={libroC} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6 pt-5 pt-lg-0" data-aos="fade-left">
                          <h4>Queremos construir un mundo más habitable</h4>
                          <p>
                            «Ese liberador encantamiento de que el cuento dispone, no sólo pone en juego de forma mítica a la naturaleza, sino que alude a su complicidad con el ser humano liberado».
                            WALTER BENJAMIN.
                          </p>
                        </div>
                    </div>
                    <div className="row about-extra">
                        <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
                          <img src={equipo3} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-right">
                            <h4>Motivo</h4>
                            <p> Creamos espacios de igualdad y dignidad para la infancia y la adolescencia, adulto mayor y mujer, desde la magia y el asombro que el arte en todo su espectro ofrece.
                                Son escenarios de libertad que visibilizan las condiciones, entornos, derechos, imaginarios y problemáticas , Sílaba promueve el autorreconocimiento, el cuidado de si,
                                el valor de las palabras y la ética de la compasión. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="services" className="section-bg">
                <div className="container" data-aos="fade-up">
                    <header className="section-header">
                      <h3>Servicios en Sílaba</h3>
                      <p>Mira nuestros servicios que ofrecemos</p>
                    </header>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="100">
                          <div className="box">
                            <div className="icon" style={{marginLeft: "30px", display: "flex" , alignItems: "center", justifyContent: "center"}}><ChildCareIcon style={{color: "#ff689b", fontSize: "40px"}}/></div>
                            <h4 className="title"><Link to="/Infancia">Infancia y juventud</Link></h4>
                            <p className="description"></p>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="200">
                          <div className="box">
                            <div className="icon" style={{marginLeft: "30px", display: "flex" , alignItems: "center", justifyContent: "center"}} ><FaceIcon style={{color: "#e9bf06", fontSize: "40px"}} /></div>
                            <h4 className="title"><Link to="/Mujer">Mujer Renaciente</Link></h4>
                            <p className="description"></p>
                          </div>
                        </div>

                        <div className="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="100">
                          <div className="box">
                            <div className="icon" style={{marginLeft: "30px", display: "flex" , alignItems: "center", justifyContent: "center"}} ><AccessibleIcon style={{color: "#3fcdc7", fontSize: "40px"}} /></div>
                            <h4 className="title"><Link to="/Adulto">Adulto mayor</Link></h4>
                            <p className="description"></p>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="200">
                          <div className="box">
                            <div className="icon" style={{marginLeft: "30px", display: "flex" , alignItems: "center", justifyContent: "center"}} ><DomainIcon style={{color: "#41cf2e", fontSize: "40px"}} /></div>
                            <h4 className="title"><Link to="/empresa">Empresa</Link></h4>
                            <p className="description"></p>
                          </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="clients" className="section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <h3>Aliados</h3>
                    </div>
                    <div className="row no-gutters clients-wrap clearfix" data-aos="zoom-in" data-aos-delay="100">
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="client-logo" onClick={() => redirectToExtPage("https://confipetrol.com/")}  style={{cursor: "pointer"}}>
                              <img src={CONFIPETROL} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="client-logo" onClick={() => redirectToExtPage("https://www.gloria.com.co/")}  style={{cursor: "pointer"}}>
                              <img src={Glorialogo} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                          <div className="client-logo" onClick={() => redirectToExtPage("https://cangrejoeditores.com/")}  style={{cursor: "pointer"}}>
                            <img src={Cangrejo} className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                          <div className="client-logo" onClick={() => redirectToExtPage("https://www.avesbogota.org/")}  style={{cursor: "pointer"}}>
                            <img src={Abo} className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                          <div className="client-logo" onClick={() => redirectToExtPage("http://www.ambientebogota.gov.co/web/sda/comisiones-ambientales-locales-cal")}  style={{cursor: "pointer"}}>
                            <img src={clientLogo} className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                          <div className="client-logo" onClick={() => redirectToExtPage("http://www.ambientebogota.gov.co/web/sda/comisiones-ambientales-locales-cal")}  style={{cursor: "pointer"}}>
                            <img src={Suba} className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                          <div className="client-logo">
                            <img src={Magazine} className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                          <div className="client-logo" onClick={() => redirectToExtPage("https://www.greenyellow.co/?gclid=EAIaIQobChMIh7SdhKr48QIVYwaICR0aLwcxEAAYASAAEgIWn_D_BwE")} style={{cursor: "pointer"}}>
                            <img src={GreenYellow} className="img-fluid" alt="" />
                          </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact">
                <div class="container-fluid" data-aos="fade-up" style={{justifyContent: "center",alignItems: "center"}}>
                    <div class="section-header">
                      <h3>Contactanos</h3>
                    </div>
                    <div class="row"style={{display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",marginLeft: "50px"}}>
                        <div class="col-lg-6">
                            <div class="row">
                              <div class="col-md-5 info">
                                <i class="ion-ios-location-outline"></i>
                                <p>Bogotá,Colombia</p>
                              </div>
                              <div class="col-md-4 info">
                                <i class="ion-ios-email-outline"></i>
                                <p>info@Silaba.co</p>
                              </div>
                              <div class="col-md-3 info">
                                <i class="ion-ios-telephone-outline"></i>
                                <p>+57 3102162496</p>
                              </div>
                            </div>

                            <div class="form">
                                <form action="forms/contact.php" method="post" class="php-email-form">
                                    <div class="form-row">
                                      <div class="form-group col-lg-6">
                                        <input type="text" name="name" class="form-control" id="name" placeholder="Nombre y apellido" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div class="validate"></div>
                                      </div>
                                      <div class="form-group col-lg-6">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Correo" data-rule="email" data-msg="Por favor validar correo" />
                                        <div class="validar"></div>
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <input type="text" class="form-control" name="subject" id="subject" placeholder="Asunto" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                      <div class="validate"></div>
                                    </div>
                                    <div class="form-group">
                                      <textarea class="form-control" name="message" rows="5" data-rule="Descripción" data-msg="Please write something for us" placeholder="Mensaje"></textarea>
                                      <div class="validate"></div>
                                    </div>
                                    <div class="mb-3">
                                      <div class="loading">Cargando</div>
                                      <div class="error-message"></div>
                                      <div class="sent-message">Escríbenos,gracias</div>
                                    </div>
                                    <div class="text-center"><button type="submit" title="Send Message">Enviar mensaje</button></div>
                                    <div class="social-links">
                                      <a href="https://www.facebook.com/silaba.co" class="facebook"><i class="fa fa-facebook"></i></a>
                                      <a href="https://www.instagram.com/silaba.co/" class="instagram"><i class="fa fa-instagram"></i></a>
                                      <a href="https://www.linkedin.com/in/corporación-sílaba-466607208/" class="linkedin"><i class="fa fa-linkedin"></i></a>
                                    </div>
                                </form>
                            </div>
            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MainPageIndex
