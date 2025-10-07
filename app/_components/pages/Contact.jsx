"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.currentTarget;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const res = await fetch("https://formspree.io/f/mjkakerz", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("✅ Message sent successfully!");
      setStatus("");
      form.reset();
    } else {
      alert("❌ Oops! Something went wrong.");
      setStatus("");
    }
  }

  return (
    <div className="container mx-auto py-12 space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-yellow-400">
          Get in Touch
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Feel free to reach out for collaborations, projects, or just to say hi 
        </p>
      </section>

      <section className="max-w-3xl mx-auto bg-[#1e1d1d] p-8 rounded-xl shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-[#141313] text-white border border-gray-700 focus:border-yellow-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-[#141313] text-white border border-gray-700 focus:border-yellow-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              rows={4}
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-lg bg-[#141313] text-white border border-gray-700 focus:border-yellow-400 outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
