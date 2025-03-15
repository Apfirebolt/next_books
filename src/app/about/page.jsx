import axios from "axios";

export const metadata = {
  title: "About Us - Next Books",
  description:
    "Learn more about Next Books and our commitment to providing excellent service.",
};

async function AboutPage() {
  let books = null; // Initialize books to null
  try {
    const bookData = await axios.get("https://softgenie.org/api/books");
    books = bookData.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    // You might want to display an error message to the user here.
  }

return (
    <div className="min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg container mx-auto">
            <h1 className="text-2xl font-bold mb-4">About Us</h1>
            <p className="text-gray-700 mb-4">
                Welcome to our website! We are dedicated to providing the best service
                possible.
            </p>
            <p className="text-gray-700 mb-8">
                Our team is passionate about what we do and we strive to exceed your
                expectations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {books && books.results && books.results.map((book) => (
                    <div key={book.id} className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
                        <p className="text-gray-700 mb-1"><strong>Author:</strong> {book.authors}</p>
                        <p className="text-gray-700 mb-1"><strong>Category:</strong> {book.category}</p>
                        <p className="text-gray-700 mb-1"><strong>Publisher:</strong> {book.publisher}</p>
                        <p className="text-gray-700 mb-1"><strong>Price:</strong> ${book.price_starting_with}</p>
                        <p className="text-gray-700 mb-1"><strong>Publish Date:</strong> {book.publish_date_month} {book.publish_date_year}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
}

export default AboutPage;