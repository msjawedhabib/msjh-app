import React, { useState } from "react";
import axios from "axios"; // ✅ Add this
import "./Reception.css";

const ReceptionPortal = () => {
  const [shop, setShop] = useState("");
  const [billNo, setBillNo] = useState("");
  const [dateTime] = useState(new Date().toLocaleString());
  const [service, setService] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [product, setProduct] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [paymentType, setPaymentType] = useState("Cash");
  const [grandTotal, setGrandTotal] = useState(0);

  const calculateTotal = () => {
    const total = (parseFloat(servicePrice) || 0) + (parseFloat(productPrice) || 0);
    const finalTotal = total - (parseFloat(discount) || 0);
    setGrandTotal(finalTotal);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/reception/billing", {
        shop,
        billNo,
        dateTime,
        service,
        servicePrice,
        product,
        productPrice,
        discount,
        paymentType,
        grandTotal,
      });

      alert(response.data.message);
    } catch (error) {
      alert("Failed to submit bill");
      console.error(error);
    }
  };

  return (
    <div className="reception-container">
      <h1>Reception Billing</h1>
      
      <label>Shop Name:</label>
      <select onChange={(e) => setShop(e.target.value)} value={shop}>
        <option value="">Select</option>
        <option value="BONGAON">BONGAON</option>
        <option value="BADKULLA">BADKULLA</option>
        <option value="HELENCHA">HELENCHA</option>
        <option value="NATABERIA">NATABERIA</option>
      </select>

      <label>Bill No:</label>
      <input 
        type="text" 
        value={billNo} 
        onChange={(e) => setBillNo(e.target.value)} 
      />

      <label>Date & Time:</label>
      <input 
        type="text" 
        value={dateTime} 
        disabled 
      />

      <label>Service:</label>
      <input 
        type="text" 
        value={service} 
        onChange={(e) => setService(e.target.value)} 
      />

      <label>Service Price:</label>
      <input 
        type="number" 
        value={servicePrice} 
        onChange={(e) => setServicePrice(e.target.value)} 
      />

      <label>Product:</label>
      <input 
        type="text" 
        value={product} 
        onChange={(e) => setProduct(e.target.value)} 
      />

      <label>Product Price:</label>
      <input 
        type="number" 
        value={productPrice} 
        onChange={(e) => setProductPrice(e.target.value)} 
      />

      <label>Discount:</label>
      <input 
        type="number" 
        value={discount} 
        onChange={(e) => setDiscount(e.target.value)} 
      />

      <label>Payment Type:</label>
      <select 
        onChange={(e) => setPaymentType(e.target.value)} 
        value={paymentType}
      >
        <option value="Cash">Cash</option>
        <option value="UPI">UPI</option>
        <option value="Card">Card</option>
      </select>

      <button onClick={calculateTotal}>Calculate Total</button>
      <h3>Grand Total: ₹{grandTotal}</h3>

      <button onClick={handleSubmit} className="submit-btn">Submit Bill</button>
    </div>
  );
};

export default ReceptionPortal;
