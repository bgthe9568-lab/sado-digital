import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { displayPhone, phone, whatsappBase } from '@/data';
import { PageHero } from '@/components/SharedSections';

export function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Nous contacter"
        title="Un besoin ?"
        accent="On est à votre écoute."
        lead="Contactez Sado Digital par téléphone, WhatsApp ou email. Nous sommes disponibles pour répondre à vos questions et discuter de votre projet."
        current="contact"
      />

      <section className="section contact-page-section">
        <div className="container">
          <div className="contact-page-grid">
            <div className="contact-page-info">
              <div className="section-kicker">Coordonnées</div>
              <h2>SADO DIGITAL</h2>
              <p className="contact-tagline">Votre Partenaire en Solutions Informatiques Globales</p>

              <div className="contact-page-lines">
                <div className="contact-page-line">
                  <span className="contact-icon"><MapPin size={18} /></span>
                  <div><small>Zone d'intervention</small><strong>Côte d'Ivoire</strong></div>
                </div>
                <div className="contact-page-line">
                  <span className="contact-icon"><Phone size={18} /></span>
                  <div><small>Téléphone</small><a href={`tel:${phone}`}>{displayPhone}</a></div>
                </div>
                <div className="contact-page-line">
                  <span className="contact-icon"><MessageCircle size={18} /></span>
                  <div><small>WhatsApp</small><a href={whatsappBase} target="_blank" rel="noreferrer">{displayPhone}</a></div>
                </div>
                <div className="contact-page-line">
                  <span className="contact-icon"><Mail size={18} /></span>
                  <div><small>Email</small><span>À renseigner</span></div>
                </div>
              </div>

              <div className="contact-page-actions">
                <a className="button button-dark" href={`tel:${phone}`}><Phone size={16} /> Appeler</a>
                <a className="button button-green" href={whatsappBase} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
                <a className="button button-primary" href="#devis">Demander un devis <ArrowUpRight size={15} /></a>
              </div>
            </div>

            <div className="contact-page-hours">
              <h3>Disponibilité</h3>
              <p>Nous sommes joignables aux horaires suivants. En dehors de ces plages, laissez un message sur WhatsApp et nous vous répondrons dès que possible.</p>
              <div className="hours-list">
                <div className="hours-row"><span>Lundi – Vendredi</span><strong>08h – 18h</strong></div>
                <div className="hours-row"><span>Samedi</span><strong>09h – 13h</strong></div>
                <div className="hours-row"><span>Dimanche</span><strong>Sur rendez-vous</strong></div>
              </div>
              <div className="hours-note">
                <MessageCircle size={16} />
                <p>Pour une réponse rapide, WhatsApp est le canal le plus efficace.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
