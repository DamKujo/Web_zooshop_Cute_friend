import React, { useContext } from "react";
import {Link} from "react-router-dom";
import { useCart } from "../hooks/uscCart";
import AppContext from "../context";
import { useNavigate } from "react-router-dom";

export default function Header(props){
    const {totalPrice} = useCart();
    const {isLoggedIn, setIsLoggedIn} = useContext(AppContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.setItem('isLoggedIn', false);
        setIsLoggedIn(false);
        navigate('/login');
    }

    return(

        <header className="">

            {
                isLoggedIn ? 
                <>
                    <div className="d-flex justify-between align-center p-40">
                        
                        <Link to={"/"}>
                            <div className="d-flex alig-center">
                                
                                <img width={40} height={40} src="./../images/logo/cat.svg"/>
                                <div>
                                <h3 className="text-uppercase maintitle">Милый друг</h3>
                                <p className="opacity-5">Больше, чем домашний питомец</p>
                                </div>
                                
                            </div>
                        </Link>
                        <ul className="d-flex">
                        <li onClick={props.onClickCart} className="mr-30 cu-p">
                            <img width={18} height={18} src="./../images/box.svg"/>
                            <span>{totalPrice ? `$ ${totalPrice}` : null}</span>
                        </li>
                        <li className="mr-15 cu-p">
                            <Link to={"/favorite"}><img width={18} height={18} src="./../images/heart.svg" alt="Избранное"/></Link>
                        </li>
                        <li className="mr-15 cu-p">
                            <Link to={"/orders"}><img width={18} height={18} src="./../images/user.svg" alt="Пользователь"/></Link>
                            
                        </li>
                        <li className="mr-15 cu-p">
                            <img onClick={handleLogOut} width={22} height={22} src="./../images/auth/esclogin.png" alt="Выйти"/>
                        </li>
                        </ul>
                    </div>
                    <div className="header_back">
                        <img src="./../images/logo/back.jpg"/>
                    </div>
                </>
                
            : 
            <>
                <div className="d-flex justify-between align-center p-40">
                    <Link to={"/"}>
                    <div className="d-flex alig-center">
                        
                        <img width={40} height={40} src="./../images/logo/cat.svg"/>
                        <div>
                        <h3 className="text-uppercase maintitle">Милый друг</h3>
                        <p className="opacity-5">Больше, чем домашний питомец</p>
                        </div>
                        
                    </div>
                    </Link>
                        <ul className="d-flex">
                        <li onClick={props.onClickCart} className="mr-30 cu-p">
                            <img width={18} height={18} src="./../images/box.svg"/>
                            <span>{totalPrice ? `$ ${totalPrice}` : null}</span>
                        </li>
                        <li className="mr-15 cu-p">
                            <Link to={"/favorite"}><img width={18} height={18} src="./../images/heart.svg" alt="Избранное"/></Link>
                        </li>
                        <li className="mr-15 cu-p">
                            <Link to={"/login"}><img width={20} height={20} src="./../images/auth/logindoor.png" alt="Войти"/></Link>
                        </li>
                        </ul>
                </div>
                <div className="header_back">
                    <img src="./../images/logo/back.jpg"/>
                </div>
            </>
            
                
            }
            
      
        </header>
    );
}