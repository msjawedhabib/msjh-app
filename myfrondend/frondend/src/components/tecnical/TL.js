import React, { useState } from "react";
import "./TL.css";

const Technical = () => {
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [itemType, setItemType] = useState("product");

  const addItem = () => {
    if (!newItem) return;
    if (itemType === "product") setProducts([...products, newItem]);
    else if (itemType === "service") setServices([...services, newItem]);
    else setEmployees([...employees, newItem]);
    setNewItem("");
  };

  const removeItem = (type, index) => {
    if (type === "product") setProducts(products.filter((_, i) => i !== index));
    else if (type === "service") setServices(services.filter((_, i) => i !== index));
    else setEmployees(employees.filter((_, i) => i !== index));
  };

  return (
    <div className="technical-container">
      <h1>Technical Management</h1>
      <label>Add Item:</label>
      <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
      <select onChange={(e) => setItemType(e.target.value)}>
        <option value="product">Product</option>
        <option value="service">Service</option>
        <option value="employee">Employee</option>
      </select>
      <button onClick={addItem}>Add</button>

      <h3>Products</h3>
      {products.map((p, i) => (
        <div key={i}>{p} <button onClick={() => removeItem("product", i)}>Remove</button></div>
      ))}

      <h3>Services</h3>
      {services.map((s, i) => (
        <div key={i}>{s} <button onClick={() => removeItem("service", i)}>Remove</button></div>
      ))}

      <h3>Employees</h3>
      {employees.map((e, i) => (
        <div key={i}>{e} <button onClick={() => removeItem("employee", i)}>Remove</button></div>
      ))}
    </div>
  );
};

export default Technical;
