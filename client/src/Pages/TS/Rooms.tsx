import style from "../CSS/Rooms.module.css";
import { useState } from "react";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import * as Unicons from "@iconscout/react-unicons";
function Rooms() {
  const [username, setUsername] = useState("");
  const [user, setUser]: any = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);
  const handleSearch = async () => {};
  const handleKey = (e) => {
    e.code === handleSearch();
  };
  const handleAddChat = () => {};
  const handleSelect = () => {};

  return (
    <div className={style.Rooms}>
      <span className={style.RoomsTitle}>
        <input
          className={style.search}
          type="search"
          placeholder="Szukaj chatu"
          onKeyDown={handleKey}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </span>

      <span className={style.RoomsFriends}>
        <p onClick={handleAddChat}>
          <Unicons.UilPlusCircle />
        </p>
        <span className={style.RoomsFriends__online}></span>
      </span>

      <div className={style.Guild}>
        {user && (
          <div className={style.Room_Link} onClick={handleSelect}>
            <img src={user.photoUrl} alt="RoomImg" />
            <span>
              <h2>{user.nickname}</h2>
              <p></p>
            </span>
          </div>
        )}
        {err && <p>Brak takiego użytkownika</p>}
      </div>
    </div>
  );
}

export default Rooms;
