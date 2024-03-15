import Image from "next/image";
import Header from "../components/Header";
import bannerDesktop from "../../public/man-exercising-dumbbell-desktop.webp";
import bannerMobile from "../../public/man-exercising-dumbbell-mobile.webp";

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen bg-black pt-20">
        <div className="max-md:hidden">
          <Image src={bannerDesktop} alt="a man exercising dumbbell" placeholder="blur" priority className="object-cover w-screen pointer-events-none" />
        </div>
        <div className="md:hidden">
          <Image src={bannerMobile} alt="a man exercising dumbbell" placeholder="blur" priority className="object-cover h-[100vw] w-screen pointer-events-none" />
        </div>
          
        <div className="px-10 lg:px-20">
          <h2 className="text-white text-xl">Home</h2>
        </div>
      </main>
    </>
  );
}

export default Home;
