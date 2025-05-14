import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EMP.css";

const EmployeePortal = ({ onLogout }) => {
  const [branch, setBranch] = useState("");
  const [loginTime, setLoginTime] = useState(null);
  const [logoutTime, setLogoutTime] = useState(null);
  const [customerName, setCustomerName] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [leaveType, setLeaveType] = useState([]);
  const [leaveFrom, setLeaveFrom] = useState("");
  const [leaveTo, setLeaveTo] = useState("");
  const [applicationDate, setApplicationDate] = useState("");
  const [branchSelected, setBranchSelected] = useState(false);
  const [leaveSubmitted, setLeaveSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleBranchSubmit = () => {
    setBranchSelected(true);
  };

  const handleCheckIn = () => {
    if (!loginTime) setLoginTime(new Date().toLocaleTimeString());
  };

  const handleCheckOut = () => {
    if (!logoutTime) setLogoutTime(new Date().toLocaleTimeString());
  };

  const handleBillingSubmit = () => {
    if (!customerName) {
      alert("Customer name is mandatory");
      return;
    }
    alert("Bill is submitted");
  };

  const handleLeaveSubmit = () => {
    setLeaveSubmitted(true);
  };

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <div className="p-4 space-y-4">
      {/* Branch Selection */}
      <div className="section">
        <label>Select your branch:</label>
        <select className="branch-dropdown" onChange={(e) => setBranch(e.target.value)}>
          <option value="">Select</option>
          <option value="BONGAON">BONGAON</option>
          <option value="HELENCHA">HELENCHA</option>
          <option value="NATABERIA">NATABERIA</option>
          <option value="BADKULLA">BADKULLA</option>
        </select>
        <button onClick={handleBranchSubmit} className="submit-button">Submit</button>
        {branchSelected && <div className="border p-2 mt-2">Selected branch is: {branch}</div>}
      </div>

      {/* Check In and Check Out */}
      <div className="section">
  <button 
    onClick={handleCheckIn} 
    className={`p-2 checkin-btn ${loginTime ? "active" : ""}`}
  >
    Check In
  </button>
  {loginTime && <div className="border p-2 mt-2">Check In Time: {loginTime}</div>}

  <button 
    onClick={handleCheckOut} 
    className={`p-2 checkout-btn ${logoutTime ? "active" : ""}`}
  >
    Check Out
  </button>
  {logoutTime && <div className="border p-2 mt-2">Check Out Time: {logoutTime}</div>}
</div>


      {/* Billing Section (Line by Line) */}
      <div className="section">
  <label>Customer Name:</label>
  <input className="input-field" required onChange={(e) => setCustomerName(e.target.value)} />

  <label>Service Name:</label>
  <input className="input-field" onChange={(e) => setServiceName(e.target.value)} />

  <label>Service Price:</label>
  <input className="input-field" onChange={(e) => setServicePrice(e.target.value)} />

  <label>Product Name:</label>
  <input className="input-field" onChange={(e) => setProductName(e.target.value)} />

  <label>Product Price:</label>
  <input className="input-field" onChange={(e) => setProductPrice(e.target.value)} />

  <button onClick={handleBillingSubmit} className="submit-button">Submit</button>
</div>



      {/* Leave Section (Line by Line) */}
      <div className="section">
        <label>Application Date:</label>
        <input type="date" className="input-field" onChange={(e) => setApplicationDate(e.target.value)} />

        <label>Leave Type:</label>
<div className="checkbox-container">
  {["Casual", "Medical", "Emergency", "Personal"].map((type) => (
    <label key={type} className="checkbox-label">
      <input
        type="checkbox"
        value={type}
        onChange={(e) => setLeaveType([...leaveType, e.target.value])}
      />
      {type}
    </label>
  ))}
</div>

        <label>From:</label>
        <input type="date" className="input-field" onChange={(e) => setLeaveFrom(e.target.value)} />

        <label>To:</label>
        <input type="date" className="input-field" onChange={(e) => setLeaveTo(e.target.value)} />

        <button onClick={handleLeaveSubmit} className="submit-button leave-btn">Submit</button>
        {leaveSubmitted && <div className="border p-2 mt-2">Your leave has been submitted</div>}
      </div>

      {/* Logout Navigation */}
      <button onClick={handleLogout} className="logout-navigate">Logout</button>
    </div>
  );
};

export default EmployeePortal;
