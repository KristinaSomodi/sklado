function Landing() {
  return (
    <>
      <div className="page">
        <div className="wrap ml-80  ">
          <img
            className="logo mt-80"
            src={require("../../../assets/images/logo-big.png")}
            alt="LOGO"
          />
          <div className="title--primary mt-80">Welcome to Sklado!</div>
          <div className="title--secondary mt-24">Jump right in!</div>
          <button className="btn--primary btn--l mt-32">
            VIEW PRODUCTS <i className="icon icon--base icon--arrow ml-29"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Landing;
