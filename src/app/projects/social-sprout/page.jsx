import Image from "next/image";
import Link from "next/link";
import { VT323 } from "next/font/google";

const vt323 = VT323({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

export default function ProjectFive() {
  return (
    <div className={vt323.className}>
      <div className="flex flex-col items-center">
        <h1 className="mb-16 text-ss3 text-4xl font-medium">Social Sprout</h1>
        <h2 className="w-1/2 mb-16 text-center text-3xl font-medium">
          he ultimate social media app for Stardew Valley enthusiasts! With
          Stardew Social, users can share their in-game experiences, adventures,
          and achievements in a vibrant community of fellow fans. Create posts
          detailing what you&apos;ve been up to in the game, and choose the
          season to perfectly capture the atmosphere of your virtual farm.
        </h2>
        <div className="h-64 w-full flex items-center justify-evenly mb-16">
          <p className=" text-6xl font-medium">VT323</p>
          <div className="flex">
            <div className=" h-24 w-24 bg-ss1"></div>
            <div className=" h-24 w-24 bg-ss3"></div>
            <div className=" h-24 w-24 bg-ss2"></div>
            <div className=" h-24 w-24 bg-white"></div>
            <div className=" h-24 w-24 bg-black"></div>
          </div>
        </div>
        <h2 className="w-1/2 mb-16 text-center text-3xl font-medium">
          Whether you&apos;re sharing the joys of a bountiful harvest in summer
          or the cozy charm of winter, Stardew Social is the perfect place to
          connect with other players and celebrate the idyllic world of Stardew
          Valley.
        </h2>
        <Image
          className="mb-16"
          src="/social-sprout-1.PNG"
          alt="homepage"
          width={1400}
          height={200}
        />
        <Image
          className="mb-16"
          src="/social-sprout-2.PNG"
          alt="about page"
          width={1400}
          height={200}
        />
        <h2 className="w-1/2 mb-16 text-center text-3xl font-medium">
          Join the fun and start sharing your farming journey today!
        </h2>
        <Link
          className="mb-16 text-4xl font-medium text-ss3 hover:text-black"
          href="https://week04-project-1.onrender.com/"
          target="_blank"
        >
          https://week04-project-1.onrender.com/
        </Link>
      </div>
    </div>
  );
}
