import maruzaIcon from "../assets/icons/maruza.svg";
import slideIcon from "../assets/icons/slide.svg";
import adabiyotlar from "../assets/icons/adabiyotlar.svg";

const pageResourece = {
  maruzalar: {
    icon: maruzaIcon,
    title: "maruzalar",
    catigory: "maruza",
    items: [
      {
        id: 1,
        name: "SUG‘URTANING IQTISODIY MOHIYaTI, FUNKSIYaLARI VA BOZOR MUNOSABATLARIDAGI O‘RNI",
        url: "https://docs.google.com/document/d/1gZRscmqm70rBmyu2LBj-lF0R9Dpcs6wq/edit?usp=sharing&ouid=110772913400810972255&rtpof=true&sd=true",
      },
      {
        id: 2,
        name: "Sug‘urta faoliyatini amalga oshirishning huquqiy asoslari",
        url: "https://docs.google.com/document/d/1pLZlDYNYGNMgeBGGskEp1nGgddaB-_sN/edit?usp=sharing&ouid=110772913400810972255&rtpof=true&sd=true",
      },
      {
        id: 3,
        name: "СУҒУРТАДА ТАРИФ СИЁСАТИ",
        url: "https://docs.google.com/document/d/1tCVyVJ8kPuW9nfUC45Mm9GrLyx59vbB2/edit?usp=sharing&ouid=110772913400810972255&rtpof=true&sd=true",
      },
      {
        id: 4,
        name: "Sug‘urta kompaniyasining moliyaviy asoslari. Shaxsiy sug‘urta. Javobgarlikni sug‘urta qilish.",
        url: "https://docs.google.com/document/d/1SZPQlwWjtc3Kgq7KDfL1GLHpKju-y3Ef/edit?usp=sharing&ouid=110772913400810972255&rtpof=true&sd=true",
      },
      {
        id: 5,
        name: "Majburiy davlat sug‘urta turlari va ularni o‘ziga",
        url: "https://docs.google.com/document/d/1MG4a0id2uUUQ8vSgPUrnPbksYyxbp4cN/edit?usp=sharing&ouid=110772913400810972255&rtpof=true&sd=true",
      },
      {
        id: 6,
        name: "Qayta sug‘urta qilish asoslari. Sug‘urta tashkilotlarining investitsiya faoliyati. Sug‘urta tashkilotlarida marketing strategiyasi.",
        url: "https://docs.google.com/document/d/1_6WTh7fzBnjpdQ8ocO3gQFOIWMWPqomf/edit?usp=sharing&ouid=110772913400810972255&rtpof=true&sd=true",
      },
    ],
  },
};

const pageList = [];

for (let key in pageResourece) {
  pageList.push({
    slug: key,
    title: pageResourece[key].title,
    icon: pageResourece[key].icon,
  });
}

export { pageResourece, pageList };
