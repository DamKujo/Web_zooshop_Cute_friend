import React from "react";
import "./login.css";
import axios from "axios";


// const API_URL = 'https://656b2e84dac3630cf727ceb5.mockapi.io';

const LoginPage = () => {

    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    // const [user, setUser] = React.useState(null)
    // const {mutate, isLoading} = useMutation(
    //     'login',
    //     () => 
    //     axios.post(
    //         `${API_URL}/users`,
    //         {
    //             login,
    //             password
    //         },
    //         {
    //             headers: {
    //                 "requestId": "$datatype.uuid",
    //                 "items": "$mockData",
    //                 "count": "$count",
    //                 "anyKey": "anyValue"
    //               }
    //         },
    //     {
    //         onSucces: ({data}) => {
    //             setUser(data.user)
    //         },
    //     }
    //     )
    // )


    
    return(
        
        <>
            {!user ? (
                <div className="main">
                    <div className="main_titles">
                        <h1>Авторизация</h1>
                        <h3>Чтобы продолжить работу на сайте, введите ваш логин и пароль</h3>
                    </div>
                    <div className="main_form">
                        <form>
                            <input placeholder="Login" type="text" onChange={(e) => setLogin(e.target.value)}/>
                            <input placeholder="Password" type="password" required onChange={(e) => setPassword(e.target.value)}/>
                            <button ><span className="cat-paw">Войти <img width={20} src="./../images/cat-paw.png"/></span></button>
                            <p>Оу, вы еще не создали аккаунт? <a href="">Регистрация</a></p>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="main">
                    <h1>Ты успешно авторизован! {user?.login}</h1>
                </div>
            )}
        
        </>
        
        
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