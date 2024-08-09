import React, { useState } from "react";

function Login() {
  const [data, setdata] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(data);
  };

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={data.email}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={data.password}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Login ok</button>
    </form>
  );
}

export default Login;
