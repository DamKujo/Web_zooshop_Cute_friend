import React from "react";
import axios from "axios";
import AppContext from "../context";

function UserData () {

    const {userLive} = React.useContext(AppContext);
    const [userNow, setUserNow] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchOrders = async () => {
          try {
            const { data: usersData } = await axios.get('http://localhost:3001/users');
            const usersNeed = usersData.find(({login}) => login === userLive);
            setUserNow(usersNeed);
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
            <p>Имя: {userNow.firstName}</p>
            <p>Фамилия: {userNow.lastName}</p>
            <p>email: {userNow.email}</p>
            <p>Логин: {userNow.login}</p>
            <p>Пароль: {userNow.password}</p>
        </>
    );
}
export default UserData;