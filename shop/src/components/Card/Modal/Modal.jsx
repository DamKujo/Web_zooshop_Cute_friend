import React from "react";
import "./Modal.scss";
import AppContext from "../../../context";

const Modal = ({active, setActive, items, name, imageUrl, price}) => {
    return (
        <AppContext.Provider value={{items, name, imageUrl, price}}>
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <img width={200} height={250} src={imageUrl}/>
                <h4>{name}</h4>
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>$ {price}</b>
                </div>
            </div>
        </div>
        </AppContext.Provider>
    )
}

export default Modal;