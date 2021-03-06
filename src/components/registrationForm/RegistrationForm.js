import React from "react";
import Spinner from "react-spinkit";
import DataService from "../../dataService";
import { Link } from "react-router-dom";
import { withAsyncAction } from "../../redux/HOCs";
import "./RegistrationForm.css";

class RegistrationForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      displayName: ""
    };
    this.client = new DataService();
  }

  handleRegistration = e => {
    e.preventDefault();
    if (this.state.username.length === 0 ) {
      alert("Error: Username field cannot be blank.")
    } else if (this.state.username.length < 3 ) {
      alert("Error: Username is too short.")
    } else if (this.state.username.length > 20) {
      alert("Error: Username is too long.")
    }

    if (this.state.password.length === 0 ) {
      alert("Error: Password field cannot be blank.")
    } else if (this.state.password.length < 3 ) {
      alert("Error: Password is too short.")
    } else if (this.state.password.length > 20 ) {
      alert("Error: Password is too long.")
    }

    if (this.state.displayName.length === 0 ) {
      alert("Error: Display Name field cannot be blank.")
    } else if (this.state.displayName.length < 3 ) {
      alert("Error: Display Name is too short.")
    } else if (this.state.displayName.length > 20 ) {
      alert("Error: Display Name is too long.")
    }

    this.client.registerUser(this.state).then(result => {
      //alert(JSON.stringify(result.data))
      alert("Account registration successful! Redirecting to profile.")
      this.props.login({
        username: this.state.username,
        password: this.state.password
      })
    }).catch( error => console.log(error))
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="RegistrationForm">
        <form id="registration-form" onSubmit={this.handleRegistration}>
          <h2>Register a new account</h2>
          <label htmlFor="username">Username</label>
          <h5>Username must be 3-20 characters long.</h5>
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <h5>Password must be 3-20 characters long.</h5>
          <input
            type="password"
            name="password"
            required
            onChange={this.handleChange}
          />
          <label htmlFor="displayName">Display Name</label>
          <h5>This is the name that users will see on your profile.</h5>
          <h5>Display Name must be 3-20 characters long.</h5>
          <input
            type="text"
            name="displayName"
            required
            onChange={this.handleChange}
          />
          <button type="submit" disabled={loading} onClick={this.handleRegistration}>
            Register
          </button>
          <br />Already registered?<br />
          <Link to="/">Login to your account here!</Link>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default withAsyncAction("auth", "login")(RegistrationForm);
