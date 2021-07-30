import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';
import './Register.css'
import { useStateValue } from './StateProvider';
import {reference} from './firebase';
import logo from './images/logo2.png';

function Register() 
{
    const [{user},dispatch] = useStateValue();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [id, setId] = useState('');

    const register = event =>{
        event.preventDefault();
        dispatch({
            type: "ADD_USER_DATA",
            userData: {
                user_name: name,
                user_email: email,
                user_id: id
            }
        });

        console.log(id);
        console.log(name);
        console.log(email);

        var updates = {};
            var userData = {
                id: id,
                name: name,
                email: email,
            };
            updates['users/USR_'+id] =  userData;
           reference.update(updates);

        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            //Create user
            history.push('/login');
        })
        .catch(e => alert(e.message));

    }

    return (
        <div className="register">
            <Link to="/">
                <img className="register__logo" src={logo} alt="logo"/>
            </Link>
            <div className="register__container">
                <h1>Crear Cuenta</h1>
                <div className="register__info">
                    <form>
                        <h5 className="register__infoLabel">Tu nombre</h5>
                        <input value={name} onChange={event => setName(event.target.value)} type="text"></input>
                        <h5 className="register__infoLabel">Tu identificación</h5>
                        <input value={id} onChange={event => setId(event.target.value)} type="number"></input>
                        <h5 className="register__infoLabel">E-mail</h5>
                        <input value={email} onChange={event => setEmail(event.target.value)} type="email"></input>
                        <h5 className="register__infoLabel">Contraseña</h5>
                        <input value={password} onChange={event => setPassword(event.target.value)} type="password"></input>
                        <input type="hidden" value={id}></input>
                        <button onClick={register} type="submit" className="register__Button">Crear cuenta</button>
                    </form>
                    <p>Al crear una cuenta aceptas los terminos y condiciones de uso y venta, de coporación Sílaba.</p>
                </div>

                <div className="register__alreadyAccount">
                <p>¿Ya tienes una cuenta?</p>
                <Link className="register__links" to="/Login">
                    <p className="register__loginLink">Inicia Sesión</p>
                </Link>
                </div>
            </div>

            <div className="register__divider">
                <p>Condiciones de uso</p>
                <p>Nota de privacidad</p>
                <p>Ayuda</p>
            </div>
        </div>
    )
}

export default Register
