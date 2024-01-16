import React from "react";
import "./personalcabinet.css";
import { Link } from "react-router-dom";

export default function PersonalCabinet(){
    return(
        <>
        <div className="main">
            <div className="personal_data">
                <h1>Мои данные</h1>
                <p>Имя:</p>
                <p>Фамилия:</p>
                <p>email:</p>
                <p>Логин:</p>
                <p>Пароль:</p>
            </div>
            <div className="personal_orders">
                <h3>Мои заказы</h3>
            </div>
        </div>
        </>
    )
};