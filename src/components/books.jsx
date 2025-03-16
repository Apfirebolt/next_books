"use client";

import { useState, useEffect } from "react";
import { getBooksData } from "../actions/company";
import { motion } from "framer-motion";
import Loader from "./loader";

// Define the Books component
function Books() {
  const [page, setPage] = useState(1);
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(false);

  const goToNextPage = async () => {
    setLoading(true);
    setPage(page + 1);
    try {
      await getBooksData(page);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  const goToPreviousPage = async () => {
    setPage(page - 1);
    setLoading(true);
    try {
      await getBooksData(page);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await getBooksData(page);
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [page]);

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
        <div className="bg-white p-8 rounded-lg shadow-lg container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Our Books</h1>
            <p className="text-gray-700 mb-4">
                Welcome to our website! We are dedicated to providing the best service
                possible.
            </p>
            <p className="text-gray-700 mb-8">
                Here you find list of available books.
            </p>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 p-8">
            {books &&
                books.results &&
                books.results.map((book) => (
                    <div
                        key={book.id}
                        className="break-inside-avoid bg-white p-6 mb-6 rounded-lg shadow-md"
                    >
                        <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
                        <p className="text-gray-700 mb-4">Written by {book.author}</p>
                        <p className="text-gray-700 mb-4">Category : {book.category}</p>
                        <p className="text-gray-700 mb-4">Published by {book.publisher}</p>
                        <p className="text-gray-700 mb-4">Price is {book.price_starting_with}</p>
                        <p className="text-gray-700 mb-4">Published in {book.publish_date_year}</p>
                        <p className="text-gray-700">
                            {book.description !== "nan"
                                ? book.description
                                : "Description not available"}
                        </p>
                    </div>
                ))}
        </div>
        <div className="container bg-secondary flex justify-center items-center mx-auto py-2 my-3">
            <button
                className="bg-neutral-100 text-secondary font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                onClick={goToPreviousPage}
            >
                Previous
            </button>
            <button
                className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 mx-2"
                onClick={goToNextPage}
            >
                Next
            </button>
        </div>
    </motion.div>
);
}

export default Books;
