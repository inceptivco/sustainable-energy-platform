"use client"

import { motion } from "framer-motion"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const projectedReturns = [
  { year: "2024", return: 15 },
  { year: "2025", return: 17 },
  { year: "2026", return: 18 },
  { year: "2027", return: 19 },
  { year: "2028", return: 20 },
]

export function InvestmentDetails() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-gray-900/50">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Understanding Security Tokens
            </h2>
            <div className="space-y-4">
              <div className="glass-card glass-effect rounded-xl p-4">
                <h3 className="font-semibold mb-2">Fractional Ownership</h3>
                <p className="text-muted-foreground">
                  Invest with smaller amounts, making the investment more accessible.
                </p>
              </div>
              <div className="glass-card glass-effect rounded-xl p-4">
                <h3 className="font-semibold mb-2">Liquidity</h3>
                <p className="text-muted-foreground">Trade tokens on secondary markets for investment flexibility.</p>
              </div>
              <div className="glass-card glass-effect rounded-xl p-4">
                <h3 className="font-semibold mb-2">Transparency</h3>
                <p className="text-muted-foreground">
                  Blockchain technology ensures secure and transparent transactions.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card glass-effect rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold mb-4">Projected Returns</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={projectedReturns}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="year" stroke="rgba(255,255,255,0.5)" />
                  <YAxis stroke="rgba(255,255,255,0.5)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(17, 17, 17, 0.9)",
                      border: "none",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <Line type="monotone" dataKey="return" stroke="#4ade80" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-muted-foreground">Token Structure: 1 token = $1</p>
              <p className="text-sm text-muted-foreground">Projected Returns: 15-20% from initial asset round</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

