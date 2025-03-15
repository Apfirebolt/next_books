"use client";

import { useState, useEffect } from "react";
import { getBooksData } from "../actions/company";
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
      const data = await getBooksData(page);
      setBooks(data);
      console.log(data);
    }
    fetchData();
  }, [page]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Our Books</h1>
        <p className="text-gray-700 mb-4">
          Welcome to our website! We are dedicated to providing the best service
          possible.
        </p>
        <p className="text-gray-700 mb-8">
          Our team is passionate about what we do and we strive to exceed your
          expectations.
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
              <p className="text-gray-700 mb-4">{book.author}</p>
              <p className="text-gray-700">{book.description}</p>
            </div>
          ))}
      </div>
      <div className="container flex justify-center items-center my-3">
        <button
          className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
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
    </div>
  );
}

export default Books;
