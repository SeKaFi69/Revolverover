import { Link } from "react-router-dom";
import NavList from "./NavList";
import style from "./NavList.module.css";
function Nav_def() {
  return (
    <NavList>
      <li className={style.NavList__item}>
        <Link to="/">Home</Link>
      </li>
      <li className={style.NavList__item}>
        <Link to="/loading">Loading</Link>
      </li>
      <li className={style.NavList__item}>
        <Link to="/school">School</Link>
      </li>
      <li className={style.NavList__item}>
        <Link to="/chat">Chat</Link>
      </li>
    </NavList>
  );
}

export default Nav_def;
