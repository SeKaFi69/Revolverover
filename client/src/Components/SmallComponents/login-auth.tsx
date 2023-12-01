import { useState } from "react";
import * as Unicons from "@iconscout/react-unicons";
import style from "../CSS/login-auth.module.css";
import { useNavigate } from "react-router-dom";

export default function LoginAuth() {
  const [editNick, setEditNick] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("Anonim");

  const handleSubmit = (e) => {
    navigate("/test");
  };
  return (
    <form className={style.nick} onSubmit={handleSubmit}>
      <input
        type={"text"}
        placeholder={"Nick"}
        maxLength={20}
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        onFocus={() => {
          setEditNick(true);
        }}
        onBlur={(e) => {
          setEditNick(false);
          if (username.length > 0) {
          } else {
            setUsername(e.target.value);
          }
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            // blur
            e.currentTarget.blur();
            handleSubmit;
          }
        }}
      />

      {editNick ? (
        <Unicons.UilUnlockAlt className={style.unlock} />
      ) : (
        <Unicons.UilLockAlt className={style.lock} />
      )}
    </form>
  );
}
