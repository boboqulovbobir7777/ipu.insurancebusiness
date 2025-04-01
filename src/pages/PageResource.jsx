import PageTop from "../components/PageTop/PageTop";
import ListResource from "../components/ListResource/ListResource";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { pageResourece } from "../resource/pageResourece";

export default function PageResource() {
  const params = useParams();
  const { pathname } = useLocation();

  if (!Object.keys(pageResourece).includes(params.slug)) {
    window.location.href = "error";
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <PageTop wrapStyle="mb-15 flex items-center flex-col text-white capitalize font-bold py-20 max-md:py-10 max-md:mb-10">
        <h2 className="text-8xl max-md:text-3xl">
          {pageResourece[params.slug].title}
        </h2>
      </PageTop>
      <ListResource
        resource={pageResourece[params.slug]}
        img={pageResourece[params.slug].icon}
      />
    </>
  );
}
