import style from "../CSS/Chat.module.css";
// import { useState, useEffect } from "react";
// import { db } from "../../database/firebaseConfig";
// import { collection, where, query, getDocs } from "firebase/firestore";
// import LoginAuth from "../../Components/SmallComponents/login-auth";
import Skull from "../../assets/skull";

function Chat() {
  return (
    <div className={style.chat}>
      <nav>
        <img src="" alt="RoomImg" />
        <p>RoomName</p>
        <span className={style.chat__buttons}>
          <Skull />
        </span>
      </nav>
      <div className={style.messages}></div>
      <span className={style.chat__input}>
        <span
          className={style.message}
          role="textbox"
          contentEditable
          aria-hidden="true"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              console.log(e.target);
            }
          }}
        ></span>
      </span>
    </div>
  );
}

export default Chat;
