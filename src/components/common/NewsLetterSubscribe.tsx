"use client";
import React, { useState } from "react";

type NewsletterSubscribeProps = {
  title: string;
};

const NewsletterSubscribe: React.FC<NewsletterSubscribeProps> = ({ title }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <div className="w-full bg-gray-100 py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address..."
          className="flex-grow px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 bg-transparent text-lg"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-black text-white font-semibold hover:bg-gray-800 transition-colors duration-300"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default NewsletterSubscribe;
