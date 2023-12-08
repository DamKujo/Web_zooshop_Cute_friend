import React from "react";
import styles from "./Card.module.scss";

export default function Card({onFavorite, name, imageUrl, price, onRemove, onPlus, id, cartItems}){

  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const onClickPlus = () => {
    onPlus({name,imageUrl,price});
    setIsAdded(!isAdded);
  }

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return(
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src={isFavorite ? "./..//images/heart-like.svg" : "./..//images/heart-unlike.svg"} alt="Unliked" />
      </div>
      <div className={styles.cardContent}>
        <img width={117} height={142} src={imageUrl} alt="Phone" />
        <h5>{name}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>$ {price}</b>
          </div>
          <img
            className={styles.plus}
            onClick={onClickPlus}
            src={isAdded ? "./..//images/btn-checked.svg" : "./..//images/btn-plus.svg"}
            alt="Plus"
          />
        </div>
      </div>
    </div>
    )
}