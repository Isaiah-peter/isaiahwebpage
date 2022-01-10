import { Person, Mail } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            standard
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+234 810 466 3471</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>peterisaiah@gmail.com</span>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Topbar;
