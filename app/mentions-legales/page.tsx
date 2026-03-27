import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | Mattias Mathevon",
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Retour à l&apos;accueil
        </Link>

        <h1 className="text-3xl font-bold tracking-tight mb-2">Mentions légales</h1>
        <p className="text-muted text-sm mb-10">Dernière mise à jour : mars 2026</p>

        <div className="space-y-10 text-sm text-muted leading-relaxed">
          {/* Editeur */}
          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">
              1. Editeur du site
            </h2>
            <div className="glass-card p-5 space-y-1">
              <p><span className="font-medium text-foreground">Nom :</span> Mattias Mathevon</p>
              <p><span className="font-medium text-foreground">Statut :</span> Etudiant-Entrepreneur (SNEE)</p>
              <p><span className="font-medium text-foreground">Email :</span> mattias.mathevon@gmail.com</p>
              <p><span className="font-medium text-foreground">Localisation :</span> Toulouse, France</p>
            </div>
          </section>

          {/* Hébergeur */}
          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">
              2. Hébergeur
            </h2>
            <div className="glass-card p-5 space-y-1">
              <p><span className="font-medium text-foreground">Société :</span> Vercel Inc.</p>
              <p><span className="font-medium text-foreground">Adresse :</span> 340 Pine Street, Suite 701, San Francisco, CA 94104, USA</p>
              <p><span className="font-medium text-foreground">Site web :</span> vercel.com</p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">
              3. Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, projets, code, documents) est la propriété
              exclusive de Mattias Mathevon, sauf mention contraire. Toute reproduction, distribution ou
              utilisation sans autorisation préalable est interdite.
            </p>
          </section>

          {/* Données personnelles - RGPD */}
          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">
              4. Protection des données personnelles (RGPD)
            </h2>
            <p className="mb-3">
              Conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679) et
              à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez des droits suivants
              sur vos données personnelles.
            </p>
            <div className="glass-card p-5 space-y-3">
              <div>
                <p className="font-medium text-foreground mb-1">Données collectées via le formulaire de contact :</p>
                <ul className="space-y-1 pl-4">
                  <li>• Nom et prénom</li>
                  <li>• Adresse email</li>
                  <li>• Contenu du message</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Finalité :</p>
                <p>Répondre aux demandes de contact. Aucune donnée n&apos;est revendue ni transmise à des tiers.</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Durée de conservation :</p>
                <p>Les données sont conservées le temps nécessaire au traitement de la demande, puis supprimées.</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Vos droits :</p>
                <p>
                  Accès, rectification, suppression, opposition et portabilité de vos données.
                  Pour exercer ces droits, contactez-moi à{" "}
                  <a href="mailto:mattias.mathevon@gmail.com" className="text-accent hover:underline">
                    mattias.mathevon@gmail.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">
              5. Cookies
            </h2>
            <p>
              Ce site n&apos;utilise pas de cookies de tracking ou publicitaires. Seuls des cookies techniques
              strictement nécessaires au bon fonctionnement du site peuvent être déposés.
            </p>
          </section>

          {/* Responsabilité */}
          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">
              6. Limitation de responsabilité
            </h2>
            <p>
              Les informations présentées sur ce site sont fournies à titre indicatif. Mattias Mathevon
              s&apos;efforce de maintenir le contenu à jour mais ne peut garantir l&apos;exactitude ou
              l&apos;exhaustivité des informations. Les liens externes ne sont pas sous son contrôle.
            </p>
          </section>

          {/* Contact DPO */}
          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">
              7. Contact
            </h2>
            <p>
              Pour toute question relative à ces mentions légales ou à vos données personnelles :{" "}
              <a href="mailto:mattias.mathevon@gmail.com" className="text-accent hover:underline">
                mattias.mathevon@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
