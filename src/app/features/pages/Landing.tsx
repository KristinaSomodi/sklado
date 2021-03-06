import { NavLink } from "react-router-dom";
import logoBig from "../../../assets/images/logo-big.png";

function Landing() {
  return (
    <>
      <div className="page">
        <div className="page--wrap ml-80  ">
          <img className="logo mt-80" src={logoBig} alt="LOGO" />
          <div className="title--primary mt-80">Welcome to Sklado!</div>
          <div className="title--tertiary mt-24">Jump right in!</div>
          <NavLink to={"/products"}>
            <button className="btn--primary btn--l mt-32">
              LOGIN <i className="icon icon--base icon--arrow ml-29"></i>
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Landing;
