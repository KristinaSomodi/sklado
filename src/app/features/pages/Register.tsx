import { NavLink } from "react-router-dom";
import background from "../../../assets/images/background.png";
import logoXs from "../../../assets/images/logo-xs.png";

function Register() {
  return (
    <>
      <div className="l">
        <img src={background} alt="" className="l--left" />

        <div className="l--right">
          {/* title */}
          <div className="title--logo">
            <div className="title--secondary mt-80 ml-80 mb-42">Register </div>
            <img src={logoXs} alt="" className="title--logo-img ml-24" />
          </div>

          {/* login form */}
          <form className="loginForm ml-80 mt-32 flex">
            {/* inputs, email password */}
            <div className="field mt-16">
              <label htmlFor="fullName" className="field__label ">
                Full name*
              </label>
              <input
                type="text"
                placeholder="Full name"
                className="input input--log mt-8"
                required
              />
            </div>
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
            <div className="field mt-16">
              <label htmlFor="username" className="field__label ">
                Username*
              </label>
              <input
                type="text"
                placeholder="username1234"
                className="input input--log mt-8"
                required
              />
            </div>
            <div className="field mt-16">
              <label htmlFor="password" className="field__label ">
                Password*
              </label>
              <div className="pos--rel">
                <input
                  type="password"
                  placeholder="********"
                  className="input input--log mt-8"
                  required
                />
                <i className="icon icon--base icon--eye-on icon--black input__icon"></i>
              </div>
            </div>
            <div className="field mt-16">
              <label htmlFor="password" className="field__label ">
                Confirm password*
              </label>
              <div className="pos--rel">
                <input
                  type="password"
                  placeholder="********"
                  className="input input--log mt-8"
                  required
                />
                <i className="icon icon--base icon--eye-on icon--black input__icon"></i>
              </div>
            </div>
            <NavLink to={"/login"}>
              <button className="btn btn--secondary btn--xl mt-80">
                Register
              </button>
            </NavLink>
          </form>
          <div className="type type--montserrat ml-80 mt-24">
            Already have an account?
            <NavLink to={"/login"}>
              <span className="type type--montserrat type-500 type-16 type--blue">
                Login here.
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
