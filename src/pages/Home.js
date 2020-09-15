import React from "react";
import 'antd/dist/antd.css';
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <h2>Beyond here, there be Dragons~ </h2>     
        <LoginForm />
        <br />New user?<br />
        <Link to="/registration">Register an account here!</Link>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);