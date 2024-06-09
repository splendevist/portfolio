import Image from "next/image";

export default function Home() {
  return (
    <div className="h-5/6 flex justify-center items-center">
      <Image src="/homepage.PNG" width={500} height={400} alt="placeholder" />
    </div>
  );
}
