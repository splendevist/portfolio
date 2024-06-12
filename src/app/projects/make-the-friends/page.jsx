import Image from "next/image";
import Link from "next/link";
import { Itim } from "next/font/google";

const itim = Itim({ subsets: ["latin"], weight: "400" });

export default function ProjectOne() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-8 text-red-300 text-3xl sm:text-4xl font-medium sm:mb-16">
        Make the Friends
      </h1>
      <h2 className="mb-8 text-center w-3/4 text-xl font-medium sm:text-2xl sm:mb-16 sm:w-1/2">
        The ultimate social media app inspired by the dazzling Taylor Swift!
        Dive into a vibrant pink world where friendship bracelets symbolize the
        bonds you create.
      </h2>
      <div className="w-full flex flex-col items-center justify-evenly mb-8 sm:mb-16 sm:flex-row sm:h-64">
        <p className={`${itim.className} mb-8 text-6xl font-medium sm:mb-0`}>
          Itim
        </p>
        <div className="flex flex-col sm:flex-row">
          <div className=" h-24 w-24 bg-mtf3"></div>
          <div className=" h-24 w-24 bg-mtf1"></div>
          <div className=" h-24 w-24 bg-mtf2"></div>
          <div className=" h-24 w-24 bg-white"></div>
          <div className=" h-24 w-24 bg-black"></div>
        </div>
      </div>
      <h2 className="mb-8 text-center w-3/4 text-xl font-medium sm:mb-16 sm:text-2xl sm:w-1/2">
        Sign in, create a personalized profile, and connect with fellow
        Swifties. Share your thoughts, moments, and memories through posts, and
        enjoy a seamless profile editing experience to reflect your unique
        personality.
      </h2>
      <Image
        className="mx-4 mb-16 border border-mtf3 sm:mx-0"
        src="/make-the-friends-5.png"
        alt="design"
        width={718}
        height={712}
      />
      <Image
        className="mb-16"
        src="/make-the-friends-1.PNG"
        alt="homepage"
        width={1400}
        height={200}
      />
      <Image
        className="mb-16"
        src="/make-the-friends-4.PNG"
        alt="social feed"
        width={1400}
        height={200}
      />
      <Image
        className="mb-16"
        src="/make-the-friends-3.PNG"
        alt="profile page"
        width={1400}
        height={200}
      />
      <Image
        className="mb-16"
        src="/make-the-friends-2.PNG"
        alt="about page"
        width={1400}
        height={200}
      />
      <h2 className="mb-16 text-center w-3/4 text-xl font-medium sm:text-2xl sm:w-1/2">
        Join the community, make new friends, and celebrate the magic of
        connections with Make the Friends.
      </h2>
      <Link
        className="mb-16 text-2xl font-medium text-red-300 hover:text-black sm:text-4xl"
        href="https://make-the-friends.vercel.app"
        target="_blank"
      >
        make-the-friends.vercel.app
      </Link>
    </div>
  );
}
