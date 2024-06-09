import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center items-center h-1/6">
      <nav>
        <Link className="px-6 hover:text-yellow-500" href="/">
          Home
        </Link>
        <Link className="px-6 hover:text-yellow-500" href="/projects">
          Projects
        </Link>
        <Link className="px-6 hover:text-yellow-500" href="/about">
          About
        </Link>
        <Link className="px-6 hover:text-yellow-500" href="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}
