"use client";

import { Code2, Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const footerLinks = {
  services: [
    { label: "Website Development", href: "#services" },
    { label: "Desktop Application", href: "#services" },
    { label: "Joki Tugas Sekolah", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    // { label: "Testimonials", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-text-primary">
                Nexa<span className="text-primary-light">Tech</span>
              </span>
            </a>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Solusi digital terbaik untuk bisnis dan pendidikan Anda.
              Professional, terpercaya, dan berkualitas.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/tekvora.io"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-surface-light border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/30 transition-all"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/tekvora-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-surface-light border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/30 transition-all"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/tekvora-tech-385384405"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-surface-light border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/30 transition-all"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-text-secondary hover:text-primary text-sm transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-text-secondary hover:text-primary text-sm transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-text-secondary text-sm">
                <Mail className="w-4 h-4 text-primary" />
                tekvora.io@gmail.com
              </li>
              <li className="flex items-center gap-3 text-text-secondary text-sm">
                <Phone className="w-4 h-4 text-primary" />
                +62 813-1828-1410
              </li>
              <li className="flex items-start gap-3 text-text-secondary text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                Bekasi, Indonesia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © 2026 TekvoraTech. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-muted hover:text-text-secondary text-sm transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
