"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-light/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-card-border bg-card/50 px-4 py-1.5 text-sm text-muted backdrop-blur-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Etudiant BTS SIO SLAM &middot; Fondateur Tolarys
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Mattias{" "}
              <span className="gradient-text">Mathevon</span>
            </motion.h1>

            <motion.p
              className="mt-5 text-lg text-muted max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Développeur Next.js &amp; Fondateur d&apos;Autosoft.
              De l&apos;idée au déploiement, je transforme des concepts en
              produits fonctionnels et évolutifs.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-dark transition-colors"
              >
                Découvrir mon parcours
                <ArrowDown size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-card-border px-6 py-3 text-sm font-medium hover:bg-card transition-colors"
              >
                Me contacter
                <Mail size={16} />
              </a>
            </motion.div>

            <motion.div
              className="mt-6 flex items-center justify-center lg:justify-start gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <a
                href="https://github.com/Skymx82"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-card-border hover:bg-card transition-colors text-muted hover:text-foreground"
                aria-label="GitHub"
              >
                <Github size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/mattiasmathevon"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-card-border hover:bg-card transition-colors text-muted hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="mailto:mattias.mathevon@gmail.com"
                className="p-2.5 rounded-full border border-card-border hover:bg-card transition-colors text-muted hover:text-foreground"
                aria-label="Email"
              >
                <Mail size={17} />
              </a>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            className="shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl scale-110" />
              {/* Photo container */}
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full border-2 border-card-border overflow-hidden bg-section-alt">
                {/*
                  PHOTO : remplace le placeholder ci-dessous par ton image.
                  1. Dépose ta photo dans :  public/photo.jpg  (ou .png, .webp...)
                  2. Remplace src="/placeholder-avatar.svg" par src="/photo.jpg"
                */}
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-muted">
                  <div className="text-5xl font-bold gradient-text">MM</div>
                  <p className="text-xs opacity-50">Ajouter photo.jpg dans /public</p>
                </div>
                <Image
                  src="/photo.jpg"
                  alt="Mattias Mathevon"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Badge flottant */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-card-border bg-card/90 backdrop-blur-sm px-4 py-1.5 text-xs font-medium">
                🎓 BTS SIO SLAM
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={20} className="text-muted" />
      </motion.div>
    </section>
  );
}
