import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "https://keyarie.alwaysdata.net/api/signin",
        { email, password }
      );

      localStorage.setItem("token", res.data.token);
      navigate("/dashboard"); // or wherever you want to redirect
    } catch (err) {
      setError(err.response?.data?.message || "Signin failed");
    }
  };

  return (
    <div style={styles.container}>
      <div className="card-ui" style={{ maxWidth: "600px", width: "100%", height:"450px" }}>
        <h2 style={{ textAlign: "center" }}>Sign In</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="input-ui"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          /> <br/>
          <input
            type="email"
            placeholder="Email"
            className="input-ui"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="input-ui"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="btn-ui">Sign In</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Signin;