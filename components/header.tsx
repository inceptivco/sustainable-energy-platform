"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useScroll } from "framer-motion"
import { cn } from "@/lib/utils"

export function Header() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    return scrollY.onChange(() => setIsScrolled(scrollY.get() > 0))
  }, [scrollY])

  return (
    <motion.header
      className={cn(
        "fixed top-0 w-full z-50 transition-colors duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">NWD</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Features
          </Link>
          <Link href="#technology" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Technology
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Pricing
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-primary/80 transition-colors">
            FAQ
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/login" className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary/80">
            Sign In
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
          >
            Create Account
          </Link>
        </div>
      </nav>
    </motion.header>
  )
}

