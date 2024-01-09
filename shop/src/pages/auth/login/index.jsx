import React from "react";
import "./login.css";
import axios from "axios";

const LoginPage = () => {

    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = async (e) => {
        // e.preventDefault();
        // const userData = {
        //     login,
        //     password
        // }
        // const user = await axios.post('http://localhost:3000/login', userData);
        // console.log(user);
    }
    
    return(
        <div className="main">
            <div className="main_titles">
                <h1>Авторизация</h1>
                <h3>Чтобы продолжить работу на сайте, введите ваш логин и пароль</h3>
            </div>
            <div className="main_form">
                <form onSubmit={handleSubmit}>
                    <input placeholder="Login" type="text" onChange={(e) => setLogin(e.target.value)}/>
                    <input placeholder="Password" type="password" required onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit"><span className="cat-paw">Войти <img width={20} src="./../images/cat-paw.png"/></span></button>
                    <p>Оу, вы еще не создали аккаунт? <a href="">Регистрация</a></p>
                </form>
            </div>
            
        </div>
        // <>
        //     <div className="main_titles">
        //         <h1>Авторизация</h1>
        //         <h3>Чтобы продолжить работу на сайте, введите ваш логин и пароль</h3>
        //     </div>
        //     <div className="main_form">
        //         <input placeholder="Login" type="text" onChange={(e) => setLogin(e.target.value)}/>
        //         <input placeholder="Password" type="password" required onChange={(e) => setPassword(e.target.value)}/>
        //         <button type="submit"><span className="cat-paw">Войти <img width={20} src="./../images/cat-paw.png"/></span></button>
        //         <p>Оу, вы еще не создали аккаунт? <a href="">Регистрация</a></p>
        //     </div>
            
        // </>
                        
    );
};

export default LoginPage;