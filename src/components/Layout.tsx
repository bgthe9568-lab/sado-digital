import { useEffect, useState } from 'react';
import { Menu, Phone, MessageCircle, X, ArrowUpRight } from 'lucide-react';
import { displayPhone, phone, whatsappBase } from '@/data';

export type PageKey = 'accueil' | 'services' | 'realisations' | 'packs' | 'a-propos' | 'devis' | 'contact';

export const navItems: { key: PageKey; label: string }[] = [
  { key: 'accueil', label: 'Accueil' },
  { key: 'services', label: 'Services' },
  { key: 'realisations', label: 'Réalisations' },
  { key: 'packs', label: 'Packs' },
  { key: 'a-propos', label: 'À propos' },
  { key: 'contact', label: 'Contact' },
  { key: 'devis', label: 'Devis' },
];

export function useHashRoute(): PageKey {
  const getRoute = (): PageKey => {
    const hash = window.location.hash.replace('#', '') as PageKey;
    const valid: PageKey[] = ['accueil', 'services', 'realisations', 'packs', 'a-propos', 'devis', 'contact'];
    return valid.includes(hash) ? hash : 'accueil';
  };
  const [route, setRoute] = useState<PageKey>(getRoute);
  useEffect(() => {
    const onChange = () => {
      setRoute(getRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return route;
}

export function Brand({ light = false, onClick }: { light?: boolean; onClick?: () => void }) {
  return (
    <a className={`brand ${light ? 'brand-light' : ''}`} href="#accueil" aria-label="Sado Digital, accueil" onClick={onClick}>
      <img className="brand-logo" src="/images/logo_sado_digital.png" alt="Sado Digital" />
    </a>
  );
}

export function Header({ current }: { current: PageKey }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Brand onClick={closeMenu} />
        <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Navigation principale">
          {navItems.map((item) => (
            <a key={item.key} href={`#${item.key}`} className={current === item.key ? 'nav-active' : ''} onClick={closeMenu}>{item.label}</a>
          ))}
          <a className="nav-phone" href={`tel:${phone}`} onClick={closeMenu}><Phone size={15} /> {displayPhone}</a>
          <a className="button button-small button-primary" href="#devis" onClick={closeMenu}>Demander un devis <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Brand light />
          <p>Votre Partenaire en Solutions Informatiques Globales.</p>
        </div>
        <div>
          <h4>Navigation</h4>
          {navItems.map((item) => <a key={item.key} href={`#${item.key}`}>{item.label}</a>)}
        </div>
        <div>
          <h4>Services principaux</h4>
          <a href="#services">Création web</a>
          <a href="#services">Design & communication</a>
          <a href="#services">Maintenance</a>
          <a href="#services">Réseaux & Wi-Fi</a>
        </div>
        <div>
          <h4>Nous contacter</h4>
          <a href={`tel:${phone}`}>{displayPhone}</a>
          <a href={whatsappBase} target="_blank" rel="noreferrer">WhatsApp</a>
          <span>Côte d'Ivoire</span>
          <a className="footer-cta" href="#devis">Demander un devis <ArrowUpRight size={15} /></a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© Sado Digital — Tous droits réservés.</span>
        <span>Conçu avec précision en Côte d'Ivoire.</span>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a className="floating-whatsapp" href={whatsappBase} target="_blank" rel="noreferrer" aria-label="Contacter Sado Digital sur WhatsApp">
      <MessageCircle size={23} />
    </a>
  );
}
