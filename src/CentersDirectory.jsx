import React from "react";

// data/centersData.js
 const centers  = [
  {
    name: "مركز عكاشة للطب النفسي",
    description: "عنوان / مستشفى الدمرداش",
    location: "2- فرع مصر الجديدة - ٣ شارع النزهة ميدان تريوسف",
    phone: "0224346918",
    image: new URL("assets/img/cen1.png", import.meta.url).href,
  },
  {
    name: "نيو لايف سنتر",
    description: "1- فرع المهندسين - ٢ شارع سوريا الدور الثاني فوق توشيبا العربي",
    location: "2- فرع مصر الجديدة - ٣ شارع النزهة ميدان تريوسف",
    phone: "01069437512 / 01222154741 / 01013588104",
    image: new URL("assets/img/cen2.png", import.meta.url).href,
  },
  {
    name: "مركز ادراك الطب النفسي",
    description: "عنوان 95 حافظ رمضان المنطقة السادسة، مدينة نصر",
    location: "2- فرع مصر الجديدة - ٣ شارع النزهة ميدان تريوسف",
    phone: "01288000690",
    image: new URL("assets/img/cen3.png", import.meta.url).href,
  },
  {
    name: "سيكوثيرابى للصحة النفسية",
    description: "دكتور خيرى شعراوى إستشارى العلاج النفسى والإرشاد الأسرى",
    location: "شارع شبرا - شبرا مصر – القاهره",
    phone: "01222766684",
    image: new URL("assets/img/cen5.jpg", import.meta.url).href,
  },
  {
    name: "مركز معآ",
    description: "للطب النفسي وعلاج الإدمان",
    location: "شارع الجيش اعلي الفاروق للسجاد بمحافظه السويس",
    phone: "01202047263",
    image: new URL("assets/img/cen6.jpg", import.meta.url).href,
  },
  {
    name: "Care Clinic عيادة كير",
    description: "For Psychiatry & Addictin للطب النفسي وعلاج الادمان",
    location: "فرع الهرم أمام السجل المدني فوق محل شعبان للملابس الدور الرابع",
    phone: "01032067454",
    image: new URL("assets/img/cen7.jpg", import.meta.url).href,
  },
  {
    name: "عيادات رؤيا التخصصية",
    description: "",
    location: "السويس خلف موقف بورتوفيق الجديد ـ اعلي محل الغفير",
    phone: "01008238230",
    image: new URL("assets/img/cen8.jpg", import.meta.url).href,
  },
  {
    name: "دار ابو العزايم للطب النفسي",
    description: "",
    location:
      "المقطم - خلف نادي الصيد الجديد - بجوار مدرسة المستقبل - محور حسب الله الكفراوى",
    phone: "01000048807 / 01207338888 / 0227292701",
    image: new URL("assets/img/cen9.jpg", import.meta.url).href,
  },
  {
    name: "مركز إنسايت للطب النفسي",
    description: "",
    location: "21 شارع الخليفة المأمون، روكسي، الدور 2",
    phone: "01050004806",
    image: new URL("assets/img/cen10.jpg", import.meta.url).href,
  },
  {
    name: "بيرسونا",
    description: "للطب النفسي و علاج الإدمان",
    location: "عدة فروع: وسط البلد، حلوان، الهرم، المعادي، شبرا، عين شمس، المهندسين، فيصل",
    phone: "01015810833",
    image: new URL("assets/img/cen4.jpg", import.meta.url).href,
  },
];

const CenterCard = ({ center }) => (
  <div className="rounded-2xl bg-gradient-to-br from-white to-sky-50 border border-sky-100 shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center gap-2">
    <img
      src={center.image}
      alt={center.name}
      className="w-32 h-32 rounded-xl object-cover shadow"
    />
    <h3 className="text-sky-700 font-bold text-lg">{center.name}</h3>
    <p className="text-sm text-gray-600">{center.description || '—'}</p>
    <p className="text-sm text-gray-500">{center.location ? `📍 ${center.location}` : '—'}</p>
    {center.phone && (
      <p className="text-sm text-gray-800 mt-1">📞 {center.phone}</p>
    )}
  </div>
);

export default function CentersDirectory() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center text-sky-700 mb-8 border-b pb-2">دليل المراكز</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {centers.map((center, index) => (
          <CenterCard key={index} center={center} />
        ))}
      </div>
    </div>
  );
}
