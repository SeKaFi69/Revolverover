import Nav_def from "../../Components/TS/Nav_def";
import style from "./Home.module.css";
function Home() {
  return (
    <div className="container-nav">
      <Nav_def></Nav_def>
      <div className={style.home}></div>
    </div>
  );
}

export default Home;
