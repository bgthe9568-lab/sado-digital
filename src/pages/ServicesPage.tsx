import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { services, serviceCategories, type ServiceColor } from '@/data';
import { PageHero, CTASection } from '@/components/SharedSections';

const categoryDescriptions: Record<string, string> = {
  'Web & digital': 'Sites vitrines, boutiques en ligne, landing pages et maintenance web pour bâtir votre présence en ligne.',
  'Design & communication': 'Logos, cartes de visite, affiches et supports visuels pour une identité forte et cohérente.',
  'Réseaux sociaux': 'Création et gestion de pages professionnelles pour développer votre audience et votre engagement.',
  'Informatique': 'Installation, diagnostic, maintenance et sauvegarde pour garder vos outils fiables au quotidien.',
  'Réseaux & connectivité': "Wi-Fi, réseaux d'entreprise et configuration d'imprimantes pour une connectivité sans faille.",
  'Développement': 'Applications web sur-mesure pour automatiser et structurer vos opérations métier.',
  'SEO & visibilité': 'Référencement local pour améliorer votre visibilité dans les recherches de votre zone.',
};

export function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const filteredServices = activeCategory === 'Tous' ? services : services.filter((service) => service.category === activeCategory);

  const groupedServices = activeCategory === 'Tous'
    ? serviceCategories.slice(1).map((cat) => ({ category: cat, items: services.filter((s) => s.category === cat) }))
    : [{ category: activeCategory, items: filteredServices }];

  return (
    <>
      <PageHero
        kicker="Nos prestations"
        title="20 services pour"
        accent="couvrir tous vos besoins."
        lead="Du logo à l'application web, de l'installation Wi-Fi au référencement local — chaque prestation est détaillée avec un prix indicatif pour vous aider à planifier votre projet."
        current="services"
      />

      <section className="section services-detail-section">
        <div className="container">
          <div className="category-tabs" role="tablist">
            {serviceCategories.map((category) => (
              <button key={category} className={activeCategory === category ? 'active' : ''} onClick={() => setActiveCategory(category)}>{category}</button>
            ))}
          </div>

          {groupedServices.map((group) => (
            <div className="service-group" key={group.category}>
              <div className="service-group-header">
                <div>
                  <div className="service-group-label">{group.category}</div>
                  <h2>{group.category}</h2>
                </div>
                <p>{categoryDescriptions[group.category] || ''}</p>
              </div>
              <div className="services-detail-grid">
                {group.items.map((service) => {
                  const Icon = service.icon;
                  return (
                    <article className="service-detail-card" key={service.number}>
                      <div className="service-detail-top">
                        <div className={`service-icon ${service.color as ServiceColor}`}><Icon size={20} /></div>
                        <span className="service-number">{service.number}</span>
                      </div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <div className="service-detail-bottom">
                        <div className="service-price">{service.price}</div>
                        <a className="button button-small button-primary" href="#devis">Demander un devis <ArrowUpRight size={14} /></a>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="pricing-note">
            <span className="note-mark">i</span>
            <p><strong>Tarifs indicatifs</strong> — le montant final peut varier selon les fonctionnalités, le niveau de personnalisation, le matériel, le déplacement et les besoins spécifiques. Les prestations complexes comme les applications web, les réseaux d'entreprise et les solutions personnalisées sont proposées sur devis après analyse du besoin.</p>
          </div>
        </div>
      </section>

      <CTASection title="Une prestation sur-mesure ?" accent="Demandez un devis." text="Décrivez votre besoin et nous vous proposerons la solution adaptée avec un devis clair et détaillé." />
    </>
  );
}
