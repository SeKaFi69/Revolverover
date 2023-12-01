import style from "../CSS/Loading.module.css";
function Loading() {
  return (
    <div className="container-nav">
      <div className={style.loader}></div>
    </div>
  );
}

export default Loading;
