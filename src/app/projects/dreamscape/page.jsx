import Image from "next/image";
import Link from "next/link";
import { Calistoga } from "next/font/google";

const calistoga = Calistoga({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

export default function ProjectFour() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-16 text-ds2 text-4xl font-medium">Dreamscape</h1>
      <h2 className="w-1/2 mb-16 text-center text-2xl font-medium">
        Dive into the fascinating world of dreams and nightmares. With
        DreamShare, you can post your own dreams or nightmares, sharing your
        nocturnal adventures with a community of dream enthusiasts.
      </h2>
      <div className="h-64 w-full flex items-center justify-evenly mb-16">
        <p className={`${calistoga.className} text-6xl font-medium`}>
          Calistoga
        </p>
        <div className="flex">
          <div className=" h-24 w-24 bg-ds1"></div>
          <div className=" h-24 w-24 bg-white"></div>
          <div className=" h-24 w-24 bg-ds2"></div>
        </div>
      </div>
      <h2 className="w-1/2 mb-16 text-center text-2xl font-medium">
        Explore and view posts from other users, discovering the diverse and
        intriguing dreamscapes experienced by people around the world. Whether
        it&apos;s a whimsical fantasy or a chilling nightmare, DreamShare is the
        perfect place to document, share, and explore the mysterious world of
        dreams.
      </h2>
      <Image
        className="mb-16"
        src="/dreamscape-4.png"
        alt="design"
        width={1000}
        height={750}
      />
      <Image
        className="mb-16"
        src="/dreamscape-5.png"
        alt="design"
        width={1000}
        height={750}
      />
      <Image
        className="mb-16"
        src="/dreamscape-1.PNG"
        alt="homepage"
        width={1400}
        height={200}
      />
      <Image
        className="mb-16"
        src="/dreamscape-2.PNG"
        alt="about page"
        width={1400}
        height={200}
      />
      <Image
        className="mb-16"
        src="/dreamscape-3.PNG"
        alt="post page"
        width={1400}
        height={200}
      />

      <h2 className="w-1/2 mb-16 text-center text-2xl font-medium">
        Join the community and start sharing your dreams today!
      </h2>
      <Link
        className="mb-16 text-4xl font-medium text-ds2 hover:text-black"
        href="https://week07-project.vercel.app/"
        target="_blank"
      >
        https://week07-project.vercel.app/
      </Link>
    </div>
  );
}
