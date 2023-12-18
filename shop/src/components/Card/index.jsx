import React from 'react';
import ContentLoader from "react-content-loader";
import styles from './Card.module.scss';
import AppContext from "../../context";
// import Modal from './Modal/Modal';

function Card({
  id,
  name,
  imageUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  loading= false
  // modalActive,
  // setModalActive
}) {
  const {isItemAdded} =React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  
  

  const onClickPlus = () => {
    onPlus({ id,name, imageUrl, price });
  };

  const onClickFavorite = () => {
    onFavorite({ id, name, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <>
    <div className={styles.card} >
      {
        loading ? <ContentLoader
          speed={2}
          width={155}
          height={265}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="150" />
          <rect x="0" y="160" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="185" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
    </ContentLoader> : <>
    <div className={styles.favorite} onClick={onClickFavorite} >
      <img src={isFavorite ? './../images/heart-like.svg' : './../images/heart-unlike.svg'} alt="Unliked" />
    </div>
    <img width={120} height={135} src={imageUrl} className={styles.image} alt="Phones" />
    <h5>{name}</h5>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column">
        <span>Цена:</span>
        <b>$ {price}</b>
         {/* <button type='button' onClick={() => setModalActive(true)}>Подробнее</button> */}
      </div>
      <img
        className={styles.plus}
        onClick={onClickPlus}
        src={isItemAdded(id) ? './../images/btn-checked.svg' : './../images/btn-plus.svg'}
        alt="Plus"
      />
    </div>
    </>
      }
      {/* <Modal active={modalActive} setActive={setModalActive}></Modal> */}
    </div>
    
    </>
    
    );
}
export default Card;


