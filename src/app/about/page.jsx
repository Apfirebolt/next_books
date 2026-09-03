'use client';

import React from 'react';
import useBearStore from '../../store';
import { motion } from 'framer-motion';

const AboutPage = () => {
  // Using store state (e.g., tracking a reading list, saved favorites, or cart items)
  const savedBooks = useBearStore((state) => state.bears);
  const increase = useBearStore((state) => state.increase);
  const decrease = useBearStore((state) => state.decrease);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex items-center justify-center p-6 font-sans">
      <motion.div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-green-600 px-8 py-10 text-white text-center">
          <span className="text-xs uppercase tracking-widest font-semibold bg-white/20 px-3 py-1 rounded-full inline-block mb-3">
            Our Story & Mission
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            About Our Bookstore
          </h1>
          <p className="mt-2 text-indigo-100 text-sm sm:text-base max-w-lg mx-auto">
            Connecting curious minds with stories, ideas, and perspectives that inspire.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-8 space-y-6">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">Curated For Readers</h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Founded by lifelong bibliophiles, our library is carefully handpicked. 
              From gripping contemporary fiction and award-winning memoirs to deep academic 
              treatises and rare indie releases, we believe every reader deserves to find 
              their next transformative read.
            </p>
          </section>

          {/* Value Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
              <span className="text-2xl block mb-1">📚</span>
              <h3 className="font-semibold text-sm text-slate-900">Diverse Genres</h3>
              <p className="text-xs text-slate-500 mt-1">Spanning thousands of titles and publishers.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
              <span className="text-2xl block mb-1">☕</span>
              <h3 className="font-semibold text-sm text-slate-900">Community First</h3>
              <p className="text-xs text-slate-500 mt-1">Hosting monthly book clubs and author events.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
              <span className="text-2xl block mb-1">🌱</span>
              <h3 className="font-semibold text-sm text-slate-900">Sustainable Print</h3>
              <p className="text-xs text-slate-500 mt-1">Partnered with eco-friendly publishing houses.</p>
            </div>
          </div>

          {/* Interactive Store Section */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                Your Reading Wishlist
              </p>
              <p className="text-lg font-bold text-slate-900">
                {savedBooks} {savedBooks === 1 ? 'Book' : 'Books'} Selected
              </p>
            </div>

            <div className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 p-1 shadow-sm">
              <button
                type="button"
                onClick={decrease}
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-white rounded transition-colors disabled:opacity-50"
                aria-label="Remove book"
              >
                − Remove
              </button>
              <span className="px-3 text-xs font-bold text-slate-800 border-x border-slate-200">
                {savedBooks}
              </span>
              <button
                type="button"
                onClick={increase}
                className="px-3 py-1.5 text-xs font-semibold text-indigo-600 hover:bg-white rounded transition-colors"
                aria-label="Add book"
              >
                + Add Book
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;