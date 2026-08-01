import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import SectionHeading from "./SectionHeading";

const contactInfo = [
  {
    icon: HiOutlineMail,
    label: "Email",
    value: import.meta.env.VITE_EMAIL || "wethum4015@gmail.com",
  },
  {
    icon: HiOutlinePhone,
    label: "Phone",
    value: import.meta.env.VITE_PHONE || "0705537000",
  },
  {
    icon: HiOutlineLocationMarker,
    label: "Location",
    value: "Colombo, Sri Lanka",
  },
];

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // eslint-disable-next-line no-console
      console.warn(
        "EmailJS environment variables are not set. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file."
      );
      setStatus("error");
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative section-padding">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something great"
        subtitle="Have a project in mind or just want to talk shop? My inbox is always open."
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5"
        >
          {contactInfo.map(({ icon: Icon, label, value }) => (
            <div key={label} className="glass-card flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-xl text-white shadow-glow">
                <Icon />
              </div>
              <div>
                <p className="text-xs text-muted">{label}</p>
                <p className="font-medium text-white">{value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="glass-card grid grid-cols-1 gap-5 p-8 sm:grid-cols-2"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-muted">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Jane Doe"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-muted/60 outline-none transition-colors focus:border-primary/60"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-muted">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="name@example.com"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-muted/60 outline-none transition-colors focus:border-primary/60"
            />
          </div>
          <div className="flex flex-col gap-2 sm:col-span-2">
            <label htmlFor="subject" className="text-sm font-medium text-muted">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="Let's work together"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-muted/60 outline-none transition-colors focus:border-primary/60"
            />
          </div>
          <div className="flex flex-col gap-2 sm:col-span-2">
            <label htmlFor="message" className="text-sm font-medium text-muted">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Tell me a bit about your project..."
              className="resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-muted/60 outline-none transition-colors focus:border-primary/60"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary sm:col-span-2 disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="sm:col-span-2 text-sm text-secondary">
              Thanks for reaching out — I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="sm:col-span-2 text-sm text-red-400">
              Something went wrong. Please configure EmailJS in your .env file, or email me directly.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
