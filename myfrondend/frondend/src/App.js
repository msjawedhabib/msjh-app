import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login1 from "./components/Login/Login1";
import EmployeePortal from "./components/employee/employee-portal";
import OwnerPortal from "./components/owner/OwnerPortal";
import ReceptionPortal from './components/reception/ReceptionPortal';  // Adjust the path accordingly
import TechnicalPortal from "./components/tecnical/TL";

function App() {
  const [user, setUser] = useState(null);
  const [workLogs, setWorkLogs] = useState([]);

  // Handles logout
  const handleLogout = () => {
    setUser(null);
  };

  // Handles work detail submissions in Owner Portal
  const handleWorkDetailsSubmit = (workDetails) => {
    setWorkLogs((prevLogs) => [...prevLogs, workDetails]);
    console.log("Submitted Work Details:", workDetails);
  };

  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<Login1 setUser={setUser} />} />

        {/* Employee Portal - Only Accessible to Employees */}
        <Route
          path="/employee-portal"
          element={user?.role === "employee" ? <EmployeePortal onLogout={handleLogout} /> : <Navigate to="/" />}
        />

        {/* Owner Portal - Only Accessible to Owners */}
        <Route
          path="/owner-portal"
          element={user?.role === "owner" ? (
            <OwnerPortal onLogout={handleLogout} onSubmitWorkDetails={handleWorkDetailsSubmit} />
          ) : (
            <Navigate to="/" />
          )}
        />

        {/* Reception Portal - Only Accessible to Receptionists & Owners */}
        <Route
          path="/reception-portal"
          element={user?.role === "receptionist" || user?.role === "owner" ? (
            <ReceptionPortal onLogout={handleLogout} />
          ) : (
            <Navigate to="/" />
          )}
        />

        {/* Technical Portal - Only Accessible to Technicians & Owners */}
        <Route
          path="/technical-portal"
          element={user?.role === "technician" || user?.role === "owner" ? (
            <TechnicalPortal onLogout={handleLogout} />
          ) : (
            <Navigate to="/" />
          )}
        />
      </Routes>

      {/* Display Work Logs (Only for debugging, remove in production) */}
      {user?.role === "owner" && (
        <div>
          <h2>Work Log</h2>
          <pre>{JSON.stringify(workLogs, null, 2)}</pre>
        </div>
      )}
    </Router>
  );
}

export default App;
