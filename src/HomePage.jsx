import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function HomePage() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [positiveAnswers, setPositiveAnswers] = useState(0);

  const phrases = [
    "ابدأ رحلتك نحو الثقة بالنفس.",
    "نحن هنا لدعمك في كل خطوة.",
    "الرهاب الاجتماعي ليس نهاية الطريق.",
    "مع فوبوس... الدعم مستمر."
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  const teamImages = ["/assets/team-image.png", "/assets/team1.jpg", "/assets/team2.jpg", "/assets/team3.jpg"];
  const [currentTeamImage, setCurrentTeamImage] = useState(0);

  const quizRef = useRef(null);

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);

    const imageInterval = setInterval(() => {
      setCurrentTeamImage((prev) => (prev + 1) % teamImages.length);
    }, 4000);

    return () => {
      clearInterval(phraseInterval);
      clearInterval(imageInterval);
    };
  }, []);

  const questions = [
    { text: 'هل تتجنب المواقف الاجتماعية خوفًا من الإحراج أو النقد؟' },
    { text: 'هل تشعر بالتوتر عند التحدث أمام جمهور؟' },
    { text: 'هل تتجنب بدء المحادثات مع الغرباء؟' },
  ];

  const handleAnswer = (isPositive) => {
    if (isPositive) setPositiveAnswers(positiveAnswers + 1);
    setQuizStep(quizStep + 1);
  };

  const resetQuiz = () => {
    setShowQuiz(false);
    setQuizStep(0);
    setPositiveAnswers(0);
  };

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = () => {
    navigator.clipboard.writeText('https://phopos.netlify.app/');
    
  };

  const handleStartQuiz = () => {
    setShowQuiz(true);
    setTimeout(() => {
      quizRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      {/* Hero Section */}
      <header className="relative bg-cover bg-center aspect-[16/9] flex flex-col items-center justify-center text-white" style={{ backgroundImage: "url('/assets/hero-bg.png')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            فوبوس مش حملة، دي رسالة لكل قلب حاسس إنه لوحده.
          </motion.h1>
          <button onClick={handleStartQuiz} className="mt-6 bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-full shadow-md">
            هل تعاني من الرهاب الاجتماعي؟ اختبر نفسك
          </button>
        </div>
      </header>

      {/* Carousel Section */}
      <section className="bg-sky-50 py-6 text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentPhraseIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl font-medium text-sky-700"
          >
            {phrases[currentPhraseIndex]}
          </motion.p>
        </AnimatePresence>
      </section>

      {/* Quiz Section */}
      {showQuiz && (
        <section ref={quizRef} className="py-12 px-4 bg-gradient-to-br from-sky-50 via-white to-sky-100 flex justify-center items-center min-h-screen">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-lg border border-sky-200">
            <h2 className="text-3xl font-bold mb-6 text-sky-700 text-center border-b pb-2">استبيان الرهاب الاجتماعي</h2>
            <AnimatePresence mode="wait">
              {quizStep < questions.length ? (
                <motion.div key={quizStep} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                  <p className="text-gray-800 text-lg mb-8 text-center">{questions[quizStep].text}</p>
                  <div className="flex flex-col gap-4">
                    <button onClick={() => handleAnswer(true)} className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-full shadow-lg transition">نعم، أشعر بذلك</button>
                    <button onClick={() => handleAnswer(false)} className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-full shadow-lg transition">لا، لا أشعر بذلك</button>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                  <p className="text-gray-800 text-lg mb-8 text-center">
                    {positiveAnswers > 1 ? "تشير إجاباتك إلى احتمالية وجود أعراض للرهاب الاجتماعي. نوصي بمراجعة مختص." : "لا تظهر عليك أعراض واضحة للرهاب الاجتماعي. استمر في دعم الآخرين."}
                  </p>
                  <button onClick={resetQuiz} className="bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-full shadow-lg w-full">إعادة المحاولة أو إغلاق</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      )}

      {/* Main Content */}
      <main className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* About Section */}
          <section className="mb-16 p-6 bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold text-sky-700 mb-3">القراء الأعزاء..</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              نقدم لحضراتكم مشروع التخرج الذي قدمه (اثنان وعشرون) طالبًا بالفرقة الرابعة بالمعهد الدولي العالي للإعلام بأكاديمية الشروق قسم العلاقات العامة والإعلان حيث نقدم حملة بعنوان (فوبوس) بهدف زيادة وعي المجتمع بالرهاب وأعراضه وتأثيراته ومساعدة المتضررين من الرهاب للبحث عن الطرق المناسبة للعلاج وتزويد أهل المصابين بالمعلومات والأساليب في مواجهة الرهاب الاجتماعي.
            </p>
            <img src={teamImages[currentTeamImage]} alt="فريق فوبوس" className="rounded-lg shadow-md w-full max-w-4xl mx-auto mt-8 transition-all duration-700" />
          </section>

          {/* Info Section */}
          <section className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg rounded-lg flex flex-col-reverse md:flex-row items-start text-right gap-8">
            <div className="md:w-2/3 flex flex-col gap-4">
  <p className="text-gray-700 leading-relaxed mb-4 text-lg">
    الرهاب الإجتماعي هو اضطراب نفسي شائع يتسم بالخوف الشديد والمستمر من المواقف الإجتماعية أو الأداء أمام الآخرين يشعر الأشخاص الذين يعانون منه بقلق مفرط من أن يُحكم عليهم أو يُنتقدوا مما يؤدي إلى تجنب المواقف التي قد تُعرضهم لذلك مثل التحدث أمام مجموعة أو التفاعل مع الغرباء أو حتى القيام بمهام بسيطة في وجود الآخرين.
  </p>
  <p className="text-gray-700 leading-relaxed mb-4 text-lg">
    يؤثر الرهاب الإجتماعي بشكل كبير على حياة الشخص اليومية سواء على مستوى العمل أو الدراسة أو العلاقات الإجتماعية قد يرافقه أعراض جسدية مثل التعرق، تسارع ضربات القلب، والإرتجاف مما يزيد من حدة التوتر.
  </p>
  <p className="text-gray-700 leading-relaxed mb-4 text-lg">
    يتجاوز الرهاب الإجتماعي كونه مجرد خجل طبيعي؛ فهو حالة نفسية تحتاج إلى التفاهم والدعم وقد يتطلب علاجًا متخصصًا من خلال العلاج السلوكي أو الأدوية لتحسين جودة حياة المصاب.
  </p>
  <p className="text-gray-700 leading-relaxed text-lg">
    كما يُنصح الأشخاص المحيطون بالفرد الذي يعاني من الرهاب الإجتماعي بتقديم الدعم العاطفي والتشجيع على طلب المساعدة المهنية، حيث يُمكن لتدخل مبكر أن يُحدث فرقًا كبيرًا في حياة الشخص.
  </p>
</div>

            <div className="md:w-1/3 flex flex-row md:flex-col gap-4 justify-center items-center w-full">
              <img src="/assets/info-image1.png" alt="توضيح للرهاب الاجتماعي" className="rounded-lg shadow-md w-[220px] sm:w-[250px] md:w-full max-w-[350px]" />
              <img src="/assets/info-image2.png" alt="توضيح آخر للرهاب الاجتماعي" className="rounded-lg shadow-md w-[220px] sm:w-[250px] md:w-full max-w-[350px]" />
            </div>
          </section>

          {/* Share Section */}
          <section className="mt-12 text-center">
            <h2 className="text-xl font-semibold mb-4">انشر الوعي مع أصدقائك</h2>
            <button onClick={handleShare} className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-full shadow-md">
              نسخ رابط المشاركة
            </button>
          </section>
        </div>
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-4 right-4 bg-sky-600 hover:bg-sky-700 text-white p-3 rounded-full shadow-lg z-50">
          ↑
        </button>
      )}
    </>
  );
}

export default HomePage;
