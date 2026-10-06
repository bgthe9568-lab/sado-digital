import { Compass, Eye, HandHeart, Target, Users } from 'lucide-react';
import { methodSteps } from '@/data';
import { PageHero, CTASection } from '@/components/SharedSections';

export function AboutPage() {
  return (
    <>
      <PageHero
        kicker="Notre entreprise"
        title="Sado Digital,"
        accent="votre partenaire de confiance."
        lead="Une entreprise ivoirienne dédiée aux solutions informatiques et digitales, qui accompagne les particuliers, entrepreneurs, commerces, associations et entreprises dans leurs projets numériques."
        current="a-propos"
      />

      <section className="section about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <div className="section-kicker">01 / Qui sommes-nous</div>
              <h2>Une entreprise<br /><span>au service du numérique.</span></h2>
              <p>Sado Digital est une entreprise spécialisée dans les solutions informatiques et digitales, basée en Côte d'Ivoire. Notre mission est de rendre le numérique accessible, professionnel et utile pour ceux qui veulent développer leur activité ou fiabiliser leurs outils.</p>
              <p>Nous proposons une offre globale qui couvre le web, le design, les réseaux sociaux, la maintenance informatique, les réseaux et la connectivité, le développement et le référencement. L'objectif : être un partenaire unique pour tous les besoins numériques de nos clients.</p>
            </div>
            <div className="about-stats">
              <div className="about-stat"><strong>20</strong><span>Services proposés</span></div>
              <div className="about-stat"><strong>7</strong><span>Domaines d'expertise</span></div>
              <div className="about-stat"><strong>4</strong><span>Packs commerciaux</span></div>
              <div className="about-stat"><strong>01</strong><span>Objectif : votre réussite</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-vision-section">
        <div className="container">
          <div className="about-cards-grid">
            <div className="about-card">
              <Target size={28} />
              <h3>Notre objectif</h3>
              <p>Proposer des solutions professionnelles, accessibles et adaptées aux besoins réels de chaque client — sans jargon inutile, sans promesses artificielles.</p>
            </div>
            <div className="about-card">
              <Eye size={28} />
              <h3>Notre vision</h3>
              <p>Un numérique local de qualité, qui accompagne le développement des entrepreneurs et entreprises de Côte d'Ivoire avec des outils modernes et fiables.</p>
            </div>
            <div className="about-card">
              <Compass size={28} />
              <h3>Notre positionnement</h3>
              <p>Un partenaire polyvalent qui réunit web, design, informatique et réseaux sous un même toit, pour simplifier la vie de ses clients.</p>
            </div>
            <div className="about-card">
              <HandHeart size={28} />
              <h3>Notre approche</h3>
              <p>Écouter, analyser, proposer, réaliser, tester, livrer, accompagner. Une méthode claire à chaque étape du projet.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-section about-method-section">
        <div className="container">
          <div className="section-heading light-heading">
            <div><div className="section-kicker">02 / Notre méthode</div><h2>Sept étapes,<br /><span>une exigence constante.</span></h2></div>
            <p>De l'écoute initiale à l'accompagnement post-livraison, chaque phase a un objectif précis.</p>
          </div>
          <div className="method-flow">
            {methodSteps.map((step, index) => (
              <div className="method-step" key={step}>
                <span className="method-num">0{index + 1}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-clients-section">
        <div className="container">
          <div className="section-heading">
            <div><div className="section-kicker">03 / Qui nous accompagnons</div><h2>Pour tous ceux qui<br /><span>veulent avancer.</span></h2></div>
            <p>Sado Digital s'adresse à toute personne ou structure qui a besoin de solutions informatiques ou digitales.</p>
          </div>
          <div className="clients-grid">
            {[
              ["Particuliers", "Besoin d'assistance, d'installation ou de conseils informatiques."],
              ['Entrepreneurs', 'Envie de lancer une activité avec une image professionnelle dès le départ.'],
              ["Commerces", "Besoin d'une présence en ligne et d'outils pour attirer des clients."],
              ['Associations', 'Recherche de solutions digitales accessibles pour communiquer et gérer.'],
              ["PME", "Besoin d'un partenaire pour le web, les réseaux et la maintenance informatique."],
              ['Entreprises', 'Recherche de solutions structurées : sites, applications, réseaux, support.'],
            ].map(([title, desc]) => (
              <div className="client-card" key={title}>
                <Users size={22} />
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Travaillons ensemble." accent="Parlons de votre projet." text="Que vous soyez particulier, entrepreneur ou entreprise, nous avons une solution adaptée à votre besoin et à votre budget." />
    </>
  );
}
