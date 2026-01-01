import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center gradient-bg p-4 animate-fade-in">
      <div className="text-center animate-slide-up">
        {/* כותרת */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            📝 מערכת ניהול משימות
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light">
            נהל את המשימות שלך בקלות ויעילות
          </p>
        </div>

        {/* כפתורים */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/login" className="btn-primary w-full sm:w-auto">
            🔐 התחברות
          </Link>

          <Link href="/register" className="btn-outline w-full sm:w-auto">
            ✨ הרשמה
          </Link>
        </div>

        {/* תכונות */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="card hover:scale-105 transition-transform duration-200">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">מהיר וקל</h3>
            <p className="text-gray-600 text-sm">נהל משימות בקלות ומהירות</p>
          </div>

          <div className="card hover:scale-105 transition-transform duration-200">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">ממוקד</h3>
            <p className="text-gray-600 text-sm">התמקד במה שחשוב באמת</p>
          </div>

          <div className="card hover:scale-105 transition-transform duration-200">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">מאורגן</h3>
            <p className="text-gray-600 text-sm">עקוב אחרי ההתקדמות שלך</p>
          </div>
        </div>
      </div>
    </div>
  );
}
