import React, { useState } from "react";
import styles from "./styles.module.css";

const FormList = ({ label, items, onAddItem, onDeleteItem, disabled }) => {
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    if (newItem.trim()) {
      onAddItem(newItem);
      setNewItem("");
    }
  };

  const handleDeleteItem = (item) => {
    onDeleteItem(item);
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
                </div>
              )}
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
