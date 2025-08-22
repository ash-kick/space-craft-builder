import React, { useState } from "react";
// create an item form component that allows users to add items to their inventory list
const ItemForm = ({ addItem }) => {
     // intitial form state should be empty
     const INITIAL_FORM_STATE = {
          name: "",
          quantity: "",
          purpose: "",
          agreeToTerms: false,
     };
     // create states for form data and errors
     const [formData, setFormData] = useState(INITIAL_FORM_STATE);
     const [inputErrors, setInputErrors] = useState({});
     // function for what should happen on change, includes setting form data to newly inputted values and removing any errors that are no long relevant
     const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData((formData) => ({ ...formData, [name]: value }));
          setInputErrors((errors) => {
               const newErrors = { ...errors };

               if (name === "name" && value === "") {
                    newErrors.name = "Name is missing";
               } else if (name === "quantity" && value === "") {
                    newErrors.quantity = "Quantity is missing";
               } else if (name === "purpose" && value === "") {
                    newErrors.purpose = "Purpose is missing";
               } else if (name === "agreeToTerms" && value === "") {
                    newErrors.agreeToTerms = "Agree to terms is missing";
               } else {
                    delete newErrors[name]; // field is valid now, remove error
               }

               return newErrors;
          });
     };
     // validate function checks if various values are missing and sets errors
     function validate() {
          const newErrors = {};
          if (!formData.name) {
               newErrors.name = "Name is missing";
          }
          if (!formData.purpose) {
               newErrors.purpose = "Purpose is missing";
          }
          if (!formData.quantity) {
               newErrors.quantity = "Quantity is missing";
          }
          if (!formData.agreeToTerms) {
               newErrors.agreeToTerms = "Agree to terms is missing";
          }
          return newErrors;
     }
     // function that handles the submitting of the form, will not submit if there are errors
     const handleSubmit = (e) => {
          e.preventDefault();
          const newErrors = validate();
          setInputErrors(newErrors);

          if (Object.keys(newErrors).length === 0) {
               addItem({ ...formData });
               setFormData(INITIAL_FORM_STATE);
          }
     };
     // returns form and inputs allows for styling when errors are present
     return (
          <div>
               <h2>Add an Item to the Inventory</h2>
               <form onSubmit={handleSubmit}>
                    <div id="name-input">
                         <input
                              id="name"
                              name="name"
                              type="text"
                              placeholder="Name"
                              value={formData.name}
                              onChange={handleChange}
                              style={inputErrors.name ? { borderColor: "red" } : { borderColor: "white" }}
                         />
                    </div>
                    <div id="quantity-input">
                         <input
                              id="quantity"
                              name="quantity"
                              type="text"
                              placeholder="Quantity"
                              value={formData.quantity}
                              onChange={handleChange}
                              style={inputErrors.quantity ? { borderColor: "red" } : { borderColor: "white" }}
                         />
                    </div>
                    <div id="purpose-input">
                         <input
                              id="purpose"
                              name="purpose"
                              type="text"
                              placeholder="Purpose"
                              value={formData.purpose}
                              onChange={handleChange}
                              style={inputErrors.purpose ? { borderColor: "red" } : { borderColor: "white" }}
                         />
                    </div>
                    <div id="agree-to-terms-input" style={inputErrors.agreeToTerms ? { borderColor: "red" } : { borderColor: "white" }}>
                         <input id="agreeToTerms" name="agreeToTerms" type="checkbox" placeholder="agreeToTerms" value={formData.agreeToTerms} onChange={handleChange} />
                         <label htmlFor="agreeToTerms">Agree To Terms</label>
                    </div>
                    <div id="add-button-box">
                         <button id="add-button">Add</button>
                    </div>
               </form>
          </div>
     );
};
// export item form for use in space craft builder
export default ItemForm;
