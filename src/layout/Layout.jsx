import Header from "../components/Header/Header";
import Router from "../router/Router";
import Footer from "../components/Footer/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </>
  );
}
