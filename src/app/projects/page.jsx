import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <Link href="/projects/make-the-friends">
        <Image src="/" width={400} height={400} alt="placeholder" />
      </Link>
      <Link href="/projects/catisserie-clicker">
        <Image src="/" width={400} height={400} alt="placeholder" />
      </Link>
      <Link href="/projects/">
        <Image src="/" width={400} height={400} alt="placeholder" />
      </Link>
    </div>
  );
}
