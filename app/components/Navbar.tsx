import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">Adaptic Health</Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white">Home</Link>
          </li>
          <li>
            <Link href="/faq" className="text-white">FAQ</Link>
          </li>
          <li>
            <Link href="/api/auth/signout" className="text-white">Signout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;