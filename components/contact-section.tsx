"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Clock, Send } from "lucide-react";
import AnimatedSection from "./animated-section";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
    phone_number: "",
    url_field: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, url: window.location.href }),
      });
      if (!res.ok) throw new Error("Error sending message");
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We will reply within 24 hours.",
      });
      setFormData({ name: "", email: "", message: "", website: "", phone_number: "", url_field: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2
            id="contact-heading"
            className="text-4xl md:text-5xl font-bold mb-6 text-black"
          >
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-xy">
              transform
            </span>{" "}
            your business?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contact us today and discover how we can take your brand to the next level
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto text-black">
          <AnimatedSection animation="fadeInLeft">
            <Card className="h-full border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>

                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[#ff4081] focus:outline-none focus:ring-1 focus:ring-[#ff4081]"
                      disabled={isSubmitting}
                      required
                      aria-required="true"
                      autoComplete="name"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email address <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[#ff4081] focus:outline-none focus:ring-1 focus:ring-[#ff4081]"
                      disabled={isSubmitting}
                      required
                      aria-required="true"
                      autoComplete="email"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Tell us about your project"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[#ff4081] focus:outline-none focus:ring-1 focus:ring-[#ff4081]"
                      disabled={isSubmitting}
                      required
                      aria-required="true"
                    />
                  </div>

                  {/* Honeypot fields — hidden from users and assistive tech */}
                  <div style={{ display: "none" }} aria-hidden="true">
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                    <input
                      type="text"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                    <input
                      type="url"
                      name="url_field"
                      value={formData.url_field}
                      onChange={(e) => setFormData({ ...formData, url_field: e.target.value })}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#ff4081] to-[#00b2ff] text-white hover:shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label={isSubmitting ? "Sending your message…" : "Send message"}
                  >
                    {isSubmitting ? (
                      <span aria-live="polite">Sending…</span>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} className="ml-2" aria-hidden="true" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fadeInRight" delay={200}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <address className="not-italic space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:info@northblueagency.com"
                        className="text-gray-600 hover:text-[#ff4081] transition-colors"
                      >
                        info@northblueagency.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#00b2ff] to-[#ff4081] rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-600">
                        <a href="tel:+541153248376" className="hover:underline" aria-label="Call +54 11 5324 8376">
                          +54 11 5324 8376
                        </a>
                        {" / "}
                        <a href="tel:+541130545828" className="hover:underline" aria-label="Call +54 11 3054 5828">
                          +54 11 3054 5828
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#00b2ff] to-[#ff4081] rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Clock className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">Hours</p>
                      <p className="text-gray-600">Mon – Fri: 9:00 – 18:00 (GMT-3)</p>
                    </div>
                  </div>
                </address>
              </div>

              <div className="bg-gradient-to-br from-[#ff4081]/10 to-[#00b2ff]/10 p-6 rounded-lg">
                <h4 className="font-bold mb-2">Why Choose Us?</h4>
                <ul className="space-y-2 text-gray-600" aria-label="Key benefits">
                  <li><span aria-hidden="true">✓ </span>Personalized strategies</li>
                  <li><span aria-hidden="true">✓ </span>Measurable results</li>
                  <li><span aria-hidden="true">✓ </span>Expert team</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
