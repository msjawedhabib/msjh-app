import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation
import "./login1.css"; // Ensure CSS is linked

const users = [
  // Owners
  { id: "O001", name: "Souvik Chakraborty", username: "souvik", password: "owner123", role: "owner" },
  { id: "O002", name: "Mrityunjoy Chakraborty", username: "mrityunjoy", password: "owner123", role: "owner" },

  // Employees

  { "id": "U001", "name": "Goutam Shil", "username": "goutam", "password": "pass123", "role": "employee", "mobile": "6294673863" },
  { "id": "U002", "name": "Bittu Sarkar", "username": "bittu", "password": "pass123", "role": "employee", "mobile": "8609035887" },
  { "id": "U003", "name": "Krishna Kar", "username": "krishna", "password": "pass123", "role": "employee", "mobile": "9093232608" },
  { "id": "U004", "name": "Priyanka Halder", "username": "priyankaH", "password": "pass123", "role": "employee", "mobile": "8372805815" },
  { "id": "U005", "name": "Priyanka Das", "username": "priyankaD", "password": "pass123", "role": "employee", "mobile": "8637813546" },
  { "id": "U006", "name": "Chayan Patra", "username": "chayan", "password": "pass123", "role": "employee", "mobile": "9363437422" },
  { "id": "U007", "name": "Shovona Biswas", "username": "shovona", "password": "pass123", "role": "employee", "mobile": "7047047105" },
  { "id": "U008", "name": "Sampa Sarkar", "username": "sampa", "password": "pass123", "role": "employee", "mobile": "6295369854" },
  { "id": "U009", "name": "Priyanka Saha", "username": "priyankaS", "password": "pass123", "role": "employee", "mobile": "7699956066" },
  { "id": "U010", "name": "Rakhi Mondal", "username": "rakhi", "password": "pass123", "role": "employee", "mobile": "7699012818" },
  { "id": "U011", "name": "Rakibul Mondal", "username": "rakibul", "password": "pass123", "role": "employee", "mobile": "7029321530" },
  { "id": "U012", "name": "Saleem Ahmed", "username": "saleem", "password": "pass123", "role": "employee", "mobile": "9897758417" },
  { "id": "U013", "name": "Moumita Halder", "username": "moumita", "password": "pass123", "role": "employee", "mobile": "8509851910" },
  { "id": "U014", "name": "Sangita Das Mondal", "username": "sangita", "password": "pass123", "role": "employee", "mobile": "6296656309" },
  { "id": "U015", "name": "Rupa Biswas", "username": "rupa", "password": "pass123", "role": "employee", "mobile": "9332422772" },
  { "id": "U016", "name": "Kamil Salmani", "username": "kamil", "password": "pass123", "role": "employee", "mobile": "8585984261" },
  { "id": "U017", "name": "Sumit Arka Mondal", "username": "sumit", "password": "pass123", "role": "employee" },
  { "id": "U018", "name": "Rajdeep Sarkar", "username": "rajdeep", "password": "pass123", "role": "employee", "mobile": "7501253810" },
  { "id": "U019", "name": "Manu Mistry", "username": "manu", "password": "pass123", "role": "employee", "mobile": "8327425707" },
  { "id": "U020", "name": "Arkaprabha Halder", "username": "arkaprabha", "password": "pass123", "role": "employee", "mobile": "7029912476" },
  { "id": "U021", "name": "Mohd Shahid", "username": "shahid", "password": "pass123", "role": "employee", "mobile": "9634760349" },
  { "id": "U022", "name": "Banti Rajoar", "username": "banti", "password": "pass123", "role": "employee", "mobile": "9382646105" },
  { "id": "U023", "name": "Raja Babu Biswas", "username": "rajababu", "password": "pass123", "role": "employee", "mobile": "8346074868" },
  { "id": "U024", "name": "Dev Das Das", "username": "devd", "password": "pass123", "role": "employee", "mobile": "9000000001" },
  { "id": "U025", "name": "Om Prakash Sen", "username": "omprakash", "password": "pass123", "role": "employee", "mobile": "9398229466" },
  { "id": "U026", "name": "Sourav Debnath", "username": "sourav", "password": "pass123", "role": "employee", "mobile": "6295214186" },
  

  // Reception Users
  { id: "R001", name: "Receptionist Bongaon", username: "bongaon", password: "reception123", role: "reception", shop: "Bongaon" },
  { id: "R002", name: "Receptionist Helencha", username: "helencha", password: "reception123", role: "reception", shop: "Helencha" },
  { id: "R003", name: "Receptionist Badkulla", username: "badkulla", password: "reception123", role: "reception", shop: "Badkulla" },
  { id: "R004", name: "Receptionist Nataberia", username: "nataberia", password: "reception123", role: "reception", shop: "Nataberia" },

  // Technician
  { id: "T001", name: "Souvik Smart", username: "souviksmart", password: "alex@1a", role: "technician" },
];

const Login1 = ({ setUser }) => {  // Receive setUser as prop
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Clear previous error
    setError("");

    // Find user by username and password
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      alert(`Welcome, ${user.name}!`);

      // ✅ Set user data before navigating
      setUser({ name: user.name, role: user.role, shop: user.shop });

      // ✅ Redirect to the correct portal based on role
      setTimeout(() => {
        if (user.role === "owner") {
          navigate("/owner-portal"); // Redirect to Owner Portal
        } else if (user.role === "employee") {
          navigate("/employee-portal"); // Redirect to Employee Portal
        } else if (user.role === "reception") {
          navigate(`/reception-portal/${user.shop.toLowerCase()}`); // Reception Portal for specific shop
        } else if (user.role === "technician") {
          navigate("/technical-portal"); // Redirect to Technician Portal
        }
      }, 100);
    } else {
      setError("Invalid Username or Password!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Welcome to MS JAWED HABIB SALON & ACADEMY</h1>
        <p className="tagline">We made the best one</p>

        <form className="login-form" onSubmit={handleLogin}>
          {error && <p className="error-message">{error}</p>}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-btn">Login</button>
          <button type="button" className="forgot-btn">Forgot Password?</button>
        </form>
      </div>
    </div>
  );
};

export default Login1;

