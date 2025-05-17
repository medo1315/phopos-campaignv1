import React from 'react';

function CausesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 space-y-10">

        {/* العنوان والمقدمة */}
        <div className="text-right space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-700">أسباب الرهاب الاجتماعي</h2>
          <p className="text-gray-700 leading-relaxed text-lg sm:text-xl">
            تتعدد وتتنوع أسباب الرهاب الاجتماعي، وتشمل عوامل وراثية، نفسية، وبيئية، وهي كالتالي:
          </p>
        </div>

        {/* الأسباب */}
        <ol className="list-decimal list-inside space-y-8 text-gray-800 text-lg leading-relaxed pr-2">

          {/* 1. العوامل الوراثية */}
          <li>
            <span className="font-semibold text-sky-700">العوامل الوراثية:</span> 
            <span> قد تلعب العوامل الجينية دورًا في حدوث الرهاب الاجتماعي، حيث يزداد خطر الإصابة إذا كان أحد أفراد الأسرة يعاني منه.</span>
          </li>

          {/* 2. اختلال توازن النواقل العصبية */}
          <li>
            <span className="font-semibold text-sky-700">اختلال توازن النواقل العصبية:</span> 
            <span> وجود خلل في توازن بعض النواقل العصبية في الدماغ، مثل الدوبامين، السيروتونين، والغلوتامات، قد يسبب أعراض الرهاب.</span>
          </li>

          {/* 3. العوامل البيئية */}
          <li>
            <span className="font-semibold text-sky-700">العوامل البيئية:</span>
            <ul className="list-disc pr-6 mt-3 space-y-2 text-base sm:text-lg text-gray-600">
              <li>التعرض لمواقف محرجة أو مؤلمة في الطفولة.</li>
              <li>المرور بتجارب تنمر أو إذلال أمام الآخرين.</li>
              <li>الخلافات والمشاكل الأسرية المستمرة.</li>
              <li>المعاناة من أمراض مزمنة تؤثر على النفسية.</li>
              <li>أسلوب التربية الصارمة أو المفرطة في الحماية.</li>
              <li>الخجل المفرط والانسحاب الاجتماعي منذ الصغر.</li>
            </ul>
          </li>
        </ol>

        {/* صورة توضيحية */}
        <div className="flex justify-center mt-10">
          <img
            src="/assets/causes-illustrations.png"
            alt="أسباب الرهاب الاجتماعي - رسم توضيحي"
            className="rounded-xl shadow-lg w-full max-w-3xl h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default CausesPage;
