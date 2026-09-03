"use client";

import React, { useState } from 'react';
import { signIn, useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCredentialsSubmit = async () => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setError('Invalid email or password.');
      } else {
        router.push('/dashboard'); // Update to your target route
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl: '/dashboard' });
  };

  if (session?.user) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50 font-sans">
        <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-2xl border border-slate-100 text-center space-y-5">
          <div className="mx-auto w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-lg">
            ✓
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Signed In</h2>
            <p className="text-sm text-slate-500 mt-1">
              {session.user.email || session.user.name}
            </p>
          </div>
          <button
            type="button"
            onClick={() => signOut()}
            className="w-full py-2.5 px-4 text-sm font-semibold rounded-lg text-white bg-red-500 hover:bg-red-600 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
          >
            Log out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50 font-sans">
      <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-2xl border border-slate-100 space-y-6">
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Welcome back
          </h1>
          <p className="text-sm text-slate-500">
            Enter your credentials to access your account
          </p>
        </div>

        {error && (
          <div className="p-3 text-sm font-medium text-red-700 bg-red-50 border border-red-200 rounded-lg">
            {error}
          </div>
        )}

        {/* Credentials Form */}
        <form onSubmit={handleCredentialsSubmit} className="space-y-4">
          <div>
            <label 
              htmlFor="email" 
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              disabled={loading}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all disabled:opacity-50"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label 
                htmlFor="password" 
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700"
              >
                Password
              </label>
              <a 
                href="#forgot-password" 
                className="text-xs font-medium text-indigo-600 hover:underline"
              >
                Forgot?
              </a>
            </div>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              disabled={loading}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 px-4 text-sm font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors disabled:opacity-50 shadow-sm"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
          <span className="relative px-3 text-xs font-medium uppercase text-slate-400 bg-white">
            Or continue with
          </span>
        </div>

        {/* Social Logins */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 py-2.5 px-4 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200 transition-colors disabled:opacity-50 shadow-sm"
        >
          <svg className="w-4 h-4" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.5 0 6.4 1.2 8.4 2.8l6.2-6.2C34.1 3 29.4 1 24 1 14.7 1 6.9 6.4 3.1 14.5l7.2 5.6C11.9 13.1 17.5 9.5 24 9.5z"/>
            <path fill="#34A853" d="M46.5 24.5c0-1.6-.2-3.1-.6-4.6H24v9.1h12.6c-.5 3-2.5 5.6-5.3 7.2l8 6.2C43.8 39.3 46.5 32.6 46.5 24.5z"/>
            <path fill="#FBBC05" d="M10.3 29.9c-.8-2.3-1.3-4.7-1.3-7.4 0-2.6.5-5 .3-7.3L3.1 9.6C1.1 13.6 0 18.7 0 24.5s1.1 10.9 3.1 14.9l7.2-5.6z"/>
            <path fill="#4285F4" d="M24 46c6.1 0 11.2-2 15-5.4l-8-6.2c-2.2 1.5-5 2.4-7 2.4-6.6 0-12.1-4.4-14.1-10.6L3.1 38.4C6.9 44.6 14 46 24 46z"/>
          </svg>
          Google
        </button>
      </div>
    </div>
  );
}