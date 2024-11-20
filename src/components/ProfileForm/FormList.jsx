import React, { useState } from "react";
import styles from "./styles.module.css";

const FormList = ({ label, items, onAddItem, onDeleteItem, disabled }) => {
  const [newItem, setNewItem] = useState(""); // Локальное состояние для каждого FormList

  const handleAddItem = () => {
    if (newItem.trim()) {
      onAddItem(newItem); // Передаем новый элемент в родительский компонент
      setNewItem(""); // Очищаем поле ввода после добавления
    }
  };

  const handleDeleteItem = (item) => {
    onDeleteItem(item); // Передаем элемент для удаления в родительский компонент
  };

  return (
    <div className={styles.more_items}>
      <div className={styles.items_title}>
        <h4>{label}:</h4>
        <div>
          {items.map((item, index) => (
            <div key={index} className={styles.item}>
              <span>{item}</span>
              {!disabled && (
              <div
                className={styles.delete}
                onClick={() => handleDeleteItem(item)}  
              >
                X
              </div>)}
            </div>
          ))}
        </div>
        <div>
          {!disabled && (
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Add new item"
            />
          )}
          <button type="button" onClick={handleAddItem} disabled={disabled}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormList;
