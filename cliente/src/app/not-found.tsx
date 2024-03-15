import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black uppercase text-white">
      <h1 className="text-8xl">404</h1>
      <h2 className="text-xl mt-2 mb-4">Page not found</h2>
      <Link href="/" className="bg-red hover:bg-red/85 py-2 px-4 rounded-xl">Home</Link>
    </div>
  );
}

export default NotFound;
