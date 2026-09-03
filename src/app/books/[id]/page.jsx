"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Loader from "@/components/loader";
import useBearStore from "@/store";

const pageVariants = {
  initial: { x: "-100vw", opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const pageTransition = {
  type: "spring",
  stiffness: 50,
  damping: 15,
};

export default function BookDetail() {
  const { id } = useParams();
  const book = useBearStore((state) => state.book);
  const getBookDetails = useBearStore((state) => state.getBookDetails);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    let isMounted = true;

    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        await getBookDetails(id);
      } catch (err) {
        if (isMounted) {
          setError(
            err instanceof Error ? err.message : "Failed to load book details."
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [id, getBookDetails, setError]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-center text-red-700">
          <p className="font-semibold">Error</p>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <motion.main
      className="min-h-screen bg-gray-100 p-6"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      transition={pageTransition}
    >
      <h1 className="text-2xl font-bold text-gray-900">
        {book?.title ?? "Book Detail"}
      </h1>
      {book?.description && (
        <p className="mt-2 text-gray-600">{book.description}</p>
      )}
    </motion.main>
  );
}