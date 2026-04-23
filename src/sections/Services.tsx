"use client";

import { motion } from "motion/react";
import {
  Globe,
  Monitor,
  GraduationCap,
  Smartphone,
  Database,
  Palette,
} from "lucide-react";
import GlowCard from "../components/GlowCard";
import ScrollReveal from "../components/ScrollReveal";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Membangun website modern, responsif, dan SEO-friendly dengan teknologi terbaru seperti React, Next.js, dan Tailwind CSS.",
    features: ["Company Profile", "E-Commerce", "Landing Page", "Web App"],
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Monitor,
    title: "Desktop Application",
    description:
      "Aplikasi desktop powerful dengan antarmuka modern menggunakan Electron, Tauri, atau .NET Framework.",
    features: ["POS System", "Inventory", "Management", "Custom Tools"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: GraduationCap,
    title: "Joki Tugas Sekolah",
    description:
      "Bantuan profesional untuk tugas pemrograman, database, web design, dan berbagai mata kuliah IT.",
    features: ["Web Programming", "Database", "Mobile App", "Algorithm"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Database,
    title: "Database Solutions",
    description:
      "Desain dan implementasi database optimal dengan MySQL, PostgreSQL, MongoDB, dan Firebase.",
    features: ["Optimization", "Migration", "Backup", "Analytics"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Desain antarmuka yang menarik dan pengalaman pengguna yang intuitif untuk produk digital Anda.",
    features: ["Wireframing", "Prototyping", "User Research", "Design System"],
    color: "from-pink-500 to-rose-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <motion.span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Solusi <span className="gradient-text">Lengkap</span> untuk Anda
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Dari website hingga tugas sekolah, kami siap membantu mewujudkan
            kebutuhan digital Anda.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <GlowCard key={service.title} delay={index * 0.1}>
              <div
                className={`w-12 h-12 rounded-xl bg-linear-to-r ${service.color} flex items-center justify-center mb-4`}
              >
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs rounded-full bg-surface-light text-text-secondary border border-border"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
