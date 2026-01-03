"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

export default function FadeUp({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  )
}
