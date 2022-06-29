/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./contacts.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5azphxv",
        "template_a6sxr8n",
        form.current,
        "p4dTVG3j74DLZLfzT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contacts">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contacts__container">
        <div className="contact__options">
          <article className="contacts__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>snvislm@gmail.com</h5>
            <a href="mailto:snvislm@gmail.com" target="_blank">
              Send Email
            </a>
          </article>

          <article className="contacts__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Isku Snv</h5>
            <a
              href="https://m.me/profile.php?id=100009493664426"
              target="_blank">
              Send Message
            </a>
          </article>
          <article className="contacts__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+996558180192</h5>
            <a
              href="https://web.whatsapp.com/send?phone=+996558180192"
              target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="your name" required />
          <input type="email" name="email" placeholder="your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your  message"
            required></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
