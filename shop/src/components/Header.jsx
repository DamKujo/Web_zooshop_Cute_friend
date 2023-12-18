import React from "react";
import {Link} from "react-router-dom";
import { useCart } from "../hooks/uscCart";

export default function Header(props){
    const {totalPrice} = useCart();

    return(

        <header className="">
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
                    <li onClick={props.onClickCart} className="mr-30">
                        <img width={18} height={18} src="./../images/box.svg"/>
                        <span>{totalPrice ? `$ ${totalPrice}` : null}</span>
                    </li>
                    <li className="mr-15 cu-p">
                        <Link to={"/favorite"}><img width={18} height={18} src="./../images/heart.svg" alt="Избранное"/></Link>
                    </li>
                    <li>
                        <img width={18} height={18} src="./../images/user.svg"/>
                    </li>
                    </ul>
            </div>
            <div className="header_back">
                <img src="./../images/logo/back.jpg"/>
            </div>
      
        </header>
    )
}