"use client";
import React from "react";

export default function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0912a23a-4e18-49a5-8ab5-e5c710362309");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <form className="ml-16" onSubmit={onSubmit}>
      <input
        type="hidden"
        name="access_key"
        value="0912a23a-4e18-49a5-8ab5-e5c710362309"
      />
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
          name="name"
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
          name="email"
          id="email"
          placeholder="Your Email"
          required
        />
        <label className="my-2" htmlFor="message">
          Message *
        </label>
        <textarea
          className="w-full border border-black resize-none p-2 my-2"
          name="message"
          id="message"
          placeholder="Your Message"
          required
        />
        <button type="submit" className="w-full border border-black py-2 my-2">
          Submit
        </button>
        <span className="text-red-500">{result}</span>
      </fieldset>{" "}
    </form>
  );
}
