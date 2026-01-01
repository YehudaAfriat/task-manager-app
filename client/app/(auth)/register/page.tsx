"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    console.log("Register attempt:", { name, email, password });

    setTimeout(() => {
      setIsLoading(false);
      alert("הרשמה הצליחה! (זה רק הדגמה)");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center gradient-bg p-4 animate-fade-in">
      <div className="card w-full max-w-md animate-slide-up">
        {/* כותרת */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🎉</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            הצטרף אלינו!
          </h1>
          <p className="text-gray-600">צור חשבון חדש ותתחיל לנהל משימות</p>
        </div>

        {/* טופס */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              👤 שם מלא
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="ישראל ישראלי"
              className="input-field"
              required
              disabled={isLoading}
            />
          </div>

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
              placeholder="לפחות 6 תווים"
              className="input-field"
              minLength={6}
              required
              disabled={isLoading}
            />
            <p className="text-sm text-gray-500 mt-1">
              💡 הסיסמה חייבת להכיל לפחות 6 תווים
            </p>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn-secondary w-full"
          >
            {isLoading ? "⏳ נרשם..." : "✨ הרשמה"}
          </button>
        </form>

        {/* קישור להתחברות */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            כבר יש לך חשבון?{" "}
            <Link
              href="/login"
              className="text-secondary-600 font-semibold hover:text-secondary-700 hover:underline transition"
            >
              התחבר כאן 🔐
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
