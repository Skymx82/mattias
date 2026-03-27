"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="no-print border-t border-card-border py-10 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm text-muted">
              &copy; {new Date().getFullYear()} Mattias Mathevon. Tous droits réservés.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/mentions-legales"
              className="text-xs text-muted hover:text-foreground transition-colors"
            >
              Mentions légales
            </Link>
            <div className="flex items-center gap-2">
              <a href="https://github.com/Skymx82" target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-card-border hover:bg-card hover:text-accent transition-all text-muted" aria-label="GitHub">
                <Github size={16} />
              </a>
              <a href="https://www.linkedin.com/in/mattiasmathevon" target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-card-border hover:bg-card hover:text-accent transition-all text-muted" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="mailto:mattias.mathevon@gmail.com"
                className="p-2.5 rounded-full border border-card-border hover:bg-card hover:text-accent transition-all text-muted" aria-label="Email">
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
