import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

export default function Contact() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="mb-2 text-2xl font-medium">Contact</h1>
      <div className="w-screen flex justify-center mt-24">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}
