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
