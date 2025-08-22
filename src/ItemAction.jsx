import React from "react";
// create action component that executes delete function from space craft builder on click
const ItemAction = ({ deleteItem, id }) => {
     return (
          <button className="delete-button" onClick={() => deleteItem(id)}>
               Delete
          </button>
     );
};

export default ItemAction;
