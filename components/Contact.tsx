import React from "react";
import ContactButtons from "./ContactButtons";

const Contact = () => {
  return (
    <section id="contact" className="text-center md:py-16">
      <h2 className="text-3xl font-bold text-white mb-6">
        Let’s Build Together
      </h2>
      <p className="text-neutral-400 mb-6">
        Available for freelance or full-time work. Let’s connect.
      </p>
      <ContactButtons />
    </section>
  );
};

export default Contact;
