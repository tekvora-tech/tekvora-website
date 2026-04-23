"use client";

import { motion } from "motion/react";
import { type ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function GlowCard({
  children,
  className = "",
  delay = 0,
}: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`relative group ${className}`}
    >
      <div className="absolute -inset-0.5 bg-linear-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl" />
      <div className="relative bg-surface border border-border rounded-2xl p-6 h-full hover:border-primary/30 transition-colors duration-300">
        {children}
      </div>
    </motion.div>
  );
}
