import axios from "axios";
import Books from "@/components/books";

async function getBooksData () {
  try {
    const bookData = await axios.get("https://softgenie.org/api/books");
    return bookData.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return null;
  }
}

async function AboutPage() {
  const books = await getBooksData();
  return (
    <div className="min-h-screen bg-gray-100">
      <Books books={books} />
    </div>
  );
}

export default AboutPage;
