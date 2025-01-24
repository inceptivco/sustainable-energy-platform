"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, ChevronRight } from "lucide-react"

export function HowToInvest() {
  const [step, setStep] = useState(1)
  const [investment, setInvestment] = useState("")

  const steps = [
    {
      title: "Registration",
      description: "Sign up on our platform to begin your investment journey.",
    },
    {
      title: "Verification",
      description: "Complete necessary compliance checks and KYC verification.",
    },
    {
      title: "Purchase",
      description: "Acquire tokens through our secure investment system.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">How to Invest</h2>
          <p className="text-muted-foreground md:text-xl">
            Follow our simple process to start investing in sustainable energy.
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-primary/50 to-primary/0" />
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-start mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-1">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step > i + 1 ? "bg-primary" : "glass-card"
                    }`}
                  >
                    {step > i + 1 ? <Check className="w-4 h-4" /> : <span>{i + 1}</span>}
                  </div>
                </div>
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass-card glass-effect rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                    <p className="text-muted-foreground">{s.description}</p>
                    {i + 1 === step && (
                      <button
                        onClick={() => setStep(step + 1)}
                        className="mt-4 inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                      >
                        Continue
                        <ChevronRight className="ml-1 w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

