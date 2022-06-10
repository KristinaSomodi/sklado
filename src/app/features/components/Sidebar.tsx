function Sidebar() {
  return (
    <>
      <div className="sidebar layout--left">
        <img
          className="logo mt-24 mb-80"
          src={require("../../../assets/images/logo-small.png")}
          alt="LOGO"
        />
        <button className="btn--secondary btn--m">
          <i className="icon icon--base icon--package mr-19"></i>
          Add product
        </button>
      </div>
    </>
  );
}

export default Sidebar;
