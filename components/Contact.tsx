"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  MapPin,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("loading");
    // Simulation envoi — remplace par un vrai service (Resend, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 1200));
    setFormState("success");
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Me <span className="gradient-text">contacter</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl text-lg">
            Une question, une opportunité ou un projet ? Je suis disponible.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-5">
          {/* Infos de contact */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass-card p-6 space-y-5">
              <a
                href="mailto:mattias.mathevon@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="rounded-xl bg-accent/10 p-3 text-accent group-hover:bg-accent/20 transition-colors shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted mb-0.5">Email</p>
                  <p className="font-medium text-sm group-hover:text-accent transition-colors">
                    mattias.mathevon@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-accent/10 p-3 text-accent shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted mb-0.5">Localisation</p>
                  <p className="font-medium text-sm">Toulouse, France</p>
                </div>
              </div>
            </div>

            {/* Réseaux */}
            <div className="glass-card p-6 space-y-3">
              <p className="text-sm font-semibold mb-4">Réseaux professionnels</p>
              <a
                href="https://www.linkedin.com/in/mattiasmathevon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl p-3 hover:bg-card border border-transparent hover:border-card-border transition-all text-muted hover:text-foreground group"
              >
                <Linkedin size={18} className="text-accent" />
                <span className="text-sm">LinkedIn</span>
                <span className="ml-auto text-xs opacity-0 group-hover:opacity-60 transition-opacity">
                  mattiasmathevon
                </span>
              </a>
              <a
                href="https://github.com/Skymx82"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl p-3 hover:bg-card border border-transparent hover:border-card-border transition-all text-muted hover:text-foreground group"
              >
                <Github size={18} className="text-accent" />
                <span className="text-sm">GitHub</span>
                <span className="ml-auto text-xs opacity-0 group-hover:opacity-60 transition-opacity">
                  Skymx82
                </span>
              </a>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="glass-card p-8">
              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                  <div className="rounded-full bg-emerald-400/10 p-4 text-emerald-400">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-lg font-semibold">Message envoyé !</h3>
                  <p className="text-muted text-sm max-w-xs">
                    Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => { setFormState("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-2 text-sm text-accent hover:text-accent-dark transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-muted mb-2">
                        Nom complet *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jean Dupont"
                        className="w-full rounded-xl border border-card-border bg-background px-4 py-3 text-sm placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-muted mb-2">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jean@example.com"
                        className="w-full rounded-xl border border-card-border bg-background px-4 py-3 text-sm placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-muted mb-2">
                      Objet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-card-border bg-background px-4 py-3 text-sm text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                    >
                      <option value="">Sélectionner un objet</option>
                      <option value="stage">Proposition de stage</option>
                      <option value="projet">Projet web</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-muted mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Votre message..."
                      className="w-full resize-none rounded-xl border border-card-border bg-background px-4 py-3 text-sm placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                    />
                  </div>

                  {formState === "error" && (
                    <div className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 rounded-xl px-4 py-3">
                      <AlertCircle size={16} />
                      Une erreur s&apos;est produite. Réessayez ou envoyez un email directement.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-medium text-white hover:bg-accent-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === "loading" ? (
                      <>
                        <div className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Envoyer le message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-muted text-center">
                    Vos données sont traitées conformément à notre{" "}
                    <a href="/mentions-legales" className="text-accent hover:underline">
                      politique de confidentialité
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
