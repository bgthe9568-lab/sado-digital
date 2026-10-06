import { FormEvent, useState } from 'react';
import { ArrowUpRight, Check, MessageCircle, Phone, Send } from 'lucide-react';
import { displayPhone, phone, whatsappBase, whatsappDevis, services } from '@/data';
import { PageHero } from '@/components/SharedSections';

export function DevisPage() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        kicker="Demande de devis"
        title="Décrivez votre projet,"
        accent="on s'occupe du reste."
        lead="Quelques informations suffisent pour commencer. Nous vous recontacterons pour comprendre votre besoin en détail et vous proposer un devis clair et adapté."
        current="devis"
      />

      <section className="section devis-section">
        <div className="container devis-grid">
          <div className="devis-intro">
            <div className="section-kicker">Votre projet</div>
            <h2>Comment ça marche ?</h2>
            <div className="devis-steps">
              <div className="devis-step"><span>01</span><div><strong>Vous remplissez le formulaire</strong><p>Décrivez votre besoin en quelques lignes.</p></div></div>
              <div className="devis-step"><span>02</span><div><strong>Nous analysons</strong><p>Nous étudions votre projet et vous recontactons.</p></div></div>
              <div className="devis-step"><span>03</span><div><strong>Vous recevez un devis</strong><p>Une proposition claire, adaptée à votre budget.</p></div></div>
              <div className="devis-step"><span>04</span><div><strong>On démarre</strong><p>Validation, puis réalisation de votre projet.</p></div></div>
            </div>
            <div className="devis-contact-direct">
              <p>Préférez un contact direct ?</p>
              <a href={whatsappDevis} target="_blank" rel="noreferrer"><MessageCircle size={18} /><span><small>WhatsApp</small><strong>{displayPhone}</strong></span><ArrowUpRight size={16} /></a>
              <a href={`tel:${phone}`}><Phone size={18} /><span><small>Appeler</small><strong>{displayPhone}</strong></span><ArrowUpRight size={16} /></a>
            </div>
          </div>

          <div className="devis-form-wrap">
            {submitted ? (
              <div className="success-state">
                <div><Check size={24} /></div>
                <h3>Demande bien enregistrée.</h3>
                <p>Merci pour votre intérêt. Nous vous recontacterons rapidement. Pour un échange immédiat, vous pouvez nous écrire sur WhatsApp.</p>
                <a className="button button-primary" href={whatsappBase} target="_blank" rel="noreferrer">Ouvrir WhatsApp <ArrowUpRight size={16} /></a>
                <button className="text-link" onClick={() => setSubmitted(false)}>Envoyer une autre demande</button>
              </div>
            ) : (
              <form className="quote-form" onSubmit={onSubmit}>
                <div className="form-row">
                  <label>Nom / entreprise<input required name="name" placeholder="Votre nom ou entreprise" /></label>
                  <label>Email<input required type="email" name="email" placeholder="vous@exemple.com" /></label>
                </div>
                <div className="form-row">
                  <label>Téléphone / WhatsApp<input required name="phone" placeholder="01 01 58 30 58" /></label>
                  <label>Type de projet
                    <select name="project" defaultValue="">
                      <option value="" disabled>Choisir un service</option>
                      {services.map((service) => <option key={service.number}>{service.title}</option>)}
                      <option>Autre besoin</option>
                    </select>
                  </label>
                </div>
                <label>Budget indicatif
                  <select name="budget" defaultValue="">
                    <option value="" disabled>Choisir une fourchette</option>
                    <option>Moins de 100 000 FCFA</option>
                    <option>100 000 – 350 000 FCFA</option>
                    <option>350 000 – 750 000 FCFA</option>
                    <option>Plus de 750 000 FCFA</option>
                    <option>À définir ensemble</option>
                  </select>
                </label>
                <label>Description du besoin<textarea required name="description" rows={4} placeholder="Parlez-nous brièvement de votre projet..." /></label>
                <button className="button button-primary form-submit" type="submit">Envoyer ma demande <Send size={16} /></button>
                <small className="form-disclaimer">Vos informations servent uniquement à répondre à votre demande.</small>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
