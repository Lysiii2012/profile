import React, { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import PopUpItem from "./PopUpItem/PopUpItem";
import styles from './style.module.css';

const ItemGroup = () => {
    const [isPopUpVisible, setIsPopUpVisible] = useState(false);
    const [popupType, setPopupType] = useState("");
    const [items, setItems] = useState([]);
 
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
        setItems(updatedItems);  
        localStorage.setItem("items", JSON.stringify(updatedItems));  
    };

    const handleDeleteItem = (id) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems); 
        localStorage.setItem("items", JSON.stringify(updatedItems));  
    };

    return (
        <div className={styles.item_group}>
            <ItemList
                title="Projects:" 
                buttonText="Create project" 
                onButtonClick={() => handleButtonClick("project")}
                items={items.filter(item => item.type === "project")}  
                deleteItemClick={handleDeleteItem}
            />
            <ItemList 
                title="Tasks:" 
                buttonText="Create task" 
                onButtonClick={() => handleButtonClick("task")}
                items={items.filter(item => item.type === "task")}  
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
