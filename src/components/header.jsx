import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-primary to-secondary shadow-lg shadow-black/10 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-90"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-md">
            📚
          </span>
          <span>Books App</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <ul className="flex items-center space-x-6 text-sm font-medium text-white/90">
            <li>
              <Link 
                href="/" 
                className="transition-colors duration-200 hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/books" 
                className="transition-colors duration-200 hover:text-white"
              >
                Books
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="transition-colors duration-200 hover:text-white"
              >
                About
              </Link>
            </li>
          </ul>

          {/* Action Button */}
          <Link
            href="/login"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-primary shadow-sm transition-all duration-200 hover:bg-white/90 hover:shadow-md active:scale-95"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;