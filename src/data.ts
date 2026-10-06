import {
  Code2,
  Database,
  Globe2,
  Layers3,
  MessageCircle,
  Monitor,
  Palette,
  Search,
  Settings2,
  Share2,
  ShieldCheck,
  Sparkles,
  Wifi,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react';

export const phone = '0101583058';
export const displayPhone = '01 01 58 30 58';
export const whatsappBase = `https://wa.me/225${phone}`;
export const whatsappInfo = `${whatsappBase}?text=Bonjour%20Sado%20Digital%2C%20je%20souhaite%20obtenir%20des%20informations%20concernant%20vos%20services.`;
export const whatsappDevis = `${whatsappBase}?text=Bonjour%20Sado%20Digital%2C%20je%20souhaite%20demander%20un%20devis%20pour%20un%20projet.`;

export type ServiceColor = 'cyan' | 'blue' | 'green' | 'slate';

export interface Service {
  number: string;
  category: string;
  title: string;
  price: string;
  icon: LucideIcon;
  color: ServiceColor;
  description: string;
}

export const serviceCategories = [
  'Tous',
  'Web & digital',
  'Design & communication',
  'Réseaux sociaux',
  'Informatique',
  'Réseaux & connectivité',
  'Développement',
  'SEO & visibilité',
];

export const services: Service[] = [
  { number: '01', category: 'Design & communication', title: 'Logo professionnel', price: '50 000 – 150 000 FCFA', icon: Palette, color: 'cyan', description: 'Création d\'une identité visuelle unique, déclinable sur tous vos supports de communication.' },
  { number: '02', category: 'Design & communication', title: 'Carte de visite numérique', price: '15 000 – 30 000 FCFA', icon: Layers3, color: 'cyan', description: 'Une carte interactive à partager par QR code, avec vos coordonnées et liens.' },
  { number: '03', category: 'Design & communication', title: 'Affiche / Flyer publicitaire', price: '10 000 – 25 000 FCFA', icon: Sparkles, color: 'cyan', description: 'Supports visuels pour vos campagnes promotionnelles et événements.' },
  { number: '04', category: 'Réseaux sociaux', title: 'Page Facebook professionnelle', price: '25 000 – 50 000 FCFA', icon: Share2, color: 'green', description: 'Création et optimisation d\'une page Facebook alignée à votre image de marque.' },
  { number: '05', category: 'Réseaux sociaux', title: 'Gestion de page Facebook', price: '50 000 – 150 000 FCFA / mois', icon: MessageCircle, color: 'green', description: 'Animation régulière, publications et interactions avec votre audience.' },
  { number: '06', category: 'Web & digital', title: 'Site web vitrine', price: '200 000 – 500 000 FCFA', icon: Globe2, color: 'blue', description: 'Site professionnel présentant votre activité, vos services et vos coordonnées.' },
  { number: '07', category: 'Web & digital', title: 'Site web vitrine premium', price: '500 000 – 900 000 FCFA', icon: Monitor, color: 'blue', description: 'Site sur-mesure avec design avancé, animations et fonctionnalités étendues.' },
  { number: '08', category: 'Web & digital', title: 'Boutique en ligne / E-commerce', price: '600 000 – 1 500 000 FCFA', icon: Database, color: 'blue', description: 'Plateforme de vente avec gestion des produits, commandes et paiements.' },
  { number: '09', category: 'Web & digital', title: 'Landing page', price: '100 000 – 200 000 FCFA', icon: Zap, color: 'blue', description: 'Page d\'atterrissage ciblée pour convertir vos visiteurs en contacts.' },
  { number: '10', category: 'Web & digital', title: 'Maintenance de site web', price: '30 000 – 100 000 FCFA / mois', icon: Wrench, color: 'blue', description: 'Mises à jour, sauvegardes et corrections pour garder votre site fiable.' },
  { number: '11', category: 'Informatique', title: 'Installation Windows + logiciels', price: '15 000 – 30 000 FCFA', icon: Settings2, color: 'slate', description: 'Installation complète du système et des logiciels essentiels.' },
  { number: '12', category: 'Informatique', title: 'Nettoyage / optimisation PC', price: '10 000 – 25 000 FCFA', icon: Wrench, color: 'slate', description: 'Suppression des éléments inutiles et optimisation des performances.' },
  { number: '13', category: 'Informatique', title: 'Diagnostic informatique', price: '5 000 – 15 000 FCFA', icon: Search, color: 'slate', description: 'Analyse complète de votre matériel et logiciel pour identifier les problèmes.' },
  { number: '14', category: 'Informatique', title: 'Maintenance informatique entreprise', price: '50 000 – 150 000 FCFA / mois', icon: ShieldCheck, color: 'slate', description: 'Contrat de maintenance régulière pour votre parc informatique.' },
  { number: '15', category: 'Réseaux & connectivité', title: 'Installation Wi-Fi', price: '30 000 – 100 000 FCFA', icon: Wifi, color: 'green', description: 'Configuration d\'un réseau Wi-Fi performant pour votre domicile ou bureau.' },
  { number: '16', category: 'Réseaux & connectivité', title: 'Installation réseau PME', price: '100 000 – 400 000 FCFA', icon: Share2, color: 'green', description: 'Mise en place d\'un réseau d\'entreprise sécurisé et structuré.' },
  { number: '17', category: 'Réseaux & connectivité', title: 'Installation / configuration imprimante', price: '10 000 – 25 000 FCFA', icon: Monitor, color: 'green', description: 'Installation et partage d\'imprimante sur votre réseau local.' },
  { number: '18', category: 'Informatique', title: 'Sauvegarde / transfert de données', price: '10 000 – 30 000 FCFA', icon: Database, color: 'slate', description: 'Sécurisation et transfert de vos données importantes.' },
  { number: '19', category: 'Développement', title: 'Application web', price: 'À partir de 500 000 FCFA', icon: Code2, color: 'blue', description: 'Développement d\'applications métier sur-mesure accessibles via navigateur.' },
  { number: '20', category: 'SEO & visibilité', title: 'SEO local / référencement', price: '50 000 – 200 000 FCFA', icon: Search, color: 'green', description: 'Optimisation pour améliorer votre visibilité dans les recherches locales.' },
];

export interface Pack {
  name: string;
  price: string;
  suffix?: string;
  description: string;
  items: string[];
  featured?: boolean;
}

export const packs: Pack[] = [
  { name: 'Starter', price: '100 000', description: 'Pour poser des bases solides et professionnelles.', items: ['Logo', 'Page Facebook', 'Photo de couverture', '3 visuels publicitaires'] },
  { name: 'Business', price: '350 000', description: 'Une présence digitale cohérente pour développer votre activité.', items: ['Logo', 'Site vitrine', 'Page Facebook', 'Bouton WhatsApp', 'Google Maps', 'Formation'], featured: true },
  { name: 'Pro', price: '750 000', description: 'Un écosystème digital complet pour passer à l\'étape supérieure.', items: ['Identité visuelle', 'Site professionnel', 'SEO de base', 'Réseaux sociaux', 'WhatsApp Business', '3 mois de support'] },
  { name: 'Maintenance', price: '75 000', suffix: '/ mois', description: 'La tranquillité au quotidien pour vos outils.', items: ['Maintenance informatique', 'Assistance', 'Sauvegardes', 'Mises à jour', 'Support'] },
];

export const steps: [string, string, string][] = [
  ['01', 'Analyse du besoin', 'Comprendre le projet, les objectifs et les besoins réels.'],
  ['02', 'Proposition', 'Choisir la solution adaptée et établir le devis.'],
  ['03', 'Validation', 'Valider le devis et les éléments nécessaires au démarrage.'],
  ['04', 'Réalisation', 'Concevoir, développer, installer ou configurer la solution.'],
  ['05', 'Vérification', 'Tester, corriger et ajuster selon le périmètre convenu.'],
  ['06', 'Livraison', 'Remettre la solution et les explications nécessaires.'],
  ['07', 'Support', 'Assurer la maintenance, l\'assistance et les évolutions.'],
];

export const methodSteps = ['Écouter', 'Analyser', 'Proposer', 'Réaliser', 'Tester', 'Livrer', 'Accompagner'];

export interface Project {
  id: string;
  type: 'Projet démonstration' | 'Concept' | 'Maquette';
  title: string;
  category: string;
  description: string;
  visualClass: string;
}

export const projects: Project[] = [
  { id: 'demo-01', type: 'Projet démonstration', title: 'Site vitrine professionnel', category: 'Web & digital', description: 'Un site vitrine moderne avec navigation fluide, présentation des services et formulaire de contact intégré.', visualClass: 'visual-web' },
  { id: 'demo-02', type: 'Projet démonstration', title: 'Identité & présence digitale', category: 'Design & communication', description: 'Création d\'une identité visuelle complète : logo, palette, typographie et déclinaisons pour le web et le print.', visualClass: 'visual-brand' },
  { id: 'demo-03', type: 'Projet démonstration', title: 'Application web métier', category: 'Développement', description: 'Une application web pour gérer des opérations métier : tableau de bord, formulaires et exports de données.', visualClass: 'visual-app' },
  { id: 'demo-04', type: 'Concept', title: 'Boutique en ligne', category: 'E-commerce', description: 'Maquette d\'une boutique en ligne avec catalogue produits, panier et tunnel de commande.', visualClass: 'visual-ecommerce' },
  { id: 'demo-05', type: 'Maquette', title: 'Landing page SaaS', category: 'Web & digital', description: 'Une landing page conçue pour convertir : sections claires, appels à l\'action et preuves de concept.', visualClass: 'visual-landing' },
  { id: 'demo-06', type: 'Projet démonstration', title: 'Réseau PME sécurisé', category: 'Réseaux & connectivité', description: 'Schéma d\'un réseau d\'entreprise avec segmentation, Wi-Fi invité et sauvegarde automatique.', visualClass: 'visual-network' },
];
