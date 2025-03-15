"use client";

function Books(props) {
  const { books } = props;
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
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 p-8">
            {books && books.results && books.results.map((book) => (
                <div key={book.id} className="break-inside-avoid bg-white p-6 mb-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
                    <p className="text-gray-700 mb-4">{book.author}</p>
                    <p className="text-gray-700">{book.description}</p>
                </div>
            ))}
        </div>
    </div>
);
}

export default Books;
