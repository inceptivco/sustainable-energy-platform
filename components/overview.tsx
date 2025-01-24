"use client"

import { motion } from "framer-motion"
import { Zap, Leaf, DollarSign } from "lucide-react"

export function Overview() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Investment Opportunity Overview
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Join our initiative to convert stranded natural gas into sustainable energy and profitable digital assets.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card glass-effect rounded-2xl p-6"
          >
            <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
              <DollarSign className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">$2M Investment Round</h3>
            <p className="text-muted-foreground">
              Initial funding round with projected returns of 15-20%, scaling to $50M rounds.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card glass-effect rounded-2xl p-6"
          >
            <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sustainable Power</h3>
            <p className="text-muted-foreground">
              Converting stranded gas into electricity for data center operations.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card glass-effect rounded-2xl p-6"
          >
            <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
              <Leaf className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Carbon Credits</h3>
            <p className="text-muted-foreground">
              Generate additional revenue through carbon credit sales and environmental compliance.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

