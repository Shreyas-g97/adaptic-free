import Link from 'next/link';
import Logo from '../../public/Logo.png'
import Image from 'next/image'
import SearchBar from './Search';

interface NavbarProps {
  sidebar: boolean;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={200} height={50} />
        </Link>
        {props.sidebar && <SearchBar />}
        <ul className="flex space-x-4">
          <li>
            <Link href="/api/auth/signout" className="text-black">Signout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;