import React from 'react';

function TypesPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-5xl mx-auto space-y-12 text-right">
        
    
        {/* أنواع الرهاب الاجتماعي */}
        <section className="bg-white rounded-xl shadow p-6 space-y-6">
          <h3 className="text-2xl font-semibold text-center text-sky-700 mb-4">أنواع الرهاب الاجتماعي</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-sky-50 rounded-lg p-4 border-r-4 border-sky-300">
              <h4 className="text-lg font-semibold text-sky-700 mb-2">الرهاب الاجتماعي المعمم</h4>
              <ul className="list-disc pr-5 space-y-2 text-gray-800 text-base leading-relaxed">
                <li>قلق مفرط ومستمر بشأن أمور حياتية متعددة دون سبب واضح.</li>
                <li>يؤثر بشكل كبير على الحياة اليومية.</li>
                <li>يشعر بالخوف من معظم التفاعلات الاجتماعية.</li>
              </ul>
            </div>
            <div className="bg-sky-50 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-sky-700 mb-2">الرهاب الاجتماعي المحدد</h4>
              <ul className="list-disc pr-5 space-y-2 text-gray-800 text-base leading-relaxed">
                <li>الخوف موجه إلى مواقف اجتماعية محددة فقط.</li>
                <li>مثل التحدث أمام الجمهور أو إجراء مقابلة عمل.</li>
                <li>تأثيره على الحياة اليومية أقل من المعمم.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* تأثير الرهاب الاجتماعي */}
  <section className="p-6 bg-white shadow-lg rounded-lg">
  <div className="flex flex-col sm:flex-row-reverse items-center gap-6 text-right">
    <div className="sm:w-1/2 w-full flex justify-center items-center">
      <img
        src="/assets/ChatGPT2.png"
        alt="تأثير الرهاب الاجتماعي"
        className="max-w-full h-auto rounded-lg shadow"
      />
    </div>
    <div className="sm:w-1/2 w-full">
      <h2 className="text-2xl font-bold text-sky-700 mb-4">تأثير الرهاب الاجتماعي على حياة الأفراد</h2>
      <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-gray-800">
        <li>صعوبة طلب المساعدة، حتى في الأمور البسيطة.</li>
        <li>القلق المستمر قبل المواقف الاجتماعية.</li>
        <li>الاكتئاب وفقدان الاهتمام بالأنشطة اليومية.</li>
        <li>العزلة الاجتماعية وتجنب التفاعل.</li>
        <li>انخفاض الثقة بالنفس وتقدير الذات.</li>
        <li>صعوبة في بناء العلاقات وتطويرها.</li>
        <li>تجنب الأنشطة الاجتماعية مثل المناسبات والحفلات.</li>
        <li>صعوبة في العمل الجماعي أو تقديم العروض.</li>
        <li>تجنب المناصب القيادية بسبب الخوف من المسؤولية.</li>
        <li>أعراض جسدية مثل التعرق، احمرار الوجه، وتسارع ضربات القلب.</li>
      </ul>
    </div>
  </div>
</section>


        {/* الرهاب الاجتماعي والتحصيل الدراسي */}
     <section className="p-6 bg-white shadow-lg rounded-lg">
  <div className="flex flex-col sm:flex-row-reverse items-center gap-6 text-right">
    <div className="sm:w-1/2 w-full flex justify-center items-center">
      <img
        src="/assets/ChatGPT1.png"
        alt="الرهاب الاجتماعي والتحصيل الدراسي"
        className="max-w-full h-auto rounded-lg shadow"
      />
    </div>
    <div className="sm:w-1/2 w-full">
      <h2 className="text-2xl font-bold text-sky-700 mb-4">الرهاب الاجتماعي وعلاقته بالتحصيل لدى الطلبة</h2>
      <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-gray-800">
        <li>صعوبات في الأداء الأكاديمي بسبب القلق من التقييم أو النقد.</li>
        <li>تجنب الأنشطة الصفية والمشاركة داخل الفصل.</li>
        <li>درجات أقل من الطلبة غير المصابين بالرهاب الاجتماعي.</li>
        <li>القلق العام وانخفاض الثقة بالنفس يزيدان من صعوبة إنجاز المهام الدراسية.</li>
        <li>الخوف من الفشل قد يؤدي إلى التسويف وتأجيل الدراسة.</li>
        <li>الإناث يظهرن مستويات أعلى من القلق الاجتماعي مقارنة بالذكور.</li>
      </ul>
    </div>
  </div>
</section>

      </div>
    </div>
  );
}

export default TypesPage;
