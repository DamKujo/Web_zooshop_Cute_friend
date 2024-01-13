import React from "react";
import "./login.css";
import axios from "axios";
import { Link } from "react-router-dom";


function LoginPage({setIsLoggedIn}) {
    const [login, setLogin] = React.useState("");
    const [password, setPassword] = React.useState("");
  
    const handleLogin = async () => {
      // Add your login logic here, such as calling an API to authenticate the user
      try {
        // Example: make a POST request to authenticate the user
        const response = await axios.post('http://localhost:3000/login', {
          login: login,
          password: password,
        });
        
        // Handle the response, such as setting isLoggedIn state based on the authentication result
        setIsLoggedIn(true);
        
      } catch (error) {
        alert("Login failed. Please try again.");
        console.log(error);
      }
    };
  
    return (
        <div className="main">
            <div className="main_titles">
                <h1>Авторизация</h1>
                <h3>Чтобы продолжить работу на сайте, введите ваш логин и пароль</h3>
            </div>
            <div className="main_form">
                <form >
                    <input placeholder="Login" type="text" value={login} onChange={(e) => setLogin(e.target.value)}/>
                    <input placeholder="Password" type="password" value={password} required onChange={(e) => setPassword(e.target.value)}/>
                    <button onClick={handleLogin}><span className="cat-paw">Войти <img width={20} src="./../images/cat-paw.png"/></span></button>
                    <p>Оу, вы еще не создали аккаунт? <Link to={ '/register'}><b>Регистрация</b></Link></p>
                </form>
            </div>
        </div> 
    );
  }
  
export default LoginPage;





// const LoginPage = ({props}) => {

//     const [login, setLogin] = React.useState('');
//     const [password, setPassword] = React.useState('');
    

//     const handleLogIn = (e) => {
//         e.preventDefault();
//         props.setIsLoggedIn(true);
//         props.history.push('/');
//     }

    
//     return(
//         <div className="main">
//             <div className="main_titles">
//                 <h1>Авторизация</h1>
//                 <h3>Чтобы продолжить работу на сайте, введите ваш логин и пароль</h3>
//             </div>
//             <div className="main_form">
//                 <form onSubmit={handleLogIn}>
//                     <input placeholder="Login" type="text" onChange={(e) => setLogin(e.target.value)}/>
//                     <input placeholder="Password" type="password" required onChange={(e) => setPassword(e.target.value)}/>
//                     <button type="submit"><span className="cat-paw">Войти <img width={20} src="./../images/cat-paw.png"/></span></button>
//                     <p>Оу, вы еще не создали аккаунт? <Link to={ '/register'}><b>Регистрация</b></Link></p>
//                 </form>
//             </div>
//         </div>         
//     );
// };

// export default LoginPage;