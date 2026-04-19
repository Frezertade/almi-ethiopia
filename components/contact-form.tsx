"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, User, Mail, MessageSquare, Phone } from "lucide-react";
import { formspreeConfig } from "@/lib/config";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeConfig.formId}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Something went wrong. Please try again or email us directly.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again or email us directly.");
    }
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-light" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full pl-12 pr-4 py-3.5 bg-cream rounded-xl text-stone-dark placeholder:text-stone-light focus:outline-none focus:ring-2 focus:ring-primary border border-transparent focus:border-primary transition-all"
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-light" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full pl-12 pr-4 py-3.5 bg-cream rounded-xl text-stone-dark placeholder:text-stone-light focus:outline-none focus:ring-2 focus:ring-primary border border-transparent focus:border-primary transition-all"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="relative">
          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-light" />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number (Optional)"
            className="w-full pl-12 pr-4 py-3.5 bg-cream rounded-xl text-stone-dark placeholder:text-stone-light focus:outline-none focus:ring-2 focus:ring-primary border border-transparent focus:border-primary transition-all"
          />
        </div>
        <div className="relative">
          <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-light" />
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full pl-12 pr-4 py-3.5 bg-cream rounded-xl text-stone-dark focus:outline-none focus:ring-2 focus:ring-primary border border-transparent focus:border-primary transition-all appearance-none"
          >
            <option value="">Select Subject</option>
            <option value="donation">Donation Inquiry</option>
            <option value="volunteer">Volunteering</option>
            <option value="partnership">Partnership</option>
            <option value="media">Media Inquiry</option>
            <option value="general">General Question</option>
          </select>
        </div>
      </div>

      <div className="relative">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows={5}
          className="w-full px-4 py-3.5 bg-cream rounded-xl text-stone-dark placeholder:text-stone-light focus:outline-none focus:ring-2 focus:ring-primary border border-transparent focus:border-primary transition-all resize-none"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={submitting || submitted}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors duration-300 disabled:opacity-70"
      >
        {submitted ? (
          <>
            <CheckCircle className="w-5 h-5" />
            Message Sent!
          </>
        ) : submitting ? (
          <>
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </motion.button>

      {submitted && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary text-sm"
        >
          Thank you for reaching out! We will get back to you within 48 hours.
        </motion.p>
      )}
    </form>
  );
}
