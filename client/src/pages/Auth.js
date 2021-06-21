import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import style from './Auth.module.css'
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {registration,login} from "../http/userAPI";

const Auth = () => {

    const location = useLocation()
    const isRegistration = location.pathname === REGISTRATION_ROUTE
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const click = async () =>{
        if(isRegistration){
            const response = await registration(email,password)
        } else{
            const response = await login(email,password)
            console.log(response)
        }
    }

    return (
        <Container className="d-flex justify-content-center align-items-center flex-column">
            {isRegistration ?
                <form>
                    <h2>Имя</h2>
                    <input placeholder='Введите имя'/>
                    <h2>Фамилия</h2>
                    <input placeholder='Введите фамилию'/>
                    <h2>Email</h2>
                    <input placeholder='Введите email' value={email} onChange={e => setEmail(e.target.value)}/>
                    <h2>Пароль</h2>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Введите пароль'/>
                </form>
                :
                <form>
                    <h2>Email</h2>
                    <input placeholder='Введите email' value={email} onChange={e => setEmail(e.target.value)}/>
                    <h2>Пароль</h2>
                    <input type='password' placeholder='Введите пароль' value={password} onChange={e => setPassword(e.target.value)}/>
                </form>
            }
            {isRegistration ?
                <Button variant={"outline-success"} onClick={click}>Зарегистрироваться</Button>
                :
                <Button variant={"outline-success"} onClick={click}>Войти</Button>
            }
            <div className={style.link}> {
                isRegistration ?
                    <div>Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink></div>
                      :

                    <div>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Создайте!</NavLink></div>
            }
            </div>
        </Container>

    );
};

export default Auth;