import { ArrowUpRight, ChevronRight, MessageCircle, ShieldCheck, Sparkles, Target, Users, Wifi } from 'lucide-react';
import { displayPhone, phone, whatsappInfo } from '@/data';

const pillars = [
  { icon: Target, title: 'Vision claire', text: 'Des solutions pensées autour de vos objectifs.' },
  { icon: Sparkles, title: 'Image forte', text: 'Un univers digital cohérent et professionnel.' },
  { icon: Users, title: 'Présence humaine', text: 'Un accompagnement du premier échange au suivi.' },
];

export function HomePage() {
  return (
    <>
      <section className="landing-hero" id="accueil">
        <div className="landing-glow landing-glow-blue" /><div className="landing-glow landing-glow-green" /><div className="landing-grid" />
        <div className="container landing-grid-layout">
          <div className="landing-copy reveal"><div className="eyebrow"><span className="eyebrow-line" /> Votre partenaire digital</div><h1>Donnez une nouvelle<br /><em>dimension</em> à vos projets.</h1><p className="hero-lead">Sado Digital transforme vos besoins informatiques et digitaux en solutions utiles, élégantes et prêtes à faire avancer votre activité.</p><div className="hero-actions"><a className="button button-primary" href="#devis">Parler de votre projet <ArrowUpRight size={17} /></a><a className="button button-outline" href={whatsappInfo} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a></div><a className="direct-contact" href={`tel:${phone}`}><span className="pulse-dot" /> Disponible en Côte d'Ivoire <strong>{displayPhone}</strong> <ChevronRight size={16} /></a></div>
          <div className="landing-art reveal reveal-delay"><div className="landing-ring landing-ring-one" /><div className="landing-ring landing-ring-two" /><div className="landing-card"><span>SD / 01</span><div><img src="/images/logo_sado_digital.png" alt="Logo Sado Digital" /></div><small>Solutions globales · Web · IT · Réseaux</small></div><b className="landing-badge landing-badge-top">Pensé pour durer</b><b className="landing-badge landing-badge-bottom"><Wifi size={15} /> Connecté pour réussir</b></div>
        </div>
        <div className="landing-trust"><div className="container"><span>Une même exigence</span><b>Clarté</b><b>Fiabilité</b><b>Créativité</b><b>Proximité</b></div></div>
      </section>
      <section className="section landing-intro"><div className="container landing-intro-grid"><div><div className="section-kicker">01 / L'essentiel</div><h2>Le numérique devient simple<br /><span>quand il est bien pensé.</span></h2></div><div className="landing-intro-copy"><p>Sado Digital accompagne les particuliers, entrepreneurs, commerces, associations et entreprises qui veulent mieux travailler, mieux communiquer ou mieux se développer grâce au digital.</p><a className="text-link" href="#a-propos">Découvrir notre approche <ArrowUpRight size={16} /></a></div></div><div className="container landing-pillars">{pillars.map(({ icon: Icon, title, text }, index) => <article key={title}><span>0{index + 1}</span><Icon size={24} /><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="section landing-orientation"><div className="container landing-orientation-inner"><div><div className="section-kicker">02 / La bonne direction</div><h2>Un partenaire global,<br /><span>un seul point de départ.</span></h2><p>Découvrez nos services, nos réalisations et nos offres pour choisir la prochaine étape de votre activité.</p></div><div className="landing-links"><a href="#services"><ShieldCheck size={19} /><span><strong>Services</strong><small>Tout ce que nous pouvons construire</small></span><ArrowUpRight size={17} /></a><a href="#realisations"><Sparkles size={19} /><span><strong>Réalisations</strong><small>Une approche concrète et visuelle</small></span><ArrowUpRight size={17} /></a><a href="#packs"><Wifi size={19} /><span><strong>Packs</strong><small>Des formules pour commencer</small></span><ArrowUpRight size={17} /></a></div></div></section>
      <section className="section landing-final"><div className="container"><div><div className="section-kicker">03 / Prêt à avancer</div><h2>Votre projet mérite<br /><span>un vrai point de départ.</span></h2></div><div><p>Un premier échange suffit pour clarifier votre besoin et identifier la bonne solution.</p><a className="button button-primary" href="#devis">Demander un devis <ArrowUpRight size={16} /></a></div></div></section>
    </>
  );
}
