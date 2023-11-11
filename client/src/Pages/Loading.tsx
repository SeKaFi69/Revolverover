import style from "./Loading.module.css";
import Nav_def from "../Components/Nav_def";
function Loading() {
  return (
    <div className="container-nav">
      <Nav_def></Nav_def>
      <div className={style.loader}></div>
    </div>
  );
}

export default Loading;
