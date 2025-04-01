import { Link } from "react-router-dom";

import Wrapper from "../Wrapper/Wrapper";
import NavList from "./NavList/NavList";

import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="py-5 sticky top-0 bg-white z-20">
      <Wrapper className="flex items-center justify-between gap-5">
        <a
          to="https://ipu-edu.uz/"
          className="flex items-center gap-2 max-[425px]:gap-2.5"
          title="universitet sahifasiga o'tish"
        >
          <img src={logo} alt="logo" className="h-12" />
          <span className="w-[110px] text-sm/[100%] text-[#18174b] font-bold uppercase">
            iqtisodiyot <br />
            va pedagogika universiteti
          </span>
        </a>
        <NavList />
      </Wrapper>
    </header>
  );
}
