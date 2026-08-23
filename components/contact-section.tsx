import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, Clock } from "lucide-react";
import AnimatedSection from "./animated-section";
import WhatsAppCTA from "./whatsapp-cta";
import { DEFAULT_WHATSAPP_MESSAGE, buildWhatsAppUrl } from "@/lib/whatsapp";

export default function ContactSection() {
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
              <CardContent className="p-8 flex flex-col items-center text-center justify-center h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-full flex items-center justify-center mb-6" aria-hidden="true">
                  <MessageCircle className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Chat with us on WhatsApp</h3>
                <p className="text-gray-600 mb-8">
                  The fastest way to reach us. Send a message and we will reply right away.
                </p>
                <WhatsAppCTA
                  message={DEFAULT_WHATSAPP_MESSAGE}
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#ff4081] to-[#00b2ff] text-white hover:shadow-lg transform hover:scale-105 transition-all"
                >
                  Message us on WhatsApp
                </WhatsAppCTA>
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
                      <MessageCircle className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <a
                        href={buildWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#ff4081] transition-colors"
                      >
                        +54 11 3054 5828
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
