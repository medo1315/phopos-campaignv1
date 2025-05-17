import React from "react";

const doctors = [
  {
    name: "د. علياء هاشم",
    title: "مستشار النسخة العلمية والعلاج السلوكي والعدلي",
    address: "عنوان والعلامة القديمة بجوار حول النصر والصيدلية و على علمان",
    phone: "01149231044",
    image: new URL("assets/img/doc1.png", import.meta.url).href,
  },
  {
    name: "د. ميسرة أحمد المهدي",
    title: "دكتوراه صحة نفسية",
    address: "شارع أحمد عرابي بجوار حلقة الاخلاص برج العامة الدور الأول علوي",
    phone: "01066616738",
    image: new URL("assets/img/doc2.png", import.meta.url).href,
  },
  {
    name: "د. جو زیان مکرم",
    title: "استشاري الطب النفسي",
    address: "العنوان و من شبرا قول بنك مصر - محطة روان الفرح",
    phone: "01223666336",
    image: new URL("assets/img/doc3.png", import.meta.url).href,
  },
  {
    name: "د /احمد سعيد",
    title: "استشاري الطب النفسي",
    address: "شارع النصر، المنطقة الأولى، مدينة نصر، محافظة القاهرة",
    phone: "01022630411",
    image: new URL("assets/img/doc4.jpg", import.meta.url).href,
  },
  {
    name: "دكتوره هاجر اليماني",
    title: "اخصائي نفسي اكلنكي",
    address: "السويس شارع قصر الديكور أمام اسماك السويسي وبجوار فرن الشعراوى",
    phone: "01050780261 - 01050780257",
    image: new URL("assets/img/doc5.jpg", import.meta.url).href,
  },
  {
    name: "دكتوره ايمان جمال",
    title: "اخصائي معالج نفسي و معالج شعوري للمراهقين و البالغين - جامعة القاهره",
    address: "الشيخ زايد: ميدان الافق - الحي السابع / مدينة نصر: مكرم عبيد",
    phone: "16676",
    image: new URL("assets/img/doc6.jpg", import.meta.url).href,
  },
  {
    name: "لايف كوتش ايمان جميلة",
    title: "متخصصة في العلاج النفسي والارشاد الاسري وتعديل السلوك و علاج مشاكل المراهقة",
    address: "",
    phone: "01025317757",
    image: new URL("assets/img/doc11.jpg", import.meta.url).href,
  },
  {
    name: "لايف كوتش سارة سعد",
    title: "اخصائئ الصحة النفسية، لايف كوتش، مدرب مهارات وتنمية بشرية، مدرب اعداد قادة وادارة الازمات",
    address: "",
    phone: "01010471217",
    image: new URL("assets/img/doc7.jpg", import.meta.url).href,
  },
  {
    name: "الاستشارية منه الشوادفي",
    title: "استشاري علاقات أسرية وتربوية وصحة نفسية ولايف كوتش معتمدة من UCB الكندية",
    address: "",
    phone: "",
    image: new URL("assets/img/doc8.jpg", import.meta.url).href,
  },
  {
    name: "الاسشاري ايمان فتحي",
    title: "اخصائية الإرشاد النفسي والزواجي، معالج معرفي وسلوكي، وتعديل سلوك وتنمية مهارات",
    address: "",
    phone: "01001368961",
    image: new URL("assets/img/doc9.jpg", import.meta.url).href,
  },
  {
    name: "الاستشارية: منى كمال زهران",
    title: "اخصائية نفسي وإرشاد أسري، اضطرابات نفسية، إدمان، مقاييس نفسية، تعديل سلوك الأطفال والمراهقين",
    address: "",
    phone: "01025370979",
    image: new URL("assets/img/doc10.jpg", import.meta.url).href,
  },
];


const DoctorCard = ({ doctor }) => (
  <div className="rounded-2xl bg-gradient-to-br from-white to-sky-50 border border-sky-100 shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center gap-2">
    <img
      src={doctor.image}
      alt={doctor.name}
      className="w-32 h-32 rounded-xl object-cover shadow"
    />
    <h3 className="text-sky-700 font-bold text-lg">{doctor.name}</h3>
    <p className="text-sm text-gray-600">{doctor.title}</p>
    {doctor.address && (
      <p className="text-sm text-gray-500">📍 {doctor.address}</p>
    )}
    {doctor.phone && (
      <p className="text-sm text-gray-800 mt-1">📞 {doctor.phone}</p>
    )}
  </div>
);

export default function DoctorsList() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center text-sky-700 mb-8 border-b pb-2">دليل الأطباء</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}
