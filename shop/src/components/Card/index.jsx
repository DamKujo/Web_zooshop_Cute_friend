import React from "react";
import styles from "./Card.module.scss";


export default function Card({onFavorite, name, imageUrl, price, onRemove, onPlus, id, cartItems, cartFavorite}){

  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const onClickPlus = () => {
    const itemInCart = cartItems.find(item => item.id === id);
    if (itemInCart) {
      onRemove(id);
    } else {
      onPlus({id, name, imageUrl, price});
    }
    setIsAdded(!isAdded);
  }

  const onClickFavorite = () => {
    const itemInFavorite = cartFavorite.find(item => item.id === id);
    if (itemInFavorite) {
      onRemove(id);
    } else (
      onPlus({id, name, imageUrl, price})
    )

    setIsFavorite(!isFavorite);
  };

  return(
      <div className={styles.card}>
          <div className={styles.favorite} onClick={onFavorite}> 
            <img onClick={onClickFavorite} src={isFavorite ? "./../images/heart-like.svg" : "./../images/heart-unlike.svg"} alt="Unliked" />
          </div>
          <div className={styles.cardContent}>
            <img width={127} height={160} src={imageUrl} alt=""/>
            <h5>{name}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>$ {price}</b>
              </div>
              <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "./../images/btn-checked.svg" : "./../images/btn-plus.svg"} alt=""/>
            </div>
          </div>
      </div>
    )
}