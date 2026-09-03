'use client'

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-secondary text-slate-100">
      {/* Main Grid */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold text-lg">
                N
              </span>
              <span className="text-xl font-semibold text-white tracking-tight">
                Next Books
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Discover curated reads, track your reading goals, and connect with fellow book lovers worldwide.
            </p>

            <form className="mt-6 flex max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Navigation Column 1 */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="/bestsellers" className="hover:text-white transition">Bestsellers</a></li>
              <li><a href="/new-releases" className="hover:text-white transition">New Releases</a></li>
              <li><a href="/genres" className="hover:text-white transition">Browse Genres</a></li>
              <li><a href="/authors" className="hover:text-white transition">Authors Directory</a></li>
            </ul>
          </div>

          {/* Navigation Column 2 */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Community
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="/clubs" className="hover:text-white transition">Book Clubs</a></li>
              <li><a href="/challenges" className="hover:text-white transition">Reading Goals</a></li>
              <li><a href="/blog" className="hover:text-white transition">Lit Journal</a></li>
              <li><a href="/events" className="hover:text-white transition">Author Talks</a></li>
            </ul>
          </div>

          {/* Navigation Column 3 */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/careers" className="hover:text-white transition">Careers</a></li>
              <li><a href="/press" className="hover:text-white transition">Press</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} Next Books, Inc. All rights reserved.
          </p>

          <div className="flex space-x-6 text-xs text-slate-500">
            <a href="/privacy" className="hover:text-slate-300 transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-slate-300 transition">Terms of Service</a>
            <a href="/cookies" className="hover:text-slate-300 transition">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;