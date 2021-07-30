import React from 'react'
import { Link } from "react-router-dom";
import "./MainpageStyle.css"

const MainPageFooter = () => {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 footer-info">
                          <h3>Sílaba</h3>
                          <p>Haz parte de nuestro proyecto, ayúdanos a construir un mundo mejor.</p>
                        </div>
                        <div className="col-lg-2 col-md-6 footer-links">
                          <h4>Links</h4>
                          <ul>
                            <li><Link to="#">¿Qué es sílaba?</Link></li>
                            <li><Link to="#">Servicios</Link></li>
                            <li><Link to="#">Services</Link></li>
                            <li><Link to="#">Población Sílaba</Link></li>
                            <li><Link to="#">Suscribete</Link></li>
                          </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h4>Contacto</h4>
                            <p>
                                Bogotá colombia<br/>
                                <strong>Telefono:</strong> +57 3102162496 - 3214803336<br/>
                                <strong>Email:</strong> info@silba.co
                                gerencia@silaba.co
                                Soportetec@silaba.co<br/>
                            </p>
                            <div className="social-links">
                              {/* <a href="" className="facebook"><i className="fa fa-facebook"></i></a>
                              <a href="" className="instagram"><i className="fa fa-instagram"></i></a>
                              <a href="" className="linkedin"><i className="fa fa-linkedin"></i></a> */}
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 footer-newsletter">
                            <form action="" method="post">
                              <input type="email" name="email" /><input type="submit" value="Subscribete" />
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default MainPageFooter
