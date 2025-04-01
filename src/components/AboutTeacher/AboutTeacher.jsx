import { useState } from "react";

import Wrapper from "../Wrapper/Wrapper";

import teacherImage from "../../assets/teacher.png";

export default function AboutTeacher() {
  let [allText, setAllText] = useState(false);
  return (
    <section className="mb-15">
      <Wrapper className="flex items-center justify-between gap-10 max-md:flex-col-reverse ">
        <div className="flex flex-col gap-5 max-w-[700px]">
          <h3 className="text-xl font-semibold">Ziyoyev Jamshid Nu’monovich</h3>
          <div className="h-[1px] bg-black"></div>
          <p className="select-none">
            2002–2006 yillarda Toshkent Moliya Universitetining Buxgalteriya
            hisobi va audit fakultetida tahsil olgan. Mehnat faoliyatini
            2010–2011 yillarda Qashqadaryo viloyati Kitob tumani budjetdan
            tashqari Pensiya jamg‘armasi bo‘limida bosh hisobchi sifatida
            boshlagan. 2011–2012 yillarda ushbu bo‘limda mablag‘lar ehtiyojini
            aniqlash, buxgalteriya hisobi va hisoboti sektori 1-toifali
            inspektori lavozimida ishlagan.
            {allText
              ? "2012–2017 yillarda esa Kitob tumani Pensiya jamg‘armasi bo‘limi boshlig‘i o‘rinbosari – mablag‘lar ehtiyojini aniqlash, buxgalteriya hisobi va hisoboti sektori rahbari lavozimida faoliyat yuritgan. 2017-yildan boshlab esa Qashqadaryo viloyati Shahrisabz shahar budjetdan tashqari Pensiya jamg‘armasi bo‘limi boshlig‘i lavozimida ishlamoqda."
              : ""}
            <span
              className="cursor-pointer points text-blue-600"
              title={allText ? "yashirish" : "ko'proq malumot"}
              onClick={() => setAllText(!allText)}
            >
              {allText ? "(yashirish)" : "(davomi ko'rish uchun bosing...)"}
            </span>
          </p>
        </div>
        <div className="max-w-2xs w-full max-md:w-[150px] rounded-2xl overflow-hidden">
          <img src={teacherImage} alt="Teacher" className="w-full" />
        </div>
      </Wrapper>
    </section>
  );
}
