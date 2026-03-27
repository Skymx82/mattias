"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  FileText,
  FileImage,
  FileArchive,
  Link as LinkIcon,
  FileDown,
  CheckCircle2,
  Target,
  Zap,
  BookOpen,
  Clock,
  Building2,
  Car,
  Monitor,
  Layers,
  Terminal,
  Smartphone,
  X,
  ChevronLeft,
  ChevronRight,
  Images,
  FileStack,
} from "lucide-react";
import type { Project, ProjectImage } from "@/lib/projects";

const iconMap: Record<string, React.ElementType> = {
  Car, Monitor, Terminal, Smartphone, Layers,
};

const fileIconMap: Record<string, React.ElementType> = {
  pdf: FileText,
  doc: FileText,
  image: FileImage,
  link: LinkIcon,
  zip: FileArchive,
};

const fileColorMap: Record<string, string> = {
  pdf: "text-red-400 bg-red-400/10",
  doc: "text-blue-400 bg-blue-400/10",
  image: "text-emerald-400 bg-emerald-400/10",
  link: "text-accent bg-accent/10",
  zip: "text-orange-400 bg-orange-400/10",
};

const statusConfig: Record<string, { label: string; color: string }> = {
  production: { label: "En production", color: "text-emerald-400 bg-emerald-400/10" },
  "en-cours": { label: "En cours", color: "text-accent bg-accent/10" },
  terminé: { label: "Terminé", color: "text-zinc-400 bg-zinc-400/10" },
  prototype: { label: "Prototype", color: "text-orange-400 bg-orange-400/10" },
};

// ---------------------------------------------------------------------------
// Lightbox
// ---------------------------------------------------------------------------
function Lightbox({
  images,
  index,
  onClose,
}: {
  images: ProjectImage[];
  index: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(index);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Close */}
        <button
          className="absolute top-4 right-4 rounded-full border border-white/20 p-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors z-10"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        {/* Counter */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/50 text-sm font-mono">
          {current + 1} / {images.length}
        </div>

        {/* Prev */}
        {images.length > 1 && (
          <button
            className="absolute left-4 rounded-full border border-white/20 p-3 text-white/70 hover:text-white hover:bg-white/10 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={22} />
          </button>
        )}

        {/* Image */}
        <motion.div
          key={current}
          className="relative max-w-5xl w-full max-h-[80vh] flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full max-h-[70vh] rounded-xl overflow-hidden">
            <Image
              src={images[current].src}
              alt={images[current].alt}
              width={1200}
              height={800}
              className="object-contain w-full h-full max-h-[70vh]"
            />
          </div>
          {images[current].caption && (
            <p className="mt-3 text-white/60 text-sm text-center">
              {images[current].caption}
            </p>
          )}
        </motion.div>

        {/* Next */}
        {images.length > 1 && (
          <button
            className="absolute right-4 rounded-full border border-white/20 p-3 text-white/70 hover:text-white hover:bg-white/10 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={22} />
          </button>
        )}

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                className={`h-1.5 rounded-full transition-all ${
                  i === current ? "w-6 bg-white" : "w-1.5 bg-white/30"
                }`}
              />
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

// ---------------------------------------------------------------------------
// Galerie
// ---------------------------------------------------------------------------
function ImageGallery({ images }: { images: ProjectImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (images.length === 0) {
    return (
      <div className="glass-card flex flex-col items-center justify-center gap-3 py-14 text-muted border-dashed">
        <Images size={32} className="opacity-30" />
        <p className="text-sm">Aucune image pour l&apos;instant.</p>
        <p className="text-xs opacity-60">
          Dépose tes images dans{" "}
          <code className="font-mono bg-card-border/50 px-1.5 py-0.5 rounded">
            public/projets/[slug]/images/
          </code>
        </p>
      </div>
    );
  }

  const gridClass =
    images.length === 1
      ? "grid-cols-1"
      : images.length === 2
      ? "grid-cols-2"
      : images.length === 3
      ? "grid-cols-3"
      : "grid-cols-2 sm:grid-cols-3";

  return (
    <>
      <div className={`grid gap-3 ${gridClass}`}>
        {images.map((img, i) => (
          <motion.button
            key={i}
            className={`group relative overflow-hidden rounded-xl bg-card border border-card-border hover:border-accent/40 transition-all ${
              images.length === 1 ? "aspect-video" : "aspect-video"
            }`}
            onClick={() => setLightboxIndex(i)}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.01 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-end p-3">
              {img.caption && (
                <span className="text-xs text-white/0 group-hover:text-white/90 transition-all translate-y-1 group-hover:translate-y-0 bg-black/50 px-2 py-1 rounded-md backdrop-blur-sm">
                  {img.caption}
                </span>
              )}
            </div>
          </motion.button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
export default function ProjectDetailClient({
  project,
  competencesBTS,
}: {
  project: Project;
  competencesBTS: string[];
}) {
  const IconComponent = iconMap[project.icon] || Layers;
  const status = statusConfig[project.status];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-card-border bg-section-alt">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Retour aux projets
            </Link>

            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="rounded-2xl bg-accent/10 p-5 text-accent shrink-0">
                <IconComponent size={40} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full ${status.color}`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {status.label}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                    <Clock size={12} />
                    {project.periode}
                  </span>
                  {project.client && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                      <Building2 size={12} />
                      {project.client}
                    </span>
                  )}
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{project.title}</h1>
                <p className="mt-3 text-xl text-muted">{project.tagline}</p>

                <div className="mt-6 flex items-center gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-card-border px-4 py-2 text-sm hover:bg-card transition-colors text-muted hover:text-foreground">
                      <Github size={15} /> Code source
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-dark transition-colors">
                      <ExternalLink size={15} /> Voir le projet
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.techs.map((tech) => (
                <span key={tech} className="text-xs font-mono px-3 py-1.5 rounded-full bg-accent/10 text-accent">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left — Details */}
          <div className="lg:col-span-2 space-y-14">

            {/* Description */}
            <motion.section
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <SectionTitle icon={BookOpen}>Présentation</SectionTitle>
              <p className="text-muted leading-relaxed">{project.description}</p>
            </motion.section>

            {/* Contexte */}
            <motion.section
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <SectionTitle icon={Layers}>Contexte</SectionTitle>
              <div className="glass-card p-6">
                <p className="text-muted leading-relaxed">{project.context}</p>
              </div>
            </motion.section>

            {/* Galerie d'images */}
            <motion.section
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
            >
              <SectionTitle icon={Images}>
                Galerie
                {project.images.length > 0 && (
                  <span className="ml-2 text-xs font-normal text-muted">
                    ({project.images.length} image{project.images.length > 1 ? "s" : ""})
                  </span>
                )}
              </SectionTitle>
              <ImageGallery images={project.images} />
            </motion.section>

            {/* Objectifs */}
            <motion.section
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SectionTitle icon={Target}>Objectifs</SectionTitle>
              <ul className="space-y-3">
                {project.objectives.map((obj, i) => (
                  <motion.li key={i} className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + i * 0.05 }}>
                    <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-muted">{obj}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            {/* Fonctionnalités */}
            <motion.section
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <SectionTitle icon={Zap}>Fonctionnalités</SectionTitle>
              <div className="grid gap-3 sm:grid-cols-2">
                {project.features.map((feat, i) => (
                  <motion.div key={i} className="glass-card p-4 flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.04 }}>
                    <div className="h-1.5 w-1.5 rounded-full bg-accent shrink-0 mt-2" />
                    <p className="text-sm text-muted">{feat}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Documents & fichiers */}
            <motion.section
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <SectionTitle icon={FileStack}>
                Documents & fichiers
                {project.files.length > 0 && (
                  <span className="ml-2 text-xs font-normal text-muted">
                    ({project.files.length} fichier{project.files.length > 1 ? "s" : ""})
                  </span>
                )}
              </SectionTitle>

              {project.files.length === 0 ? (
                <div className="glass-card flex flex-col items-center justify-center gap-3 py-14 text-muted border-dashed">
                  <FileStack size={32} className="opacity-30" />
                  <p className="text-sm">Aucun fichier pour l&apos;instant.</p>
                  <p className="text-xs opacity-60">
                    Dépose tes fichiers dans{" "}
                    <code className="font-mono bg-card-border/50 px-1.5 py-0.5 rounded">
                      public/projets/[slug]/files/
                    </code>
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {project.files.map((file, i) => {
                    const FileIcon = fileIconMap[file.type];
                    const colorClass = fileColorMap[file.type];
                    return (
                      <motion.a key={i} href={file.url}
                        className="glass-card p-5 flex items-center gap-4 hover:border-accent/30 transition-all duration-200 group cursor-pointer"
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 + i * 0.05 }}
                        target={file.type === "link" ? "_blank" : undefined}
                        rel={file.type === "link" ? "noopener noreferrer" : undefined}
                        download={file.type !== "link" ? true : undefined}
                      >
                        <div className={`shrink-0 rounded-xl p-3 ${colorClass}`}>
                          <FileIcon size={22} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm group-hover:text-accent transition-colors">
                            {file.name}
                          </p>
                          <p className="text-xs text-muted mt-0.5 truncate">{file.description}</p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          {file.size && (
                            <span className="text-xs text-muted hidden sm:block">{file.size}</span>
                          )}
                          <div className="rounded-full border border-card-border p-1.5 text-muted group-hover:border-accent group-hover:text-accent transition-all">
                            <FileDown size={14} />
                          </div>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              )}
            </motion.section>
          </div>

          {/* Right — Sidebar */}
          <div className="space-y-6">
            {/* Compétences BTS */}
            <motion.div className="glass-card p-6"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
                <CheckCircle2 size={15} className="text-accent" />
                Compétences BTS mobilisées
              </h3>
              <div className="space-y-3">
                {project.competences.map((idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-[10px] font-mono text-accent bg-accent/10 px-2 py-1 rounded-full shrink-0 mt-0.5">
                      C{idx + 1}
                    </span>
                    <p className="text-xs text-muted leading-relaxed">{competencesBTS[idx]}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stack */}
            <motion.div className="glass-card p-6"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}>
              <h3 className="text-sm font-semibold mb-4">Stack technique</h3>
              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span key={tech} className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Infos */}
            <motion.div className="glass-card p-6"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}>
              <h3 className="text-sm font-semibold mb-4">Informations</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted">Période</span>
                  <span className="font-medium text-right text-xs">{project.periode}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted">Statut</span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${status.color}`}>
                    {status.label}
                  </span>
                </div>
                {project.client && (
                  <div className="flex items-center justify-between">
                    <span className="text-muted">Client</span>
                    <span className="font-medium text-xs">{project.client}</span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-muted">Images</span>
                  <span className="font-medium">{project.images.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted">Documents</span>
                  <span className="font-medium">{project.files.length}</span>
                </div>
              </div>
            </motion.div>

            {/* Autres projets */}
            <motion.div className="glass-card p-6"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}>
              <h3 className="text-sm font-semibold mb-4">Autres projets</h3>
              <OtherProjectsLinks currentSlug={project.slug} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function SectionTitle({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <h2 className="flex items-center gap-2 text-lg font-semibold mb-5">
      <Icon size={18} className="text-accent" />
      {children}
    </h2>
  );
}

function OtherProjectsLinks({ currentSlug }: { currentSlug: string }) {
  const others = [
    { slug: "autosoft", title: "Autosoft", icon: Car },
    { slug: "c-sharp", title: "Projet C#", icon: Terminal },
    { slug: "glpi-customized", title: "GLPI Customized", icon: Monitor },
    { slug: "android-studio", title: "Android Studio", icon: Smartphone },
  ].filter((p) => p.slug !== currentSlug);

  return (
    <div className="space-y-1">
      {others.map((p) => (
        <Link key={p.slug} href={`/projets/${p.slug}`}
          className="flex items-center gap-2.5 rounded-xl p-2.5 hover:bg-card border border-transparent hover:border-card-border transition-all text-sm text-muted hover:text-foreground group">
          <p.icon size={14} className="text-accent shrink-0" />
          {p.title}
          <ChevronRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
      ))}
    </div>
  );
}
