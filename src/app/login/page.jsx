"use client";

import React, { useState } from 'react';
import { signIn, useSession, signOut } from 'next-auth/react';

export default function Login() {
  const { data: session, status } = useSession();

  // Google sign in handler
  const handleGoogleSignIn = () => {
    signIn('google');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex items-center justify-center p-4 bg-secondary font-sans">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-2xl rounded-xl">
        <h1 className="text-3xl font-extrabold text-center text-gray-900">
          Login
        </h1>
        {error && (
          <div className="p-3 text-sm font-medium text-red-700 bg-red-100 border border-red-300 rounded-lg">
            {error}
          </div>
        )}

        <div>
          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="px-3 text-sm text-gray-500">Or continue with</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={loading}
              aria-label="Sign in with Google"
              className="inline-flex items-center justify-center py-2 px-4 border rounded-lg shadow-sm bg-white hover:bg-gray-50 text-sm font-medium text-gray-700 disabled:opacity-50"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                <path fill="#EA4335" d="M24 9.5c3.5 0 6.4 1.2 8.4 2.8l6.2-6.2C34.1 3 29.4 1 24 1 14.7 1 6.9 6.4 3.1 14.5l7.2 5.6C11.9 13.1 17.5 9.5 24 9.5z"/>
                <path fill="#34A853" d="M46.5 24.5c0-1.6-.2-3.1-.6-4.6H24v9.1h12.6c-.5 3-2.5 5.6-5.3 7.2l8 6.2C43.8 39.3 46.5 32.6 46.5 24.5z"/>
                <path fill="#FBBC05" d="M10.3 29.9c-.8-2.3-1.3-4.7-1.3-7.4 0-2.6.5-5 .3-7.3L3.1 9.6C1.1 13.6 0 18.7 0 24.5s1.1 10.9 3.1 14.9l7.2-5.6z"/>
                <path fill="#4285F4" d="M24 46c6.1 0 11.2-2 15-5.4l-8-6.2c-2.2 1.5-5 2.4-7 2.4-6.6 0-12.1-4.4-14.1-10.6L3.1 38.4C6.9 44.6 14 46 24 46z"/>
              </svg>
              Google Sign In
            </button>
          </div>
        </div>

        {session?.user && (
          <div className="pt-4 mt-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Signed in as <span className="font-medium">{session.user.email || session.user.name}</span>
              </div>
              <button
                type="button"
                onClick={() => signOut()}
                className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Log out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}