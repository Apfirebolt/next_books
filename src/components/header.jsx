const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Books App</div>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-200">
              About
            </a>
          </li>
          <li>
            <a href="/books" className="text-white hover:text-gray-200">
              Books
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
