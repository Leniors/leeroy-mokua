"use client";

import React, { useState } from "react";

const ContactButtons = () => {
  const [copied, setCopied] = useState(false);
  const email = "leeroynyanchwa@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2s
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
      <a
        href={`mailto:${email}`}
        className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-500 transition"
      >
        Send Email
      </a>
      <a
        href={`https://wa.me/254725495595?text=Hello%20Leeroy,%20I%20would%20like%20to%20discuss%20a%20project.`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-500 transition"
      >
        Send WhatsApp Message
      </a>
      <a
        href="https://twitter.com/leniors_roy"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white px-6 py-3 rounded-xl hover:bg-neutral-800 transition dark:bg-neutral-900 dark:hover:bg-neutral-800"
      >
        Twitter / X
      </a>
      <a
        href="tel:+254725495595"
        className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-500 transition dark:bg-red-700 dark:hover:bg-red-600"
      >
        Call Me
      </a>
      <button
        onClick={handleCopy}
        className="px-6 py-3 bg-neutral-800 text-white rounded-xl hover:bg-neutral-700 transition"
      >
        {copied ? "Copied!" : "Copy Email"}
      </button>
    </div>
  );
};

export default ContactButtons;
