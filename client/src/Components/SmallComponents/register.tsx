// firebase create user with nickname and password
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../Pages/TS/Loading";
import * as Unicons from "@iconscout/react-unicons";
import * as bcrypt from "bcrypt-ts";
import style from "../CSS/register.module.css";
const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const [file_valid, setFileValid] = useState(false);
  const [fileName, setFileName] = useState("Upload profile picture");
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type === "image/jpeg" || file.type === "image/png") {
        setFileValid(true);
        setFileName(file.name);
      } else {
        setFileValid(false);
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setUsername(e.target[0].value);

    const salt = bcrypt.genSaltSync(10);
    setPassword(bcrypt.hashSync(e.target[2].value, salt));

    const file = e.target[3].files[0];
    console.log(username, email, password, file);

    try {
      //Create user
      const res = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className={style.registerForm}>
      {loading && (
        <p>
          <Loading />
        </p>
      )}
      {err && <p>Something went wrong</p>}
      {!loading && !err && (
        <>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label
            htmlFor="file-upload"
            className={
              style.customUpload +
              " " +
              (file_valid ? style.fileValid : style.fileInvalid)
            }
          >
            {file_valid ? (
              <Unicons.UilCheckCircle />
            ) : (
              <Unicons.UilCloudUpload />
            )}
            <p>{fileName}</p>
          </label>
          <input
            id="file-upload"
            type="file"
            accept="jpg, png"
            onChange={(e) => {
              handleFile(e);
            }}
          />

          <button type="submit" className="shine">
            Register
          </button>
        </>
      )}
    </form>
  );
};

export default Register;
