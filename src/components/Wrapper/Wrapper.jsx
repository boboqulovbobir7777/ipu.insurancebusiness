export default function Wrapper({ children, className }) {
  return (
    <div
      className={
        "max-w-[1200px] px-7.5 mx-auto max-[425px]:px-5" + " " + className
      }
    >
      {children}
    </div>
  );
}
