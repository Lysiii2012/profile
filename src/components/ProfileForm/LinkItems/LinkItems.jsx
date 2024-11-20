import React, { useState } from "react";
import styles from "./styles.module.css";
import del from '../../../media/delete.svg'

const LinkItems = ({ label, items, onAddItem, onDeleteItem, disabled }) => {
  const [newItemLink, setNewItemLink] = useState(""); // Локальное состояние для ссылки
  const [newItemDescription, setNewItemDescription] = useState(""); // Локальное состояние для описания

  const handleAddItem = () => {
    if (newItemLink.trim() && newItemDescription.trim()) {
      const newItem = { link: newItemLink, description: newItemDescription };
      onAddItem(newItem); // Передаем новый элемент (объект с link и description) в родительский компонент
      setNewItemLink(""); // Очищаем поле ссылки
      setNewItemDescription(""); // Очищаем поле описания
    }
  };

  const handleDeleteItem = (item) => {
    onDeleteItem(item);  
  };

  return (
    <div className={styles.more_items}>
      <div className={styles.items_title}>
        <h4>{label}:</h4>
        <div className={styles.links_group}>
          {items.map((item, index) => (
            <div key={index} className={styles.item}>
              <p>{item.description} - <a href={item.link}>{item.link}</a></p>
              {!disabled && (
                <button
                  className={styles.delete}
                  onClick={() => handleDeleteItem(item)}
                >
                  <img src={del} alt="delete" />
                </button>
              )}
            </div>
          ))}
        </div>
        <div className={styles.new_links}>
          {!disabled && (
            <>
              <input
                type="text"
                value={newItemLink}
                onChange={(e) => setNewItemLink(e.target.value)}
                placeholder="Site name"
              />
              <input
                type="text"
                value={newItemDescription}
                onChange={(e) => setNewItemDescription(e.target.value)}
                placeholder="Link"
              /> 
            </>
          )}
        </div>
        <button 
          type="button" 
          className={styles.button_add_item}
          onClick={handleAddItem} 
          disabled={disabled || !newItemLink.trim() || !newItemDescription.trim()}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default LinkItems;
