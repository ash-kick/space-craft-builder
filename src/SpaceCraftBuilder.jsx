import React, { useState } from "react";
import ItemForm from "./ItemForm.jsx";
import InventoryDisplay from "./InventoryDisplay.jsx";
import { v4 as uuidv4 } from "uuid";

// space craft builder function for dipsplaying in app
const SpaceCraftBuilder = () => {
     // create initial inventory state
     const INITIAL_INVENTORY_STATE = [
          {
               id: uuidv4(),
               name: "Oxygen Tank",
               quantity: "3",
               purpose: "Equipment",
               agreeToTerms: true,
          },
     ];

     // set initial inventory state
     const [inventory, setInventory] = useState(INITIAL_INVENTORY_STATE);
     // function for adding an item to list
     const addItem = (newItem) => {
          setInventory((inventory) => [...inventory, { ...newItem, id: uuidv4() }]);
     };
     // function for deleting item from list
     const deleteItem = (itemId) => {
          setInventory(inventory.filter((item) => item.id !== itemId));
     };
     // return the item form and the inventory display, pass along all relevant functions & data
     return (
          <div>
               <ItemForm addItem={addItem} />
               <InventoryDisplay inventory={inventory} deleteItem={deleteItem} />
          </div>
     );
};
// export space craft builder
export default SpaceCraftBuilder;
