"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getBooksData } from "../actions/books";
import Loader from "../components/loader";


export default function Books() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isSubscribed = true;

    async function fetchData() {
      setLoading(true);
      try {
        const response = await getBooksData(page);
        if (isSubscribed) {
          setData(response);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        if (isSubscribed) setLoading(false);
      }
    }

    fetchData();

    return () => {
      isSubscribed = false;
    };
  }, [page]);

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const hasNextPage = Boolean(data?.next || (data?.results && data.results.length > 0));

  return (
    <motion.div
      className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Banner */}
        <header className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Browse Books
            </h1>
            <p className="mt-2 text-base text-slate-600">
              Explore our collection of titles, compare releases, and discover your next read.
            </p>
          </div>
        </header>

        {/* Content Body */}
        {loading ? (
          <div className="min-h-[400px] flex items-center justify-center">
            <Loader />
          </div>
        ) : !data?.results?.length ? (
          <div className="text-center py-24 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 text-lg">No books found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.results.map((book) => {
              const hasDescription = book.description && book.description !== "nan";

              return (
                <div
                  key={book.id}
                  className="flex flex-col justify-between bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                        {book.category || "General"}
                      </span>
                      {book.publish_date_year && (
                        <span className="text-xs text-slate-400">
                          {book.publish_date_year}
                        </span>
                      )}
                    </div>

                    <h2 className="text-lg font-semibold text-slate-900 line-clamp-1">
                      {book.title}
                    </h2>

                    <p className="text-sm text-slate-500 font-medium">
                      By {book.author || "Unknown Author"}
                    </p>

                    <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {hasDescription ? book.description : "No description available for this book."}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold">
                        Price
                      </span>
                      <span className="text-base font-bold text-slate-900">
                        {book.price_starting_with ? `$${book.price_starting_with}` : "Free / N/A"}
                      </span>
                    </div>

                    <Link
                      href={`/books/${book.id}`}
                      className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Pagination Controls */}
        <div className="flex items-center justify-between border-t border-slate-200 pt-6">
          <p className="text-sm text-slate-500">
            Current Page: <span className="font-semibold text-slate-900">{page}</span>
          </p>

          <div className="flex space-x-3">
            <button
              onClick={handlePreviousPage}
              disabled={page === 1 || loading}
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={!hasNextPage || loading}
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}