import Image from "next/image";
import Link from "next/link";
import { Abril_Fatface } from "next/font/google";

const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

export default function ProjectTwo() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-16 text-cc4 text-4xl font-medium">
        Catisserie Clicker
      </h1>
      <h2 className="w-1/2 mb-16 text-center text-2xl font-medium">
        The purrfectly delightful cookie clicker game where your feline friend
        takes center stage! In Catisserie Clicker, you can name your adorable
        cat companion and embark on a sweet journey to bake the most delicious
        cookies.
      </h2>
      <div className="h-64 w-full flex items-center justify-evenly mb-16">
        <p
          className={`${abrilFatface.className} text-6xl font-medium">Abril Fatface`}
        >
          Abril Fatface
        </p>
        <div className="flex">
          <div className=" h-24 w-24 bg-cc1"></div>
          <div className=" h-24 w-24 bg-cc4"></div>
          <div className=" h-24 w-24 bg-cc2"></div>

          <div className=" h-24 w-24 bg-white"></div>
          <div className=" h-24 w-24 bg-cc3"></div>
        </div>
      </div>
      <h2 className="w-1/2 mb-16 text-center text-2xl font-medium">
        Unlock cookies per second by feeding your cat with a variety of tasty
        treats and snacks. Watch as your cat grows happier and your cookie
        empire expands. With charming graphics and endless fun, Catisserie
        Clicker is the ultimate game for cat lovers and cookie enthusiasts
        alike.
      </h2>
      <Image
        className="mb-16 border border-cc4"
        src="/cookie-clicker-4.png"
        alt="design"
        width={1000}
        height={750}
      />
      <Image
        className="mb-16"
        src="/cookie-clicker-1.PNG"
        alt="homepage"
        width={1400}
        height={200}
      />
      <Image
        className="mb-16"
        src="/cookie-clicker-2.PNG"
        alt="about page"
        width={1400}
        height={200}
      />
      <Image
        className="mb-16"
        src="/cookie-clicker-3.PNG"
        alt="how to play page"
        width={1400}
        height={200}
      />
      <h2 className="w-1/2 mb-16 text-center text-2xl font-medium">
        Dive into the fun and start building your cookie kingdom today!
      </h2>
      <Link
        className="mb-16 text-4xl font-medium text-cc4 hover:text-black"
        href="https://catisserie-clicker.vercel.app"
        target="_blank"
      >
        catisserie-clicker.vercel.app
      </Link>
    </div>
  );
}
