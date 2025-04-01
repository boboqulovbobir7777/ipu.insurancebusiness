import PageTop from "../components/PageTop/PageTop";

export default function PageNotFound() {
  return (
    <PageTop wrapStyle="flex items-center flex-col text-white capitalize font-bold py-20">
      <h2 className="text-8xl">404</h2>
      <p className="text-xl">sahifa topilmadi</p>
    </PageTop>
  );
}
