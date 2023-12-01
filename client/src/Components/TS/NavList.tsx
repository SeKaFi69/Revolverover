interface navListProps {
  children: any;
}
function NavList(props: navListProps) {
  return <nav>{props.children}</nav>;
}

export default NavList;
