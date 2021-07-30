import React from 'react'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import "./SeParteDelCambio.css"

const SeParteDelCambio = () => {
    return (
        <div className="seParteDelCmabio">
            <section id="services" class="section-bg" style={{marginTop: "25px"}}>
                <div class="container" data-aos="fade-up">
                    <header class="section-header">
                      <h3>Formatos de inscripción Sílaba</h3>
                      <p>Mira nuestros Formatos de afiliación que ofrecemos</p>
                    </header>
                    <div class="row justify-content-center">
                        <div class="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="100">
                          <div class="box">
                              <div class="icon" style={{marginLeft: "30px"}}><EmojiPeopleIcon style={{color: "#1f83e7", fontSize: "50px"}} /></div>
                            <h4 class="title"><a href="https://docs.google.com/forms/d/e/1FAIpQLSc6NMJIWb9JaAABsOGJGj8awVNSvzO-x8BXTHlQSmhl_r0nHA/viewform" rel="noopener noreferrer" target="_blank">Fromato de Benefactor</a></h4>
                          </div>
                        </div>
                        <div class="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="200">
                          <div class="box">
                              <div class="icon" style={{marginLeft: "30px"}}><LocalHospitalIcon style={{color: "#1f83e7", fontSize: "50px"}} /></div>
                            <h4 class="title"><a href="https://docs.google.com/forms/d/e/1FAIpQLSenqgVZrFsMOqTxR4Yy-ID0WIEckYt8lWZctEymJLZ_JI2RHQ/viewform" rel="noopener noreferrer" target="_blank">Fromato de Voluntario</a></h4>
                          </div>
                        </div>
                        <div class="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="100">
                          <div class="box">
                              <div class="icon" style={{marginLeft: "30px"}}><ChromeReaderModeIcon style={{color: "#1f83e7", fontSize: "50px"}} /></div>
                            <h4 class="title"><a href="./T&C/TÉRMINOS Y CONDICIONES POLÍTICA DE TRATAMIENTO.pdf" rel="noopener noreferrer" target="_blank">Términos y condiciones</a></h4>
                          </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SeParteDelCambio
