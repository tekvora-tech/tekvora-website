"use client";

import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

export default function CTA() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <motion.div className="relative bg-surface border border-border rounded-3xl p-8 sm:p-16 text-center overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-linear-to-r from-primary/30 to-accent/30 blur-[100px]" />

            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Siap Memulai Project{" "}
                <span className="gradient-text">Anda?</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-10">
                Hubungi kami sekarang untuk konsultasi gratis. Tim kami siap
                membantu mewujudkan ide digital Anda menjadi kenyataan.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://wa.me/6281318281410"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-full font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat WhatsApp
                </motion.a>

                <motion.a
                  href="mailto:tekvora.io@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary hover:bg-primary-light text-white rounded-full font-semibold flex items-center justify-center gap-2 glow-primary transition-colors cursor-pointer"
                >
                  Kirim Email
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>

              <p className="mt-8 text-text-muted text-sm">
                Response time: &lt; 1 jam pada jam kerja
              </p>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
