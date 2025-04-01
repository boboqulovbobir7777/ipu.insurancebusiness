import silabus from "../../resource/silabus";

export default function AboutScience() {
  return (
    <div className="flex flex-col items-center gap-5 text-center text-white py-20">
      <h1 className="text-3xl font-semibold">Sug‘urta ishi</h1>
      <p className="max-w-[900px] text-xl max-[425px]:text-base select-none">
        Sug‘urta ishi – bu moliyaviy xavflarni kamaytirish va yo‘qotishlarni
        qoplash maqsadida sug‘urta polislarini tuzish, mablag‘larni yig‘ish va
        tovon pullarini to‘lash bilan bog‘liq iqtisodiy faoliyat turidir.
        Sug‘urta jamiyatning moliyaviy barqarorligini ta’minlashga xizmat qiladi
        va turli xavflardan himoya qilish vositasi hisoblanadi.
      </p>
      <a
        href={silabus}
        className="block p-[12px_40px] bg-[#23d59c] rounded-[25px] duration-300 min-md:hover:bg-[#ffee00] active:bg-[#00cbff]"
        target="_blank"
      >
        Silabus
      </a>
    </div>
  );
}
