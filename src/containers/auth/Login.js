import "./Login.scss";

function Login() {
  return (
    <div className="login__background">
      <div className="login">
        <h1 className="login__title">Login</h1>
        <button className="login__btnSocialLogin">
          <i class="fa-brands fa-google login__socialIcon"></i>
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
          ></input>
          <label className="login__form__label" for="fullName">
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
          <label className="login__form__label" for="password">
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

export default Login;
