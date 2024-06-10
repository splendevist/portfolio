import Image from "next/image";

export default function ContactInfo() {
  return (
    <div className="w-1/4">
      <h3 className="my-2 text-lg font-medium">Contact Info</h3>
      <p className="my-2">
        Excited to learn more about my work or have a question? Reach out via
        email or connect with me on Indeed! You can also fill out this form, and
        I&apos;ll get back to you as soon as possible. Looking forward to
        hearing from you! ･˚:✧｡
      </p>
      <div className="flex items-center my-4">
        <Image
          src="https://cdn-icons-png.freepik.com/512/68/68514.png?ga=GA1.1.2042397370.1718036237"
          alt="email logo"
          width={40}
          height={40}
        />
        <a
          className="hover:text-yellow-500 ml-4"
          href="mailto:lucyholmesdev@gmail.com"
        >
          lucyholmesdev@gmail.com
        </a>
      </div>
      <div className="flex items-center">
        <Image
          src="https://cdn-icons-png.freepik.com/512/63/63981.png"
          alt="indeed logo"
          width={40}
          height={40}
        />
        <a
          className="hover:text-yellow-500 ml-4"
          href="https://www.linkedin.com/in/lucy-holmes-dev/"
          target="_blank"
        >
          https://www.linkedin.com/in/lucy-holmes-dev/
        </a>
      </div>
    </div>
  );
}
