import React from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        I am looking for new opportunities and am excited to explore innovative projects and collaborations. If you have a question or an opportunity you&apos;d like to discuss, feel free to reach out—I&apos;m eager to connect and see what we can achieve together!
      </p>

      {/* Contact Form Section */}
      <div className="contact-cta">
        <form action="#" className="contact-form">
          <div className="box">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="E-mail Address" />
          </div>
          <div className="box">
            <input type="number" placeholder="Mobile Number" />
            <input type="text" placeholder="Email Subject" />
          </div>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
