function ForgotPassword() {
  return (
    <>
      <div className="l">
        <img
          src={require("../../../assets/images/background.png")}
          alt=""
          className="l--left"
        />

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

            <button className="btn btn--secondary btn--xl mt-80">
              Reset password
            </button>
          </form>
          <div className="type type--montserrat type--blue ml-80 mt-24">
            Back to login.
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
