import style from "./Chat.module.css";
import Nav_def from "../Components/Nav_def";
import { useState, useEffect } from "react";

function Chat() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);
  return (
    <div className="container-nav">
      <Nav_def></Nav_def>
      <div className={style.chat}>
        <div className={style.chat__messages}>
          <div className={style.chat__message}>
            {/* display users */}

            {typeof backendData.users == "undefined" ? (
              <div>undefined</div>
            ) : (
              backendData.users.map((user, i) => <div key={i}>{user.name}</div>)
            )}
          </div>
        </div>
        <form className={style.chat__input}>
          <input
            type={"text"}
            placeholder={"Nick"}
            maxLength={20}
            className={style.nick}
          />

          <span
            className={style.message}
            role="textbox"
            contentEditable
            onClick={(e) => {
              e.preventDefault();
              console.log(e.target);
            }}
          ></span>
        </form>
        <div className={style.chat__rooms}></div>
      </div>
    </div>
  );
}

export default Chat;
