import { useState } from "react";
import "../Styles/Form.css";

function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: !form.name && "Full Name is required",
      confirmPassword:
        form.password !== form.confirmPassword && "Passwords do not match",
      terms: !form.terms && "You must agree to terms",
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some(Boolean);
    !hasError && console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input name="name" placeholder="Full Name" onChange={handleChange} />
      <p>{errors.name}</p>

      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <input
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        onChange={handleChange}
      />
      <p>{errors.confirmPassword}</p>

      <select name="gender" onChange={handleChange}>
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <br />

      <label>
        <input type="checkbox" name="terms" onChange={handleChange} /> I agree
        to Terms
      </label>
      <p>{errors.terms}</p>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
