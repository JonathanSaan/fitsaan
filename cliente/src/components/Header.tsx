import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute z-20 bg-transparent flex items-center px-5 lg:px-9 h-20 w-full bg-gradient-to-b from-black">
      <Link href="/" className="text-red text-3xl uppercase">fitsaan</Link>
      
      <input type="search" placeholder="Search" className="hidden bg-black text-white outline-none caret-red placeholder-white border-b-2 border-gray focus:border-red ml-auto mr-7 pl-2 pb-1 max-sm:w-44 max-md:w-56 w-72" />
      <nav className="ml-auto text-white">
        <Link href="/sign-up" className="uppercase pb-0.5 px-2 hover:border-b-2 border-red">sign up</Link>
        <Link href="/sign-in" className="bg-red hover:bg-red-600 active:bg-red-700 ml-6 py-2 px-5 uppercase rounded-xl">sign in</Link>
      </nav>
    </header>
  );
}

export default Header;
