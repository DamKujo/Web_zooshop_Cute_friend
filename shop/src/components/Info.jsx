import React, { useContext } from "react";
import AppContext from "../context";

const Info = ({name, description, image}) => {

    const {setCartOpened} = React.useContext(AppContext)
    return(
        <div className={"cartEmpty d-flex align-center justify-center flex-column flex"}>
            <img className="mb-20" width={120} src={image} alt="" />
            <h2>{name}</h2>
            <p className="opacity-6">{description}</p>
            <button onClick={() => setCartOpened(false)} className="greenButton">
                <img src="./../images/cart/arrow.svg" alt="" /> Вернуться назад
            </button>
        </div>
    );
}
export default Info;