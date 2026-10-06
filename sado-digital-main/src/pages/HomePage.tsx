import { ArrowUpRight, Bot, ChevronRight, Code2, Globe2, Layers3, MessageCircle, ShieldCheck, Sparkles, Wifi, Zap } from 'lucide-react';
import { displayPhone, phone, whatsappBase, whatsappInfo, services, packs, steps } from '@/data';
import { CTASection } from '@/components/SharedSections';

export function HomePage() {
  const previewServices = services.slice(0, 8);

  return (
    <>
      <section className="hero" id="accueil">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="container hero-content">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="eyebrow-line" /> Solutions informatiques & digitales</div>
            <h1>Le digital, pensé<br /><em>pour avancer.</em></h1>
            <p className="hero-lead">Des solutions informatiques et digitales conçues pour accompagner les professionnels, entrepreneurs, commerces et entreprises dans leur développement.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#devis">Démarrer un projet <ArrowUpRight size={17} /></a>
              <a className="button button-outline" href={whatsappInfo} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a>
            </div>
            <a className="direct-contact" href={`tel:${phone}`}><span className="pulse-dot" /> Contact direct <strong>{displayPhone}</strong> <ChevronRight size={16} /></a>
          </div>
          <div className="hero-visual reveal reveal-delay">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="tech-card main-tech-card">
              <div className="tech-card-top"><span className="status-dot" /> SADO / DIGITAL <span className="tech-chip">SD.01</span></div>
              <div className="sd-symbol"><span>S</span><span>D</span><div className="circuit circuit-a" /><div className="circuit circuit-b" /></div>
              <div className="tech-card-bottom"><span>Solutions globales</span><span>CI / 2026</span></div>
            </div>
            <div className="floating-card floating-top"><span className="floating-icon"><Code2 size={16} /></span><div><strong>Création digitale</strong><small>Du concept au concret</small></div></div>
            <div className="floating-card floating-bottom"><span className="floating-icon green-icon"><Wifi size={16} /></span><div><strong>Connecté pour réussir</strong><small>Web · Réseaux · Support</small></div></div>
            <span className="data-label data-label-one">01 / 1101</span><span className="data-label data-label-two">CONNECTING_</span>
          </div>
        </div>
        <div className="hero-services-strip"><div className="container strip-inner"><span>Notre expertise</span><div><b>Création web</b><b>Design</b><b>Réseaux sociaux</b><b>Maintenance</b><b>Réseaux & Wi-Fi</b><b>SEO</b></div><ArrowUpRight size={17} /></div></div>
      </section>

      <section className="section section-intro">
        <div className="container intro-grid">
          <div><div className="section-kicker">01 / L'essentiel</div><h2>Un partenaire digital,<br /><span>une vision globale.</span></h2></div>
          <div className="intro-text">
            <p>Sado Digital accompagne les particuliers, entrepreneurs, commerces, associations et entreprises dans leurs projets informatiques et digitaux.</p>
            <p>Notre objectif : proposer des solutions professionnelles, accessibles et adaptées aux besoins réels de chaque client.</p>
            <a className="text-link" href="#a-propos">À propos de Sado Digital <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="container value-grid">
          <div className="value-card"><span>01</span><ShieldCheck size={24} /><h3>Clarté</h3><p>Des solutions lisibles, avec un devis adapté au projet.</p></div>
          <div className="value-card"><span>02</span><Zap size={24} /><h3>Modernité</h3><p>Des outils actuels pour vous aider à rester compétitif.</p></div>
          <div className="value-card"><span>03</span><MessageCircle size={24} /><h3>Accompagnement</h3><p>Une présence humaine avant, pendant et après le projet.</p></div>
          <div className="value-card"><span>04</span><Layers3 size={24} /><h3>Globalité</h3><p>Web, design, informatique et réseaux réunis au même endroit.</p></div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="section-heading">
            <div><div className="section-kicker">02 / Expertise</div><h2>Nos domaines<br /><span>d'expertise.</span></h2></div>
            <p>Une offre structurée en 7 catégories pour donner forme à vos idées, fiabiliser vos outils et développer votre présence numérique.</p>
          </div>
          <div className="services-grid">
            {previewServices.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.number}>
                  <div className={`service-icon ${service.color}`}><Icon size={20} /></div>
                  <div className="service-number">{service.number}</div>
                  <div className="service-category">{service.category}</div>
                  <h3>{service.title}</h3>
                  <div className="service-price">{service.price}</div>
                </article>
              );
            })}
          </div>
          <div className="section-more"><a className="text-link" href="#services">Découvrir tous nos services <ArrowUpRight size={16} /></a></div>
        </div>
      </section>

      <section className="section dark-section process-section">
        <div className="container">
          <div className="section-heading light-heading">
            <div><div className="section-kicker">03 / Notre méthode</div><h2>Simple, structurée,<br /><span>orientée résultat.</span></h2></div>
            <p>Chaque projet avance avec une méthode claire, du premier échange jusqu'au support.</p>
          </div>
          <div className="process-list">
            {steps.map(([number, title, text]) => (
              <div className="process-step" key={number}>
                <span className="process-number">{number}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <ChevronRight size={19} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section showcase-section">
        <div className="container">
          <div className="section-heading">
            <div><div className="section-kicker">04 / Aperçu</div><h2>Des idées concrètes,<br /><span>sans promesses artificielles.</span></h2></div>
            <p>Un aperçu de notre approche. Chaque réalisation est clairement identifiée lorsqu'elle est démonstrative.</p>
          </div>
          <div className="showcase-grid">
            <article className="showcase-card showcase-large">
              <div className="showcase-visual visual-web">
                <div className="browser-bar"><i /><i /><i /><span>sado-studio.ci</span></div>
                <div className="mock-web"><span className="mock-line short" /><span className="mock-line long" /><span className="mock-line medium" /><div className="mock-boxes"><i /><i /><i /></div></div>
              </div>
              <div className="showcase-info"><span>Projet démonstration</span><h3>Site vitrine professionnel</h3></div>
            </article>
            <article className="showcase-card">
              <div className="showcase-visual visual-brand"><div className="brand-poster"><span>SD</span><strong>Votre marque.<br />Votre présence.</strong><i /></div></div>
              <div className="showcase-info"><span>Projet démonstration</span><h3>Identité & présence digitale</h3></div>
            </article>
            <article className="showcase-card">
              <div className="showcase-visual visual-app"><div className="app-window"><div className="app-sidebar" /><div className="app-content"><span /><span /><div /><div /></div></div></div>
              <div className="showcase-info"><span>Projet démonstration</span><h3>Application web métier</h3></div>
            </article>
          </div>
          <div className="section-more"><a className="text-link" href="#realisations">Voir toutes nos réalisations <ArrowUpRight size={16} /></a></div>
        </div>
      </section>

      <section className="section packs-section">
        <div className="container">
          <div className="section-heading">
            <div><div className="section-kicker">05 / Formules</div><h2>Le bon point de départ<br /><span>pour votre activité.</span></h2></div>
            <p>Des packs clairs pour lancer, structurer ou maintenir votre présence digitale.</p>
          </div>
          <div className="packs-grid">
            {packs.map((pack) => (
              <article className={`pack-card ${pack.featured ? 'featured' : ''}`} key={pack.name}>
                {pack.featured && <div className="featured-label">Formule complète</div>}
                <div className="pack-top"><span>Pack</span><span>0{packs.indexOf(pack) + 1}</span></div>
                <h3>{pack.name}</h3>
                <p>{pack.description}</p>
                <div className="pack-price"><strong>{pack.price}</strong> <span>FCFA {pack.suffix}</span></div>
                <ul>{pack.items.map((item) => <li key={item}><span className="pack-check" />{item}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="section-more"><a className="text-link" href="#packs">Voir les packs en détail <ArrowUpRight size={16} /></a></div>
        </div>
      </section>

      <section className="section automation-section">
        <div className="container automation-box">
          <div className="automation-orb"><Bot size={32} /></div>
          <div>
            <div className="section-kicker">06 / Prêt pour la suite</div>
            <h2>IA & automatisation,<br /><span>quand vous serez prêt.</span></h2>
            <p>Nous pouvons concevoir des automatisations de tâches, intégrations spécifiques, outils intelligents et solutions numériques personnalisées pour optimiser vos processus.</p>
          </div>
          <a className="button button-outline" href="#devis">Parlons de vos besoins <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <CTASection title="Un projet en tête ?" accent="Parlons-en." text="Quelques informations suffisent pour commencer. Nous vous recontacterons pour comprendre votre besoin et vous orienter vers la bonne solution." />
    </>
  );
}
