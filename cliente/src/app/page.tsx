import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import bannerDesktop from "../../public/man_doing_front_lever-desktop.webp";
import bannerMobile from "../../public/man_doing_front_lever-mobile.webp";

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen bg-black">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black"></div>
          <section className="absolute max-md:top-1/2 max-md:left-1/2 max-md:transform max-md:-translate-x-1/2 max-md:-translate-y-1/2 text-center text-white md:mt-[11vw] md:ml-[3vw] max-sm:w-full md:min-w-[53rem] xl:min-w-[73rem] sm:w-[90vw] md:w-[58vw] xl:w-[50rem]">
            <h1 className="font-semibold max-sm:text-2xl max-md:text-4xl max-xl:text-5xl text-7xl">
              Your Fitness and Wellness Community
            </h1>
            <p className="max-md:mt-4 max-md:mb-10 mt-6 mb-12 px-[2rem] sm:text-xl xl:text-2xl">
              Join our fitness and wellness community! At Fitsaan, you'll
              discover a collaborative environment to train, connect with other
              enthusiasts, and participate in challenges to achieve your health
              and happiness goals.
            </p>
            <Link
              href="/sign-up"
              className="bg-red hover:bg-red/85 py-4 px-8 uppercase rounded-xl"
            >
              Join Now!
            </Link>
          </section>
          <Image
            src={bannerDesktop}
            alt="a man exercising dumbbell"
            placeholder="blur"
            priority
            className="max-md:hidden object-cover w-screen pointer-events-none"
          />
          <Image
            src={bannerMobile}
            alt="a man exercising dumbbell"
            placeholder="blur"
            priority
            className="md:hidden object-cover h-[100vw] w-screen pointer-events-none"
          />
        </div>

        <div className="py-7 px-10 lg:py-11 lg:px-20">
          <h2 className="text-white text-3xl text-center">Home</h2>
        </div>
      </main>
    </>
  );
};

export default Home;
