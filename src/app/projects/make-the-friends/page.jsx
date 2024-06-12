import Image from "next/image";
import Link from "next/link";
import { Itim } from "next/font/google";

const itim = Itim({ subsets: ["latin"], weight: "400" });

export default function ProjectOne() {
  return (
    <div className={itim.className}>
      <div className="flex flex-col items-center">
        <h1 className="mb-16 text-red-300 text-4xl font-medium">
          Make the Friends
        </h1>
        <h2 className="w-1/2 mb-16 text-center text-3xl font-medium">
          The ultimate social media app inspired by the dazzling Taylor Swift!
          Dive into a vibrant pink world where friendship bracelets symbolize
          the bonds you create.
        </h2>
        <div className="h-64 w-full flex items-center justify-evenly mb-16">
          <p className=" text-6xl font-medium">Itim</p>
          <div className="flex">
            <div className=" h-24 w-24 bg-mtf3"></div>
            <div className=" h-24 w-24 bg-mtf1"></div>
            <div className=" h-24 w-24 bg-mtf2"></div>
            <div className=" h-24 w-24 bg-white"></div>
            <div className=" h-24 w-24 bg-black"></div>
          </div>
        </div>
        <h2 className="w-1/2 mb-16 text-center text-3xl font-medium">
          Sign in, create a personalized profile, and connect with fellow
          Swifties. Share your thoughts, moments, and memories through posts,
          and enjoy a seamless profile editing experience to reflect your unique
          personality.
        </h2>
        <Image
          className="mb-16 border border-mtf3"
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
        <h2 className="w-1/2 mb-16 text-center text-3xl font-medium">
          Join the community, make new friends, and celebrate the magic of
          connections with Make the Friends.
        </h2>
        <Link
          className="mb-16 text-4xl font-medium text-red-300 hover:text-black"
          href="https://make-the-friends.vercel.app"
          target="_blank"
        >
          make-the-friends.vercel.app
        </Link>
      </div>
    </div>
  );
}
