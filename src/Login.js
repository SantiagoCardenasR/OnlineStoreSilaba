import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';
import { reference } from './firebase';
import { useStateValue } from './StateProvider';

function Login() {
    const [{ user }, dispatch] = useStateValue();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault();

        reference.child("users").on("value", snap => {
            snap.forEach(element => {
                if (email === element.val().email) {
                    dispatch({
                        type: "ADD_USER_DATA",
                        userData: {
                            user_name: element.val().name,
                            user_email: element.val().email,
                            user_id: element.val().id,
                            user_rol: element.val().role,
                        }
                    });
                    sessionStorage.setItem('User', user);
                    sessionStorage.setItem("User_name", element.val().name);
                    sessionStorage.setItem("User_email", element.val().email);
                    sessionStorage.setItem("User_id", element.val().id);
                    sessionStorage.setItem("User_role", element.val().role);
                }
            });
        });

        reference.child('shopping_carts/SHPNCRT_' + sessionStorage.getItem('User_id') + '/products/').on("value", snap => {
            snap.forEach(element => {
                console.log('ENTERS')
                dispatch({
                    type: 'ADD_TO_CART',
                    item: element.val()
                });
            })
        });

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if (sessionStorage.getItem('User_role') === "Admin") {
                    history.push('/admin')
                } else {
                    history.push('/');
                }
            })
            .catch(e => alert(e.message));
    }

    return (
        <div className="login">
            <Link to="/Tienda">
                <img className="login__logo" src={require("./images/logo.jpg")} alt="logo" />
            </Link>
            <div className="login__container">
                <h1>Iniciar Sesión</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"></input>
                    <h5>Contraseña</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"></input>
                    <button onClick={login} type="submit" className="login__signInButton">Iniciar Sesión</button>
                </form>
                <p>Al iniciar sesión aceptas los terminos y condiciones de uso y venta, de coporación Sílaba.</p>
                <Link to="/register">
                    <button className="login__registerButton">Crea tu cuenta Sílaba</button>
                </Link>
            </div>
        </div>
    )
}

export default Login
