import { ArrowUpRight, Check, Info } from 'lucide-react';
import { packs } from '@/data';
import { PageHero, CTASection } from '@/components/SharedSections';

const packDetails: Record<string, { ideal: string; includes: string[]; note: string }> = {
  Starter: { ideal: 'Idéal pour une activité qui démarre et veut une image professionnelle rapidement.', includes: ['Logo professionnel', 'Page Facebook professionnelle', 'Photo de couverture personnalisée', '3 visuels publicitaires'], note: 'Parfait pour établir une première présence crédible en ligne.' },
  Business: { ideal: 'Idéal pour une entreprise qui veut une présence digitale cohérente et exploitable.', includes: ['Logo professionnel', 'Site web vitrine', 'Page Facebook professionnelle', 'Bouton WhatsApp intégré', 'Intégration Google Maps', 'Formation à la gestion'], note: 'Le pack le plus équilibré pour développer votre activité en ligne.' },
  Pro: { ideal: 'Idéal pour une entreprise qui veut un écosystème digital complet et professionnel.', includes: ['Identité visuelle complète', 'Site web professionnel', 'SEO de base', 'Gestion des réseaux sociaux', 'Configuration WhatsApp Business', '3 mois de support inclus'], note: "La solution complète pour passer à l'étape supérieure." },
  Maintenance: { ideal: 'Idéal pour maintenir vos outils informatiques en condition optimale.', includes: ['Maintenance informatique', 'Assistance à distance', 'Sauvegardes régulières', 'Mises à jour système', 'Support technique'], note: 'Engagement mensuel, résiliable avec préavis.' },
};

export function PacksPage() {
  return (
    <>
      <PageHero
        kicker="Nos offres commerciales"
        title="Des packs clairs"
        accent="pour chaque ambition."
        lead="Quatre formules pour lancer, structurer ou maintenir votre présence digitale. Chaque pack peut être personnalisé après analyse de votre besoin — le prix final dépend du niveau de personnalisation."
        current="packs"
      />

      <section className="section packs-detail-section">
        <div className="container">
          <div className="packs-detail-grid">
            {packs.map((pack) => {
              const detail = packDetails[pack.name];
              return (
                <article className={`pack-detail-card ${pack.featured ? 'featured' : ''}`} key={pack.name}>
                  {pack.featured && <div className="featured-label">Formule complète</div>}
                  <div className="pack-detail-top">
                    <span className="pack-detail-label">Pack {pack.name}</span>
                    <span className="pack-detail-num">0{packs.indexOf(pack) + 1}</span>
                  </div>
                  <h3>{pack.name}</h3>
                  <p className="pack-detail-desc">{pack.description}</p>
                  <div className="pack-price">
                    <strong>{pack.price}</strong>
                    <span>FCFA {pack.suffix}</span>
                  </div>
                  <div className="pack-ideal">{detail.ideal}</div>
                  <ul>
                    {detail.includes.map((item) => (
                      <li key={item}><Check size={15} />{item}</li>
                    ))}
                  </ul>
                  <div className="pack-note"><Info size={13} /> {detail.note}</div>
                  <a className={`button ${pack.featured ? 'button-primary' : 'button-dark'} pack-detail-cta`} href="#devis">
                    Choisir cette offre <ArrowUpRight size={15} />
                  </a>
                </article>
              );
            })}
          </div>

          <div className="packs-conditions">
            <h3>Conditions tarifaires</h3>
            <div className="conditions-grid">
              <div className="condition-item"><strong>Personnalisation</strong><p>Les packs peuvent être ajustés selon vos besoins. Le prix final est confirmé après analyse.</p></div>
              <div className="condition-item"><strong>Déplacement</strong><p>Frais de déplacement possibles en dehors d'Abidjan, selon la zone d'intervention.</p></div>
              <div className="condition-item"><strong>Délais</strong><p>Les délais varient selon le pack et la complexité. Un planning vous est communiqué au démarrage.</p></div>
              <div className="condition-item"><strong>Paiement</strong><p>Modalités de paiement discutées lors de la validation du devis.</p></div>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Un pack sur-mesure ?" accent="Parlons-en." text="Si aucun pack ne correspond exactement à votre besoin, nous pouvons en construire un adapté à votre activité." />
    </>
  );
}
