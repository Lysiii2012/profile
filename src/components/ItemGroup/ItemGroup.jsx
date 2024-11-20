import React, { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import PopUpItem from "./PopUpItem/PopUpItem";
import styles from './style.module.css';

const ItemGroup = () => {
    const [isPopUpVisible, setIsPopUpVisible] = useState(false);
    const [popupType, setPopupType] = useState("");
    const [items, setItems] = useState([]);

    // Загрузка данных из localStorage при монтировании компонента
    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem("items")) || [];
        setItems(savedItems);
    }, []);

    const handleButtonClick = (type) => {
        setPopupType(type);
        setIsPopUpVisible(true);
    };

    const closePopUp = () => {
        setIsPopUpVisible(false);
        setPopupType("");
    };

    const onCreateItem = (newItem) => {
        const updatedItems = [...items, newItem];
        setItems(updatedItems); // Обновляем состояние
        localStorage.setItem("items", JSON.stringify(updatedItems)); // Синхронизируем с localStorage
    };

    const handleDeleteItem = (id) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems); // Обновляем состояние
        localStorage.setItem("items", JSON.stringify(updatedItems)); // Синхронизируем с localStorage
    };

    return (
        <div className={styles.item_group}>
            <ItemList
                title="Projects:" 
                buttonText="Create project" 
                onButtonClick={() => handleButtonClick("project")}
                items={items.filter(item => item.type === "project")} // Отображать только проекты
                deleteItemClick={handleDeleteItem}
            />
            <ItemList 
                title="Tasks:" 
                buttonText="Create task" 
                onButtonClick={() => handleButtonClick("task")}
                items={items.filter(item => item.type === "task")} // Отображать только задачи
                deleteItemClick={handleDeleteItem}
            />
            
            {isPopUpVisible && (
                <PopUpItem 
                    type={popupType} 
                    onClose={closePopUp} 
                    onCreate={onCreateItem}
                />
            )}
        </div>
    );
};

export default ItemGroup;
