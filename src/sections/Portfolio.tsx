"use client";

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";

const projects = [
  //   {
  //     title: "E-Commerce Platform",
  //     category: "Website",
  //     description:
  //       "Platform e-commerce lengkap dengan payment gateway dan dashboard admin.",
  //     tech: ["Next.js", "PostgreSQL", "Stripe"],
  //     image: "bg-gradient-to-br from-blue-600 to-indigo-700",
  //   },
  {
    title: "School Point Management System",
    category: "Website Mobile Design",
    description: "Aplikasi manajemen sekolah dengan fitur laporan.",
    tech: ["Golang", "React", "MySQL"],
    image: "bg-gradient-to-br from-purple-600 to-pink-700",
  },
  {
    title: "Portfolio Website",
    category: "Website",
    description: "Website portfolio interaktif untuk developer profesional.",
    tech: ["React", "Framer Motion", "Tailwind"],
    image: "bg-gradient-to-br from-cyan-600 to-blue-700",
  },
  {
    title: "Task Management App",
    category: "Web App",
    description: "Aplikasi manajemen tugas dengan real-time collaboration.",
    tech: ["React", "Golang", "PostgreSQL"],
    image: "bg-gradient-to-br from-emerald-600 to-teal-700",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Project <span className="gradient-text">Terbaru</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Beberapa hasil kerja terbaik kami yang telah membantu klien mencapai
            tujuan bisnis mereka.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -5 }}
                className="group relative bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
              >
                {/* Image Placeholder */}
                <div
                  className={`h-48 ${project.image} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors cursor-pointer">
                      <FaGithub className="w-4 h-4 text-white" />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors cursor-pointer">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
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
