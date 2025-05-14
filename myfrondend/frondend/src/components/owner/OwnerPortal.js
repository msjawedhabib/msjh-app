import React, { useState } from "react"; 
import "./OwnerPortal.css";

const employees = [
  { id: "U001", name: "Goutam Shil", username: "goutam", mobile: "6294673863" ,password: "pass123",role: "employee" },
  { id: "U002", name: "Bittu Sarkar", username: "bittu", mobile: "8609035887",password: "pass123",role: "employee"  },
  { id: "U003", name: "Krishna Kar", username: "krishna", mobile: "9093232608",password: "pass123",role: "employee" },
  { id: "U004", name: "Priyanka Halder", username: "priyankaH", password: "pass123", role: "employee", mobile: "8372805815" },
  { id: "U005", name: "Priyanka Das", username: "priyankaD", password: "pass123", role: "employee", mobile: "8637813546" },
  { id: "U006", name: "Chayan Patra", username: "chayan", password: "pass123", role: "employee", mobile: "9363437422" },
  { id: "U007", name: "Shovona Biswas", username: "shovona", password: "pass123", role: "employee", mobile: "7047047105" },
  { id: "U008", name: "Sampa Sarkar", username: "sampa", password: "pass123", role: "employee", mobile: "6295369854" },
  { id: "U009", name: "Priyanka Saha", username: "priyankaS", password: "pass123", role: "employee", mobile: "7699956066" },
  { id: "U010", name: "Rakhi Mondal", username: "rakhi", password: "pass123", role: "employee", mobile: "7699012818" },
  { id: "U011", name: "Rakibul Mondal", username: "rakibul", password: "pass123", role: "employee", mobile: "7029321530" },
  { id: "U012", name: "Saleem Ahmed", username: "saleem", password: "pass123", role: "employee", mobile: "9897758417" },
  { id: "U013", name: "Moumita Halder", username: "moumita", password: "pass123", role: "employee", mobile: "8509851910" },
  { id: "U014", name: "Sangita Das Mondal", username: "sangita", password: "pass123", role: "employee", mobile: "6296656309" },
  { id: "U015", name: "Rupa Biswas", username: "rupa", password: "pass123", role: "employee", mobile: "9332422772" },
  { id: "U016", name: "Kamil Salmani", username: "kamil", password: "pass123", role: "employee", mobile: "8585984261" },
  { id: "U017", name: "Sumit Arka Mondal", username: "sumit", password: "pass123", role: "employee" },
  { id: "U018", name: "Rajdeep Sarkar", username: "rajdeep", password: "pass123", role: "employee", mobile: "7501253810" },
  { id: "U019", name: "Manu Mistry", username: "manu", password: "pass123", role: "employee", mobile: "8327425707" },
  { id: "U020", name: "Arkaprabha Halder", username: "arkaprabha", password: "pass123", role: "employee", mobile: "7029912476" },
  { id: "U021", name: "Mohd Shahid", username: "shahid", password: "pass123", role: "employee", mobile: "9634760349" },
  { id: "U022", name: "Banti Rajoar", username: "banti", password: "pass123", role: "employee", mobile: "9382646105" },
  { id: "U023", name: "Raja Babu Biswas", username: "rajababu", password: "pass123", role: "employee", mobile: "8346074868" },
  { id: "U024", name: "Dev Das Das", username: "devd", password: "pass123", role: "employee", mobile: "9000000001" },
  { id: "U025", name: "Om Prakash Sen", username: "omprakash", password: "pass123", role: "employee", mobile: "9398229466" },
  { id: "U026", name: "Sourav Debnath", username: "sourav", password: "pass123", role: "employee", mobile: "6295214186" }

];

export default function OwnerPortal({ onLogout, onSubmitWorkDetails, workLogs = [] }) {
  const [search, setSearch] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [showWorkDetails, setShowWorkDetails] = useState(false);
  const [showViewDetails, setShowViewDetails] = useState(false);
  const [showLeaveRequests, setShowLeaveRequests] = useState(false);
  const [leaveRequests, setLeaveRequests] = useState([
   ]);

  const handleSearch = () => {
    const employee = employees.find(emp => emp.name.toLowerCase() === search.toLowerCase() || emp.username.toLowerCase() === search.toLowerCase());
    setSelectedEmployee(employee || null);
  };

  const handleLeaveAction = (index, status) => {
    const updatedRequests = [...leaveRequests];
    updatedRequests[index].status = status;
    setLeaveRequests(updatedRequests);
  };

  return (
    <div className="owner-portal">
      <header className="portal-header">
        <h1>WELCOME TO OWNER PORTAL</h1>
      </header>
      <main className="portal-content">
        <section className="container-box management">
          <button className="manage-btn" onClick={() => setShowSearch(!showSearch)}>Employee Details</button>
          {showSearch && (
            <div className="search-section">
              <input type="text" placeholder="Enter Name or Username" value={search} onChange={(e) => setSearch(e.target.value)} />
              <button className="search-btn" onClick={handleSearch}>Search</button>
              {selectedEmployee && (
                <div className="employee-details">
                  <p><strong>Name:</strong> {selectedEmployee.name}</p>
                  <p><strong>Username:</strong> {selectedEmployee.username}</p>
                  <p><strong>Mobile:</strong> {selectedEmployee.mobile}</p>
                </div>
              )}
            </div>
          )}
        </section>

        <section className="container-box work-details">
          <button className="manage-btn" onClick={() => setShowViewDetails(!showViewDetails)}>View Employee Work Details</button>
          {showViewDetails && (
            <div className="work-section">
              {workLogs.length > 0 ? (
                workLogs.map((log, index) => (
                  <div key={index} className="work-log">
                    <p><strong>Branch:</strong> {log.branch}</p>
                    <p><strong>Check-in:</strong> {log.checkInTime}</p>
                    <p><strong>Check-out:</strong> {log.checkOutTime}</p>
                    <p><strong>Clients:</strong> {log.clients}</p>
                    <p><strong>Services:</strong> {log.services}</p>
                    <p><strong>Products:</strong> {log.products}</p>
                    <p><strong>Leave Dates:</strong> {log.leaveDates}</p>
                  </div>
                ))
              ) : (
                <p>No work logs found.</p>
              )}
            </div>
          )}
        </section>

        <section className="container-box leave-requests">
          <button className="manage-btn" onClick={() => setShowLeaveRequests(!showLeaveRequests)}>Employee Leaves</button>
          {showLeaveRequests && (
            <div className="leave-section">
              <h2>Leave Requests</h2>
              {leaveRequests.map((request, index) => (
                <div key={index} className="leave-request">
                  <p><strong>Employee:</strong> {request.name}</p>
                  <p><strong>Applied On:</strong> {request.appliedOn}</p>
                  <p><strong>Leave From:</strong> {request.leaveFrom} to {request.leaveTo}</p>
                  <p><strong>Reason:</strong> {request.reason}</p>
                  <p><strong>Status:</strong> {request.status}</p>
                  <button className="accept-btn" onClick={() => handleLeaveAction(index, "Accepted")}>Accept</button>
                  <button className="change-btn" onClick={() => handleLeaveAction(index, "Change Requested")}>Change</button>
                  <button className="reject-btn" onClick={() => handleLeaveAction(index, "Rejected")}>Reject</button>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
      <button className="logout-btn" onClick={onLogout}>Logout</button>
    </div>
  );
}