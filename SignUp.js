import React from "react";
function SignUpForm() {
  const [state, setState] = React.useState({
    name: "",
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

  const handleNameChange = (e) => {
    const value = e.target.value;

  if (/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]*$/.test(value)) {
    setState({
      ...state,
      name: value
    }); 
  }
};

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const { name, email, password, confirm_password } = state;
    
    if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    setState({ confirm_password: "", password: "" });
    return;
    }

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!hasUpperCase || !hasLowerCase) {
      alert("Password must contain at least one uppercase and one lowercase letter.");
      setState({ confirm_password: "", password: "" });
      return;
    }

    if (!hasSymbol) {
      alert("Password must contain at least symbol.");
      setState({ confirm_password: "", password: "" });
      return;
    }

    if (password !== confirm_password) {
      alert("The passwords do not match! Please try again.");
      setState({ confirm_password: "", password: "" });
      return;
    }
    
    alert(`You have successfully signed up!`);

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleNameChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="confirm_password"
          value={state.confirm_password}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
        />
        <button id="signup">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
