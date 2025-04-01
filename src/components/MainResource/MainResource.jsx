import { Link } from "react-router-dom";

import Wrapper from "../Wrapper/Wrapper";

import { pageList } from "../../resource/pageResourece";

export default function MainResource() {
  return (
    <section className="mb-25" id="resource">
      <Wrapper className="text-center">
        <h3 className="text-3xl font-bold mb-10">Manbalar</h3>
        <ul className="flex justify-around gap-5 flex-wrap">
          {pageList.map((e, i) => (
            <li
              key={i}
              className="w-[140px] p-2 rounded-2xl duration-300 hover:-translate-y-1 hover:shadow-[0px_4px_5px_#000]"
            >
              <Link
                to={"/" + e.slug}
                className="flex flex-col items-center gap-2"
              >
                <img src={e.icon} width={50} alt={e.title} />
                <span className="font-bold first-letter:uppercase text-lg">
                  {e.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
}
