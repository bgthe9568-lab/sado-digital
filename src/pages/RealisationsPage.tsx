import { ArrowUpRight, Filter } from 'lucide-react';
import { projects } from '@/data';
import { PageHero, CTASection } from '@/components/SharedSections';

export function RealisationsPage() {
  return (
    <>
      <PageHero
        kicker="Portfolio & démonstrations"
        title="Nos réalisations"
        accent="et concepts."
        lead="Une sélection de projets démonstratifs, concepts et maquettes pour illustrer notre approche. Chaque projet est clairement identifié selon sa nature — sans aucune présentation trompeuse."
        current="realisations"
      />

      <section className="section realisations-section">
        <div className="container">
          <div className="realisations-intro">
            <div className="realisations-badge"><Filter size={14} /> 6 projets présentés</div>
            <p>Les projets ci-dessous sont des démonstrations, concepts ou maquettes. Ils montrent le type de réalisations que Sado Digital peut produire. De vraies réalisations clients pourront être ajoutées dans cette même structure à l'avenir.</p>
          </div>

          <div className="realisations-grid">
            {projects.map((project) => (
              <article className="realisation-card" key={project.id}>
                <div className={`showcase-visual ${project.visualClass}`}>
                  {project.visualClass === 'visual-web' && (
                    <>
                      <div className="browser-bar"><i /><i /><i /><span>sado-studio.ci</span></div>
                      <div className="mock-web"><span className="mock-line short" /><span className="mock-line long" /><span className="mock-line medium" /><div className="mock-boxes"><i /><i /><i /></div></div>
                    </>
                  )}
                  {project.visualClass === 'visual-brand' && (
                    <div className="brand-poster"><span>SD</span><strong>Votre marque.<br />Votre présence.</strong><i /></div>
                  )}
                  {project.visualClass === 'visual-app' && (
                    <div className="app-window"><div className="app-sidebar" /><div className="app-content"><span /><span /><div /><div /></div></div>
                  )}
                  {project.visualClass === 'visual-ecommerce' && (
                    <div className="ecommerce-mock"><div className="ecom-grid"><i /><i /><i /><i /></div><div className="ecom-cart" /></div>
                  )}
                  {project.visualClass === 'visual-landing' && (
                    <div className="landing-mock"><span className="landing-hero" /><span className="mock-line long" /><span className="mock-line medium" /><div className="landing-cta" /></div>
                  )}
                  {project.visualClass === 'visual-network' && (
                    <div className="network-mock"><div className="net-node net-core" /><div className="net-node net-1" /><div className="net-node net-2" /><div className="net-node net-3" /><div className="net-line net-line-1" /><div className="net-line net-line-2" /><div className="net-line net-line-3" /></div>
                  )}
                </div>
                <div className="realisation-info">
                  <span className={`project-type-badge ${project.type === 'Projet démonstration' ? 'badge-demo' : project.type === 'Concept' ? 'badge-concept' : 'badge-mock'}`}>{project.type}</span>
                  <div className="realisation-category">{project.category}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href="#devis">Discuter d'un projet similaire <ArrowUpRight size={15} /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Un projet en tête ?" accent="Donnons-lui forme." text="Nous pouvons concevoir une réalisation sur-mesure adaptée à votre activité et à vos objectifs." />
    </>
  );
}
