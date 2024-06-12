import Link from "next/link";
import Star from "../components/Star";
import StarTwo from "../components/StarTwo";

export default function Projects() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-24 text-2xl font-medium">Projects</h1>
      <div className="w-1/4 flex flex-col items-center">
        {/* Make The Friends */}
        <div className="self-start h-52 w-52 mb-32 flex justify-center items-center border-yellow-400 border-2 rounded-full border-l-transparent hover:animate-spin-slow">
          <Link href="/projects/make-the-friends">
            <div className="h-44 w-44 flex justify-center items-center border-yellow-400 border-2 rounded-full border-r-transparent">
              <p className="w-1/2 text-2xl text-center">Make the Friends</p>
            </div>
          </Link>
        </div>
        <Star />
        {/* Catisserie Clicker */}
        <div className="self-end h-52 w-52 mb-32 flex justify-center items-center border-yellow-400 border-2 rounded-full border-l-transparent hover:animate-spin-slow">
          <Link href="/projects/catisserie-clicker">
            <div className="h-44 w-44 flex justify-center items-center border-yellow-400 border-2 rounded-full border-r-transparent">
              <p className="w-1/2 text-2xl text-center">Catisserie Clicker</p>
            </div>
          </Link>
        </div>
        <StarTwo />
        {/* Space Gallery */}
        <div className="self-start h-52 w-52 mb-32 flex justify-center items-center border-yellow-400 border-2 rounded-full border-l-transparent hover:animate-spin-slow">
          <Link href="/projects/space-gallery">
            <div className="h-44 w-44 flex justify-center items-center border-yellow-400 border-2 rounded-full border-r-transparent">
              <p className="w-1/2 text-2xl text-center">Space Gallery</p>
            </div>
          </Link>
        </div>
        <Star />
        {/* Dream Scape */}
        <div className="self-end h-52 w-52 mb-32 flex justify-center items-center border-yellow-400 border-2 rounded-full border-l-transparent hover:animate-spin-slow">
          <Link href="/projects/dreamscape">
            <div className="h-44 w-44 flex justify-center items-center border-yellow-400 border-2 rounded-full border-r-transparent">
              <p className="w-1/2 text-2xl text-center">Dream Scape</p>
            </div>
          </Link>
        </div>
        <StarTwo />
        {/* Social Sprout */}
        <div className="self-start h-52 w-52 mb-32 flex justify-center items-center border-yellow-400 border-2 rounded-full border-l-transparent hover:animate-spin-slow">
          <Link href="/projects/social-sprout">
            <div className="h-44 w-44 flex justify-center items-center border-yellow-400 border-2 rounded-full border-r-transparent">
              <p className="w-1/2 text-2xl text-center">Social Sprout</p>
            </div>
          </Link>
        </div>
        <Star />
      </div>
    </div>
  );
}
