import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import facebookImg from './assets/icons/face-removebg-preview.png';
import instagramImg from './assets/icons/insta-removebg-preview.png';
import tiktokImg from './assets/icons/tik-removebg-preview.png';

// Lazy Loading Pages
const CausesPage = lazy(() => import('./CausesPage.jsx'));
const SymptomsPage = lazy(() => import('./SymptomsPage.jsx'));
const TypesPage = lazy(() => import('./TypesPage.jsx'));
const HomePage = lazy(() => import('./HomePage.jsx'));
const CentersDirectory = lazy(() => import('./CentersDirectory.jsx'));
const DoctorsDirectory = lazy(() => import('./DoctorsDirectory.jsx'));
const TreatmentPage = lazy(() => import('./TreatmentPage.jsx'));

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { name: 'الرئيسية', path: '/', current: location.pathname === '/' },
    { name: 'أسباب الرهاب', path: '/causes', current: location.pathname === '/causes' },
    { name: 'أعراض الرهاب', path: '/symptoms', current: location.pathname === '/symptoms' },
    { name: 'أنواع الرهاب وتأثيره', path: '/types', current: location.pathname === '/types' },
    { name: 'طرق العلاج', path: '/treatment', current: location.pathname === '/treatment' },
    { name: 'الأطباء', path: '/doctors', current: location.pathname === '/doctors' },
    { name: 'المراكز', path: '/centers', current: location.pathname === '/centers' },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col" dir="rtl">
      
    <nav className={`fixed top-0 w-full z-50 ${location.pathname === '/' ? 'bg-sky-700/90' : 'bg-sky-700 shadow-lg'}`}>
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
    <div className="flex items-center justify-between h-20">
      
      {/* Logo and Campaign Title */}
     <Link to="/" className="flex items-center gap-3">
  <div className="bg-white rounded-full border border-sky-200 shadow-md h-20 w-20 flex items-center justify-center overflow-hidden">
    <img 
      src="/assets/logo-updated.png" 
      alt="Phopos Campaign Logo" 
      className="h-full w-full object-cover"
    />
  </div>
  <span className="hidden sm:inline text-white font-bold text-lg tracking-wide">
    حملة فوبوس للتوعية
  </span>
</Link>


      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-4 space-x-reverse">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              item.current ? 'bg-white text-sky-700 shadow' : 'text-white hover:bg-sky-600 hover:shadow'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden text-white p-2 rounded-md hover:bg-sky-600"
      >
        {isMobileMenuOpen ? '✖' : '☰'}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {isMobileMenuOpen && (
    <div className="md:hidden bg-sky-700 border-t border-sky-600">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          onClick={() => setIsMobileMenuOpen(false)}
          className={`block px-4 py-3 border-b border-sky-600 ${
            item.current ? 'bg-white text-sky-700' : 'text-white hover:bg-sky-600'
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )}
</nav>


      {/* ✅ Main Content */}
      <main className="flex-grow pt-24">
        <Suspense fallback={<div className="text-center py-20 text-sky-700">جاري التحميل...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/causes" element={<CausesPage />} />
            <Route path="/symptoms" element={<SymptomsPage />} />
            <Route path="/types" element={<TypesPage />} />
            <Route path="/treatment" element={<TreatmentPage />} />
            <Route path="/centers" element={<CentersDirectory />} />
            <Route path="/doctors" element={<DoctorsDirectory />} />
          </Routes>
        </Suspense>
      </main>

      {/* ✅ Structured Footer */}
      <footer className="bg-sky-700 text-white py-12 px-6 sm:px-12 border-t border-sky-600 shadow-inner">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center sm:text-right">

          <div>
            <h4 className="text-lg font-semibold mb-2">عن فوبوس</h4>
            <p className="text-sm text-sky-100 leading-relaxed">
              حملة توعوية تهدف لمساعدة كل من يعاني من الرهاب الاجتماعي وتوفير الدعم والمعلومات للبحث عن العلاج المناسب.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">روابط سريعة</h4>
            <ul className="text-sm text-sky-100 space-y-2">
              <li><Link to="/" className="hover:text-white">الرئيسية</Link></li>
              <li><Link to="/causes" className="hover:text-white">أسباب الرهاب</Link></li>
              <li><Link to="/symptoms" className="hover:text-white">أعراض الرهاب</Link></li>
              <li><Link to="/treatment" className="hover:text-white">طرق العلاج</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">تابعنا على</h4>
            <div className="flex justify-center sm:justify-start space-x-4 space-x-reverse">
              <a href="https://www.facebook.com/share/15LpaHUt1J/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <img src={facebookImg} alt="Facebook" className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/phopos_campaign?igsh=MzluZ2owOGk1dWx3" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <img src={instagramImg} alt="Instagram" className="h-6 w-6" />
              </a>
              <a href="https://www.tiktok.com/@phoposcamping?_t=ZS-8wJxU1mBMLS&_r=1" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <img src={tiktokImg} alt="TikTok" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-sky-600 pt-4 text-center text-sm text-sky-200">
          &copy; {new Date().getFullYear()} Phopos Campaign. جميع الحقوق محفوظة.
        </div>
      </footer>
    </div>
  );
}

export default App;
