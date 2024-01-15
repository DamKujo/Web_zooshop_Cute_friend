import React from "react";
import "./registr.css";
import { Link } from "react-router-dom";
import LoginPage from "../login";
import AppContext from "../../../context";

const RegisterPage = () => {
    const {} = React.useContext(AppContext);
    const [firstName, setUserFirstName] = React.useState('');
    const [lastName, setUserLastName] = React.useState('');
    const [email, setUserEmail] = React.useState('');
    const [login, setUserLogin] = React.useState('');
    const [password, setUserPassword] = React.useState('');

    const handleRegIn = async (e) => {
        try{

        } catch (error) {
            
        }
    }

    return(
        <div className="main">
            <div className="main_titles">
                <h1>Регистрация</h1>
                <h3>Введите данные для регистрации</h3>
            </div>
            <div className="main_form">
                <form onSubmit={handleRegIn}>
                    <input placeholder="Имя" type="text" value={firstName} onChange={(e) => setUserFirstName(e.target.value)}/>
                    <input placeholder="Фамилия" type="text" value={lastName} onChange={(e) => setUserLastName(e.target.value)}/>
                    <input placeholder="Email" type="text" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" value={email} onChange={(e) => setUserEmail(e.target.value)}/>
                    <input placeholder="Login"type="text" value={login} onChange={(e) => setUserLogin(e.target.value)}/>
                    <input placeholder="Password"type="password" required value={password} onChange={(e) => setUserPassword(e.target.value)}/>
                    <button type="submit"><span className="cat-paw">Регистрация <img width={20} src="./../images/cat-paw.png"/></span></button>
                    <p>Так у вас уже есть аккаунт? <Link to={'/login'}><b>Авторизация</b></Link></p>
                </form>
            </div>
            
        </div>
    );
};

export default RegisterPage;