import React from "react";
import styles from "./styles.module.css";
import del from "../../../media/delete.svg";

const ItemList = ({
  title,
  buttonText,
  onButtonClick,
  items,
  deleteItemClick,
}) => {
  return (
    <div className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <p>{buttonText}</p>
          <button onClick={onButtonClick}>+</button>
        </div>
        {items.map((item) => (
          <div key={item.id} className={styles.card_new}>
            {item.image && (
              <div className={styles.card_img}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.card_image}
                />
              </div>
            )}
            <div>
              <h3>
                <strong>{item.name}</strong>
              </h3>
              <p>{item.details}</p>
            </div>
            <button onClick={() => deleteItemClick(item.id)}>
              <img src={del} alt="delete" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
