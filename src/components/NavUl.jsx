

function NavUl(props) {

  return (
    <li
      className="nav-li "
      onClick={() => {
        // setClassName("nav-li x");
        props.onChecked(props.id);
      }}
    ></li>
  );
}

export default NavUl;
