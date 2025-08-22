import React from "react";
import ItemCard from "./ItemCard.jsx";
import ItemAction from "./ItemAction.jsx";
// create inventory display that shows each item in the inventory and a delete button for each item
const InventoryDisplay = ({ inventory, deleteItem }) => {
     return (
          <div className="inventory-display">
               <h2>Inventory</h2>
               {inventory.map((item) => (
                    <div key={item.id} className="inventory-item">
                         <ItemCard item={item} id={item.id} />
                         <ItemAction deleteItem={deleteItem} id={item.id} />
                    </div>
               ))}
          </div>
     );
};

export default InventoryDisplay;
