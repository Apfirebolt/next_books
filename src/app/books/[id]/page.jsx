"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Loader from "@/components/loader";
import useBearStore from "@/store";
import { useParams } from "next/navigation";

// Define the Book Detail component
function BookDetail() {
  const getBookDetails = useBearStore((state) => state.getBookDetails);
  const book = useBearStore((state) => state.book);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        await getBookDetails(id);
      } catch (error) {
        console.error("Error fetching book details:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <motion.div
      className="min-h-screen bg-gray-100"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <p>Book Detail Page</p>
    </motion.div>
  );
}

export default BookDetail;
