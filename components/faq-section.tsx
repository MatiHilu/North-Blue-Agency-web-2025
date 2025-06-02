"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedSection from "./animated-section"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQItem[]
  title?: string
}

export default function FAQSection({ faqs, title = "Preguntas Frecuentes" }: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-x">
              {title}
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros servicios
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => toggleItem(index)}
                  >
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="text-[#ff4081] flex-shrink-0" size={20} />
                    ) : (
                      <ChevronDown className="text-[#ff4081] flex-shrink-0" size={20} />
                    )}
                  </button>
                  {openItems.includes(index) && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
