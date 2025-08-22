import React from "react";
// create item card for each item in inventory
const ItemCard = ({ item }) => {
     return (
          <div className="inventory-item-details">
               <h3>{item.name}</h3>
               <p>Quantity: {item.quantity}</p>
               <p>Purpose: {item.purpose}</p>
          </div>
     );
};
// export item card
export default ItemCard;
