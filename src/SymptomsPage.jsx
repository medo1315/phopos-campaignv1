import React from 'react';

function SymptomsPage() {
  return (
    <div className="min-h-screen bg-gray-100" dir="rtl">
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* الأعراض النفسية والسلوكية */}
          <section className="p-6 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col sm:flex-row-reverse items-center gap-6 text-right">
              
              {/* الصورة */}
              <div className="sm:w-1/2 w-full flex justify-center items-center">
                <img
                  src="/assets/image 73.png"
                  alt="أعراض الرهاب - نفسية"
                  className="max-w-full h-auto rounded-lg shadow"
                />
              </div>

              {/* النص */}
              <div className="sm:w-1/2 w-full">
                <h2 className="text-2xl font-bold text-sky-700 mb-4">1. الأعراض النفسية والسلوكية:</h2>
                <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-gray-800">
                  <li>الشعور بالتوتر الشديد والرهبة من مقابلة الغرباء، ومواجهة صعوبة في الحديث والتواصل معهم.</li>
                  <li>الحذر الشديد أمام الناس خوفًا من التعرض للإحراج أو النقد.</li>
                  <li>الخوف من ملاحظة الآخرين لقلقه وتوتره.</li>
                  <li>الشعور بالخجل الشديد والإحراج أمام الآخرين.</li>
                  <li>الخوف الشديد من حكم الآخرين عليه.</li>
                  <li>الشعور بالذعر والخوف أيام أو أسابيع قبل أي حدث اجتماعي.</li>
                  <li>تجنب المواقف الاجتماعية أو أي مواقف تثير الشعور بالقلق.</li>
                  <li>مواجهة صعوبة في إقامة العلاقات والصداقات والاحتفاظ بها.</li>
                  <li>التلعثم في الحديث وصعوبة التواصل البصري.</li>
                  <li>الإصابة بنوبات هلع.</li>
                  <li>قلة الثقة بالنفس ولوم النفس باستمرار.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* الأعراض الجسدية */}
          <section className="p-6 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col sm:flex-row-reverse items-center gap-6 text-right">
              
              {/* الصورة */}
              <div className="sm:w-1/2 w-full flex justify-center items-center">
                <img
                  src="/assets/image 72.png"
                  alt="أعراض الرهاب - جسدية"
                  className="max-w-full h-auto rounded-lg shadow"
                />
              </div>

              {/* النص */}
              <div className="sm:w-1/2 w-full">
                <h2 className="text-2xl font-bold text-sky-700 mb-4">2. الأعراض الجسدية:</h2>
                <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-gray-800">
                  <li>احمرار الوجه.</li>
                  <li>التعرق الشديد.</li>
                  <li>الارتعاش.</li>
                  <li>سرعة ضربات القلب.</li>
                  <li>الشعور بالغثيان.</li>
                  <li>الإحساس بالدوخة والدوار.</li>
                  <li>صعوبة التحدث أو التلعثم.</li>
                  <li>الارتباك وصعوبة التركيز.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default SymptomsPage;
