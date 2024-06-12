import Image from "next/image";
import Link from "next/link";
import { Zen_Dots } from "next/font/google";

const zenDots = Zen_Dots({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

export default function ProjectThree() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-16 text-cc4 text-4xl font-medium">Space Gallery</h1>
      <h2 className="w-1/2 mb-16 text-center text-2xl font-medium">
        Explore the wonders of the universe with Space Gallery, the app that
        brings the beauty of space right to your fingertips. With Space Gallery,
        you can easily click through stunning images of space and see a fun fact
        about the image, and transform your screen into a cosmic masterpiece.
      </h2>
      <div className="h-64 w-full flex items-center justify-evenly mb-16">
        <p className={`${zenDots.className} text-6xl font-medium`}>Zen Dots</p>
        <div className="flex">
          <div className=" h-24 w-24 bg-sg1"></div>
          <div className=" h-24 w-24 bg-white"></div>
          <div className=" h-24 w-24 bg-black"></div>
        </div>
      </div>
      <h2 className="w-1/2 mb-16 text-center text-2xl font-medium">
        For an added touch of fun, click on the picture of a cat in the corner
        to summon a random cat image that appears right in the middle of your
        screen. Space Gallery combines the majesty of the cosmos with the charm
        of our feline friends, making it a unique and delightful experience for
        space enthusiasts and cat lovers alike.
      </h2>
      <Image
        className="mb-16 border border-cc4"
        src="/space-gallery-5.png"
        alt="design"
        width={1000}
        height={750}
      />
      <Image
        className="mb-16"
        src="/space-gallery-1.PNG"
        alt="homepage"
        width={1400}
        height={200}
      />
      <Image
        className="mb-16"
        src="/space-gallery-3.PNG"
        alt="homepage with cat"
        width={1400}
        height={200}
      />
      <Image
        className="mb-16"
        src="/space-gallery-2.PNG"
        alt="homepage"
        width={1400}
        height={200}
      />
      <Image
        className="mb-16"
        src="/space-gallery-4.PNG"
        alt="homepage with cat"
        width={1400}
        height={200}
      />
      <h2 className="w-1/2 mb-16 text-center text-2xl font-medium">
        Embark on your interstellar journey today!
      </h2>
      <Link
        className="mb-16 text-4xl font-medium text-cc4 hover:text-black"
        href="https://https://cats-in-space-gallery.vercel.app/"
        target="_blank"
      >
        https://cats-in-space-gallery.vercel.app/
      </Link>
    </div>
  );
}
