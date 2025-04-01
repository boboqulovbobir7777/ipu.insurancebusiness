import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { useCallback, useRef, useState } from "react";

import "./navList.scss";

export default function NavList() {
  let [menu, setMenu] = useState(false);
  let input = useRef();

  const closeMenu = useCallback(() => {
    input.current.checked = false;
    setMenu(false);
  }, []);

  return (
    <>
      <ul className={"header-navbar" + (menu ? " active" : "")}>
        <li onClick={closeMenu}>
          <Link to="/">bosh sahifa</Link>
        </li>
        <li onClick={closeMenu}>
          <ScrollLink onClick={closeMenu} to="about" offset={-88}>
            haqida
          </ScrollLink>
        </li>
        <li onClick={closeMenu}>
          <ScrollLink onClick={closeMenu} to="resource" offset={-88}>
            manbalar
          </ScrollLink>
        </li>
        <li onClick={closeMenu}>
          <ScrollLink onClick={closeMenu} to="contact" offset={-88}>
            bog'lanish
          </ScrollLink>
        </li>
      </ul>
      <div className="burger-continer">
        <input
          type="checkbox"
          id="burger-checkbox"
          className="burger-checkbox"
          onChange={() => setMenu(!menu)}
          ref={input}
        />
        <label className="burger" htmlFor="burger-checkbox"></label>
      </div>
    </>
  );
}
