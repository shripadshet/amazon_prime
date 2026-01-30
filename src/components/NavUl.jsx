

function NavUl(props) {

  return (
    <button
      className="nav-li "
      onClick={() => {
        // setClassName("nav-li x");
        props.onChecked(props.id);
      }}
    ></button>
  );
}

export default NavUl;
