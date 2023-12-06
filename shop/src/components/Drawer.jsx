export default function Drawer({onClose, onRemove, items= []}){
    return(
        <div className="overlay">
            <div className="drawer" >
            <h2 className="d-flex justify-between mb-30">Корзина <img onClick={onClose} className="cu-p" src="./../images/cart/btn-remove.svg" alt="close"/></h2>


            {
                items.length > 0 ? (
                    <div className="">
                        <div className="Items">
                        {
                            items.map((obj) =>(
                                <div className="cart__item d-flex align-center mb-20">
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
                            <b>$ 1198</b>
                            </li>
                            <li>
                            <span>Комиссия 3%</span>
                            <div></div>
                            <b>$ 35,94</b>
                            </li>
                            <button className="greenButton">Оформить заказ<img src="./../images/cart/arrow.svg"/></button>
                        </ul>
                        </div>
                    </div>
                ): (
                <div className={"cartEmpty d-flex align-center justify-center flex-column flex"}>
                    <img className="mb-20" width={120} height={120} src="./../images/cart/empty-cart.svg" alt="" />
                    <h2>Корзина пустая :(</h2>
                    <p className="opacity-6">Добавьте хотя бы один товар, чтобы сделать заказ</p>
                    <button onClick={onClose} className="greenButton">
                        <img src="./../images/cart/arrow.svg" alt="" /> Вернуться назад
                    </button>
                </div>)

            }

            </div>
        </div>
        
    )
}