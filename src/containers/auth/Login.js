import "./Login.scss";
import React, { Component } from "react";

class Login extends Component {
  //before component rendered, it must run the constructor first
  constructor(props) {
    super(props); //when component Login is passed props, we can you super(props)
    this.state = {
      username: "hello",
      password: "",
    };
  }
  handleOnChangeInput = (event) => {
    console.log(event.target.value);
  };
  render() {
    return (
      <div className="login__background">
        <div className="login">
          <h1 className="login__title">Login</h1>
          <button className="login__btnSocialLogin">
            <i className="fa-brands fa-google login__socialIcon"></i>
            <span className="login__socialText">Sign up with Google</span>
          </button>
          <div className="login__divider">
            <span>Or</span>
          </div>
          <div className="login__form">
            <input
              className="login__form__input"
              id="fullName"
              type="text"
              placeholder=" "
              value={this.state.username}
              onChange={(event) => this.handleOnChangeInput(event)}
            ></input>
            <label className="login__form__label" htmlFor="fullName">
              Full Name
            </label>
          </div>
          <div className="login__form">
            <input
              className="login__form__input"
              id="password"
              type="password"
              placeholder=" "
            ></input>
            <label className="login__form__label" htmlFor="password">
              Password
            </label>
          </div>
          <button className="login__submit" onClick={() => alert("hello")}>
            Login
          </button>
          <p className="login__forgot">
            <a href="#">Forgot your password ?</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
