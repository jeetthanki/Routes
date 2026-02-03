import React from "react";

const Form = () => {
  const [data, SetData] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    gender: "",
    ischecked: false,
  });
  const [error, SetError] = React.useState();

  const handleSubmit = () => {
    if (data.name === "") {
      SetError("Name Is Required");
      return;
    }
    if (data.password === "") {
      SetError("password Is Required");
      return;
    }
    if (data.password !== data.confirmpassword) {
      SetError("Password Is Not Same");
      return;
    }
    if (!data.ischecked) {
      SetError("Please check Terms And Agree");
      return;
    }
    console.log(data);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    SetData({ ...data, [name]: value });
  };
  return (
    <div className="container">
      <h1>Form Registration</h1>
      {error ? <p>{error}</p> : null}
      <label>Full Name:</label>
      <input
        name="name"
        type="name"
        placeholder="Enter Your Name"
        onChange={handleChange}
      ></input>
      <label>Email:</label>
      <input
        name="email"
        type="email"
        placeholder="Enter Your Email"
        onChange={handleChange}
      ></input>
      <label> Password:</label>
      <input
        name="password"
        type="password"
        placeholder="Enter Your Password"
        onChange={handleChange}
      ></input>
      <label>Confirm Password:</label>
      <input
        name="confirmpassword"
        type="password"
        placeholder="Enter Your Confirm Password"
        onChange={handleChange}
      ></input>
      <label>Gender</label>
      <select name="gender" onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <br />
      <br />
      <label>I Read All Terms And Agree</label>
      <input name="ischecked" type="checkbox" onChange={handleChange}></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
export default Form;
