import React from "react";
import styles from "./Card.module.scss";


export default function Card(props){

  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  }

  return(
      <div className={styles.card}>
          <div className={styles.favorite}> 
            <img src="./../images/heart-unlike.svg" alt="Unlike"/>
          </div>
          <div className={styles.cardContent}>
            <img width={127} height={160} src={props.imageUrl} alt=""/>
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>$ {props.price}</b>
              </div>
              <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "./../images/btn-checked.svg" : "./../images/btn-plus.svg"} alt=""/>
            </div>
          </div>
      </div>
    )
}