"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is the minimum investment?",
    answer:
      "The minimum investment is $1,000, making it accessible for a wide range of investors while ensuring efficient operation of the platform.",
  },
  {
    question: "How are returns distributed?",
    answer:
      "Returns are distributed quarterly based on the performance of our operations. Token holders receive their proportional share of profits through smart contract automation.",
  },
  {
    question: "Can tokens be traded on secondary markets?",
    answer:
      "Yes, our security tokens are designed to be tradeable on regulated secondary markets, providing liquidity options for investors. Trading is subject to applicable securities regulations.",
  },
  {
    question: "How do carbon credits work?",
    answer:
      "By capturing and utilizing flared gas, our operations qualify for carbon credits. These credits can be sold for additional revenue, enhancing overall returns while supporting environmental sustainability.",
  },
]

export function FAQ() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="text-muted-foreground md:text-xl max-w-[700px]">
              Find answers to common questions about our sustainable energy investment opportunity.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-2xl"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

