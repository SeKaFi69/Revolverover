import style from "./NavList.module.css";
interface navListProps {
  children: any;
}
function NavList(props: navListProps) {
  return (
    <nav>
      <ul className={style.shine}>{props.children}</ul>
    </nav>
  );
}

export default NavList;
