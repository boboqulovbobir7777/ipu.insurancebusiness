import Wrapper from "../Wrapper/Wrapper";

import fanDasturiIcon from "../../assets/icons/fanDasturi.svg";

import qushimcha from "../../resource/qushimcha";

export default function Qushimcha() {
  return (
    <section className="mb-25" id="resource">
      <Wrapper className="text-center">
        <h3 className="text-3xl font-bold mb-10">Qushimcha Manbalar</h3>
        <ul className="flex justify-around gap-5 flex-wrap">
          {qushimcha.map((e, i) => (
            <li
              key={i}
              className="w-[180px] p-2 rounded-2xl duration-300 hover:-translate-y-1 hover:shadow-[0px_4px_5px_#000]"
            >
              <a
                href={e.url}
                target="_blank"
                className="flex flex-col items-center gap-2"
              >
                <img src={e.icon} width={50} alt="fan dasturi" />
                <span className="font-bold text-lg/[100%] first-letter:uppercase">
                  {e.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
}
