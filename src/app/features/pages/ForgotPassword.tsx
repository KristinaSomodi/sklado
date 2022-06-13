import { NavLink } from "react-router-dom";
import background from "../../../assets/images/background.png";

function ForgotPassword() {
  return (
    <>
      <div className="l">
        <img src={background} alt="" className="l--left" />

        <div className="l--right">
          {/* title */}
          <div className="title--logo">
            <div className="title--secondary mt-80 ml-80 mb-42">
              Forgot password?{" "}
            </div>
            <img
              src={require("../../../assets/images/logo-xs.png")}
              alt=""
              className="title--logo-img ml-24"
            />
          </div>

          {/* login form */}
          <form className="loginForm ml-80 mt-32 flex">
            {/* inputs, email password */}
            <div className="field mt-16">
              <label htmlFor="email" className="field__label ">
                Email*
              </label>
              <input
                type="text"
                placeholder="mail@website.com"
                className="input input--log mt-8"
                required
              />
            </div>
            <NavLink to={"/login"}>
              <button className="btn btn--secondary btn--xl mt-80">
                Reset password
              </button>
            </NavLink>
          </form>
          <NavLink to={"/login"}>
            <div className="type type--montserrat type--blue ml-80 mt-24">
              Back to login.
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
