"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    console.log("Login attempt:", { email, password });

    setTimeout(() => {
      setIsLoading(false);
      alert("Login הצליח! (זה רק הדגמה)");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center gradient-bg p-4 animate-fade-in">
      <div className="card w-full max-w-md animate-slide-up">
        {/* כותרת */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">👋</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            ברוכים השבים!
          </h1>
          <p className="text-gray-600">התחבר כדי להמשיך למערכת</p>
        </div>

        {/* טופס */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              📧 אימייל
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className="input-field"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              🔒 סיסמה
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="input-field"
              required
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn-primary w-full"
          >
            {isLoading ? "⏳ מתחבר..." : "🚀 כניסה"}
          </button>
        </form>

        {/* קישור להרשמה */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            אין לך חשבון?{" "}
            <Link
              href="/register"
              className="text-primary-600 font-semibold hover:text-primary-700 hover:underline transition"
            >
              הרשם כאן ✨
            </Link>
          </p>
        </div>

        {/* חזרה לבית */}
        <div className="mt-4 text-center">
          <Link
            href="/"
            className="text-gray-500 text-sm hover:text-gray-700 transition"
          >
            ← חזרה לדף הבית
          </Link>
        </div>
      </div>
    </div>
  );
}
