import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-primary p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Books App</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-200" passHref>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gray-200" passHref>
              About
            </Link>
          </li>
          <li>
            <Link href="/books" className="text-white hover:text-gray-200" passHref>
              Books
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
