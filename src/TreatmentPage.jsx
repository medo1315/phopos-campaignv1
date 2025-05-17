import React from 'react';
import { Link } from 'react-router-dom';

function TreatmentPage() {
  return (
    <div className="min-h-screen bg-gray-100" dir="rtl">
      <main className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <section className="p-6 bg-white shadow-lg rounded-lg text-right">
            <h2 className="text-2xl font-bold mb-6 text-sky-800">طرق التخلص من الرهاب الاجتماعي</h2>
            <ol className="list-decimal list-inside space-y-4 text-lg leading-loose text-gray-800">
              <li><span className="font-semibold">تعزيز الثقة بالنفس:</span> دعم الأفراد الذين يعانون من الرهاب الاجتماعي يساعدهم على بناء الثقة بأنفسهم، مما يجعلهم أكثر قدرة على التفاعل مع الآخرين.</li>
              <li><span className="font-semibold">الخروج من العزلة الاجتماعية:</span> الشباب الذين يعانون من العزلة بحاجة لمن يشجعهم ويقف بجانبهم. الإندماج والدعم يمكن أن يساعدهم في تحسين تواصلهم الاجتماعي.</li>
              <li><span className="font-semibold">تحسين الصحة النفسية:</span> الدعم النفسي يقلل من مستويات القلق والاكتئاب التي قد تصاحب الرهاب الاجتماعي، مما يعطيهم الأمل والدافع للتغيير.</li>
              <li><span className="font-semibold">تعزيز الوعي والتفاهم:</span> الدعم يمكن أن يأتي من الأصدقاء أو العائلة، حتى المحترفين في الصحة النفسية. هذا يساعد في خلق بيئة أكثر تفهمًا.</li>
              <li><span className="font-semibold">تحقيق التغيير التدريجي:</span> الدعم يشمل التشجيع على طلب المساعدة والعلاج مثل العلاج السلوكي المعرفي أو الجماعي، مما يساعد الشباب على تحسين مهارات التواصل.</li>
              <li><span className="font-semibold">تقليل الشعور بالخجل أو العار:</span> عندما يشعر الشباب أن الدعم المناسب متوفر، يكونون أكثر استعدادًا للتحدث عن مشاعرهم وفهمها، مما يقلل من الخوف المرتبط بالرهاب الاجتماعي.</li>
            </ol>
          </section>

          {/* أزرار التواصل */}
          <section className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/doctors"
              className="bg-sky-600 text-white font-medium py-3 px-6 rounded-lg shadow hover:bg-sky-700 transition duration-300"
            >
              تواصل مع طبيب
            </Link>
            <Link
              to="/centers"
              className="bg-sky-500 text-white font-medium py-3 px-6 rounded-lg shadow hover:bg-sky-600 transition duration-300"
            >
              ابحث عن مركز علاج
            </Link>
          </section>

        </div>
      </main>
    </div>
  );
}

export default TreatmentPage;
