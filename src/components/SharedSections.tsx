import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { whatsappInfo } from '@/data';
import { type PageKey } from '@/components/Layout';

export function PageHero({ kicker, title, accent, lead, current }: { kicker: string; title: string; accent: string; lead: string; current: PageKey }) {
  return (
    <section className="page-hero" data-page={current}>
      <div className="hero-grid" />
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="container page-hero-content">
        <div className="breadcrumb"><a href="#accueil">Accueil</a><ChevronRight size={13} /><span>{title}</span></div>
        <div className="section-kicker">{kicker}</div>
        <h1>{title}<br /><em>{accent}</em></h1>
        <p className="page-hero-lead">{lead}</p>
        <div className="page-hero-actions">
          <a className="button button-primary" href="#devis">Demander un devis <ArrowUpRight size={16} /></a>
          <a className="button button-outline" href={whatsappInfo} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

export function CTASection({ title, accent, text }: { title: string; accent: string; text: string }) {
  return (
    <section className="section cta-band">
      <div className="container cta-inner">
        <div>
          <h2>{title}<br /><span>{accent}</span></h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <a className="button button-primary" href="#devis">Demander un devis <ArrowUpRight size={16} /></a>
          <a className="button button-outline" href="#contact">Nous contacter</a>
        </div>
      </div>
    </section>
  );
}
