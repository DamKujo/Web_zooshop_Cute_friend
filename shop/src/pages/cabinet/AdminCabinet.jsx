import React from "react";
import Card from "../../components/Card";
import axios from "axios";
import styles from "./Cabinets.module.scss";

export default function AdminCabinet(){
    const [allUsers, setAllUsers] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchOrders = async () => {
          try {
            const { data: ordersData } = await axios.get('http://localhost:3001/orders');
            const orderItems = await Promise.all(
              ordersData.map(async (order) => {
                const products = await Promise.all(
                  order.productIds.map(async (productId) => {
                    const { data: productData } = await axios.get(`http://localhost:3001/items/${productId}`);
                    return productData;
                  })
                  );
                return {
                  id: order.id,
                  items: products,
                  user: order.user
                };
              })
              );
            setAllUsers(orderItems);
            setIsLoading(false);
          } catch (error) {
            alert("Ошибка, повторите попытку позже");
            console.log(error);
          }
        };
    
        fetchOrders();
        }, []);

    return(
        <>
        <div className={styles.main}>
            <div className={styles.allorders}>
                <h1>Все заказы</h1>

                {
                    allUsers.length > 0 ? 
                    <>
                    <div className="orders-container">
                    {allUsers.map((order) => (
                        <div key={order.id} className="order-card">
                            <h2>Заказ #DM{order.id}</h2>
                            <h3>Пользователь: {order.user}</h3>
                            <div className="order-items-container">
                            {order.items.map((item, index) => (
                            <Card
                                key={index}
                                loading={isLoading}
                                {...item}
                            />
                            ))}
                            </div>
                        </div>
                        ))}
                    </div>
                    </> : 
                    <>
                    <div className="order_empty">
                    <h1>У вас еще нет заказов :(</h1>
                    </div>
                    </>
                }
            </div>
            <div className={styles.down}>
                <div className={styles.button}>
                    <h1>Выложить новый товар</h1>
                </div>
            </div>
        </div>
        
        </>
    )
};