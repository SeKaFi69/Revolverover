import { Link } from "react-router-dom";
import NavList from "./NavList";
import style from "../CSS/NavList.module.css";
function Nav_def() {
  return (
    <NavList>
      <ul className={style.NavDef}>
        <li className={style.NavList__item + " shine"}>
          <Link to="/chat">Chat</Link>
        </li>
        <li className={style.NavList__item + " shine"}>
          <Link to="/rooms">Rooms</Link>
        </li>
      </ul>
    </NavList>
  );
}

export default Nav_def;
