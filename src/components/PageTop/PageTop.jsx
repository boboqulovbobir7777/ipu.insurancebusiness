import Wrapper from "../Wrapper/Wrapper";

const background = "https://static.tildacdn.info/tild6163-6566-4238-b533-363961626237/cropped-1577.jpg";

export default function MainTop({ children, className, wrapStyle }) {
  return (
    <section
      id="about"
      className={
        "bg-cover bg-no-repeat bg-fixed bg-center relative" + " " + className
      }
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-20"></div>
      <Wrapper className={"relative z-10 " + wrapStyle}>{children}</Wrapper>
    </section>
  );
}
