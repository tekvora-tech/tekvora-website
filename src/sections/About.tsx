"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { CheckCircle, Users, Award, Clock } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const stats = [
  { icon: Users, value: 20, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 1, suffix: "", label: "Years Experience" },
  { icon: Clock, value: 24, suffix: "/7", label: "Support" },
];

const features = [
  "Harga transparan & kompetitif",
  "Garansi maintenance 1 bulan",
  "Source code lengkap & dokumentasi",
  "Konsultasi gratis",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                About Us
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Mengapa Memilih <span className="gradient-text">NexaTech?</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                Kami adalah tim developer profesional yang berdedikasi untuk
                memberikan solusi digital terbaik. Dengan pengalaman lebih dari
                5 tahun, kami telah membantu ratusan klien mewujudkan visi
                digital mereka.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <ScrollReveal
                  key={feature}
                  delay={index * 0.1}
                  direction="left"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-text-primary text-sm">{feature}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right Stats */}
          <div ref={ref} className="relative">
            <div className="grid gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-surface border border-border rounded-2xl p-6 flex items-center gap-6 hover:border-primary/30 transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                      className="text-3xl font-bold text-text-primary"
                    >
                      {stat.value}
                      {stat.suffix}
                    </motion.div>
                    <div className="text-text-secondary">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-linear-to-r from-primary/20 to-accent/20 rounded-full blur-[100px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
