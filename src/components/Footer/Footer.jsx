import Wrapper from "../Wrapper/Wrapper";

import Telegram from "../IconComponents/Telegram";
import FaceBook from "../IconComponents/FaceBook";

import { telegram, faceBook } from "../../resource/socialMedia";

export default function Footer() {
  return (
    <footer
      className="py-7.5 shadow-[0px_-1px_10px_#fff] bg-white"
      id="contact"
    >
      <Wrapper className="flex items-center gap-5 justify-between max-[600px]:flex-col">
        <h2 className="select-none text-xl text-[#0f0f0f] font-bold">
          Bog'lanish
        </h2>
        <ul className="flex items-center gap-5">
          <li className="cursor-pointer hover:**:fill-[#37AEE2]">
            <a href={telegram} target="_blank">
              <Telegram className="*:duration-300" />
            </a>
          </li>
          <li className="cursor-pointer hover:**:fill-[#1877F2]">
            <a href={faceBook} target="_blank">
              <FaceBook className="**:duration-300" />
            </a>
          </li>
        </ul>
      </Wrapper>
    </footer>
  );
}
