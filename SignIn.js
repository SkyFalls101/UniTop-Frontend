import React from "react";
function SignInForm() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const { email, password } = state;

    if (!email || !email.includes('@')) {
    alert("Please enter a valid email address (must contain '@')");
    return;
  }

    const foundUser = tempUsers.find(user => user.email === email);

    if (!foundUser) {
     alert("This account does not exist. Please Sign Up first.");
     setState({ email: "", password: "" });
     return;
  }

    if (foundUser.password !== password) {
     alert("Incorrect password.");
     setState({ password: "" });
    return;
  }

    alert(`You have successfully logged in with email: ${email} and password: ${password}`);

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  // temporary database for registered ids
  const tempUsers = [
    { email: "student@university.edu", password: "password123" },
    { email: "admin@gmail.com", password: "adminPassword" }
  ];

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1 id="Log"> Login</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          required
        />
        <a href="#">Forgot your password?</a>
        <button>Login</button>
      </form>
    </div>
  );
}

export default SignInForm;