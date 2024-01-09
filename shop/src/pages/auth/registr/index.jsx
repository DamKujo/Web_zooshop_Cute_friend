import React from "react";
import "./registr.css";

const RegisterPage = () => {
    return(
        <div className="main">
            <div className="main_titles">
                <h1>Регистрация</h1>
                <h3>Введите данные для регистрации</h3>
            </div>
            <div className="main_form">
                <form action="">
                    <input placeholder="Имя" type="text"/>
                    <input placeholder="Фамилия" type="text" />
                    <input placeholder="Email" type="text" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
                    <input placeholder="Login"type="text"/>
                    <input placeholder="Password"type="password" required/>
                    <button type="button"><span className="cat-paw">Регистрация <img width={20} src="./../images/cat-paw.png"/></span></button>
                    <p>Так у вас уже есть аккаунт? <a href="">Авторизация</a></p>
                </form>
            </div>
            
        </div>
        // <>
        //     <div className="main_titles">
        //          <h1>Регистрация</h1>
        //          <h3>Введите данные для регистрации</h3>
        //     </div>
        //     <div className="main_form">
        //          <form action="">
        //              <input placeholder="Имя" type="text"/>
        //              <input placeholder="Фамилия" type="text" />
        //              <input placeholder="Email" type="text" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
        //              <input placeholder="Login"type="text"/>
        //              <input placeholder="Password"type="password" required/>
        //              <button type="button"><span className="cat-paw">Регистрация <img width={20} src="./../images/cat-paw.png"/></span></button>
        //              <p>Так у вас уже есть аккаунт? <a href="">Авторизация</a></p>
        //          </form>
        //     </div>

        // </>
    );
};

export default RegisterPage;