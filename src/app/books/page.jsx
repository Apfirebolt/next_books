"use server"

import Books from "@/components/books";

async function BooksPage() {
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Books />
    </div>
  );
}

export default BooksPage;
