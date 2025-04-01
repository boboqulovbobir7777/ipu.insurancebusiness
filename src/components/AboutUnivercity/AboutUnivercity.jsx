import Wrapper from "../Wrapper/Wrapper";

export default function AboutUnivercity() {
  return (
    <section className="mb-15">
      <Wrapper className="flex items-center justify-between flex-row-reverse gap-10 max-[1024px]:flex-col-reverse ">
        <div className="flex flex-col gap-5 max-w-[700px]">
          <h3 className="text-xl font-semibold">
            IQTISODIYOT VA PEDAGOGIKA UNIVERSITETI
          </h3>
          <div className="h-[1px] bg-black"></div>
          <p className="select-none">
            Akademik mukammallik, halollik va xizmat ko'rsatish tamoyillari
            asosida tashkil etilgan IQTISODIYOT VA PEDAGOGIKA UNIVERSITETI
            2022-yilda tashkil etilganidan beri o'rganish va innovatsiyalar
            uchun mayoq bo'lib kelmoqda. Intellektual izlanish an'analariga
            asoslangan bizning muassasamiz odamlarga o'zlarining to'liq
            salohiyatini ro'yobga chiqarish va jamiyatga mazmunli hissa qo'shish
            imkoniyatini beradigan mukammallik madaniyatini rivojlantirishga
            bag'ishlangan.{" "}
            <a href="https://ipu-edu.uz/" className="text-blue-600">
              (Universitet asosiy sahifasiga o'tish uchun bosing)
            </a>
          </p>
        </div>
        <div className="max-w-[600px] shrink-0 w-full overflow-hidden rounded-2xl">
          <img
            src="https://ipu-edu.uz/static/media/building.9c7c1e8770ed70fd453a.JPG"
            alt="Teacher"
            className="w-full"
          />
        </div>
      </Wrapper>
    </section>
  );
}
