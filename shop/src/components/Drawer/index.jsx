import React, {useContext, useState} from "react";
import Info from "./../Info";
import { useCart } from "../../hooks/uscCart";
import axios from "axios";
import styles from "./Drawer.module.scss";
import AppContext from "../../context";

export default function Drawer({onClose, onRemove, items= [], opened}){
    const {isLoggedIn, userLive} = useContext(AppContext);
    const {cartItems, setCartItems, totalPrice} = useCart();
    const [orderId, setOrderId] = useState(null);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);


    const onClickOrder = async() => {
        try{
            setIsLoading(true);
            const user = userLive;
            const productIds = cartItems.map((item) => Number(item.id));
            const {data} = await axios.post('http://localhost:3001/orders', {
                productIds,
                user
            });
            console.log(data);
            setOrderId(data.id);
            setIsOrderComplete(true);
            setCartItems([]);
            cartItems.forEach(async (item) => {
                await axios.delete(`http://localhost:3001/cart/${item.id}`);
            });
        }catch(error){
            alert('Не удалось оформить заказ. Повторите попытку позже.')
        }
        setIsLoading(false);
    }

    return(
       
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
            <div className={styles.drawer} >
            <h2 className="d-flex justify-between mb-30">Корзина <img onClick={onClose} className="cu-p" src="./../images/cart/btn-remove.svg" alt="close"/></h2>

            {
                isLoggedIn ?
                <>
                    {
                    items.length > 0 ? (
                    <div className="d-flex flex-column flex">
                        <div className="Items">
                        {
                            items.map((obj) =>(
                                <div key={obj.id} className="cart__item d-flex align-center mb-20">
                                    <div style={{backgroundImage: `url(${obj.imageUrl})`}} className="cart__itemImg"></div>
            
                                    <div className="mr-20">
                                        <p className="mb-5">{obj.name}</p>
                                        <b>$ {obj.price}</b>
                                    </div>
                                    <img onClick={() => onRemove(obj.id)} className="remove__btn" src="./../images/cart/btn-remove.svg" alt="Remove"/>
                                </div> 
                            ))
                        }
                        </div>

                        <div className="cartTotalBlock">
                        <ul>
                            <li> 
                            <span>Итого:</span>
                            <div></div>
                            <b>$ {totalPrice}</b>
                            </li>
                            <li>
                            <span>Комиссия 3%</span>
                            <div></div>
                            <b>$ {Math.round(totalPrice * 0.03)}</b>
                            </li>
                            <button disabled={isLoading} onClick={onClickOrder} className="greenButton">Оформить заказ<img src="./../images/cart/arrow.svg"/></button>
                        </ul>
                        </div>
                    </div>
                        ): (
                        <Info 
                        name={isOrderComplete ? "Заказ оформлен" : "Корзина пуста"}
                        description={isOrderComplete ? `Ваш заказ #${orderId} отправлен на сборку. Ваши питомцы будут ждать вас в нашем магазине`: "Добавьте хотя бы один товар, чтобы сделать заказ"}
                        image={isOrderComplete ? "./../images/cart/complete-order.svg": "./../images/cart/empty-cart.svg"}
                    />
                    )

                    }
                </> : 
                <>
                    <Info 
                    name={"Вы не авторизированы"}
                    description={"Чтобы выполнить заказ, необходимо авторизироваться."}
                    image={"./../images/cart/notauth.png"}
                    />
                </>
            }
            

            </div>
        </div>
        
    )
}