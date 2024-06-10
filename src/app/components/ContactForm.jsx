export default function ContactForm() {
  return (
    <form>
      <fieldset className="flex flex-col items-center border border-black py-8 px-16">
        <p className="flex justify-center w-full my-2 text-lg font-medium">
          Contact Form
        </p>
        <label className="my-2" htmlFor="name">
          Name *
        </label>
        <input
          type="text"
          className="border border-black p-2 my-2"
          id="name"
          placeholder="Your Name"
          required
        />
        <label className="my-2" htmlFor="email">
          Email *
        </label>
        <input
          type="text"
          className="border border-black p-2 my-2"
          id="email"
          placeholder="Your Email"
          required
        />
        <label className="my-2" htmlFor="message">
          Message *
        </label>
        <textarea
          className="w-full border border-black resize-none p-2 my-2"
          id="message"
          placeholder="Your Message"
          required
        />
        <button type="submit" className="w-full border border-black py-2 my-2">
          Submit
        </button>
      </fieldset>
    </form>
  );
}
