"use client";

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Owner, Toko Makmur",
    content:
      "Website e-commerce yang dibuat NexaTech sangat profesional. Penjualan kami naik 200% dalam 3 bulan!",
    rating: 5,
  },
  {
    name: "Anita Wijaya",
    role: "Mahasiswa, UI",
    content:
      "Joki tugas database di sini sangat memuaskan. Dikerjakan tepat waktu dan hasilnya perfect score!",
    rating: 5,
  },
  {
    name: "Rudi Hartono",
    role: "CEO, TechStartup",
    content:
      "Aplikasi desktop untuk inventory management sangat powerful. Tim support juga responsif 24/7.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Apa Kata <span className="gradient-text">Klien Kami?</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-surface border border-border rounded-2xl p-8 relative hover:border-primary/30 transition-colors h-full"
              >
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>

                <p className="text-text-primary mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
