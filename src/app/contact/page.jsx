import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

export default function Contact() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="mb-12 text-2xl font-medium">Contact</h1>
      <div className="w-screen flex flex-col items-center justify-center sm:mt-24 sm:flex-row sm:items-start">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}
