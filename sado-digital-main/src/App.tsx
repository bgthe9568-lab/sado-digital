import { Header, Footer, WhatsAppFloat, useHashRoute } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { ServicesPage } from '@/pages/ServicesPage';
import { RealisationsPage } from '@/pages/RealisationsPage';
import { PacksPage } from '@/pages/PacksPage';
import { AboutPage } from '@/pages/AboutPage';
import { DevisPage } from '@/pages/DevisPage';
import { ContactPage } from '@/pages/ContactPage';

function App() {
  const route = useHashRoute();

  const renderPage = () => {
    switch (route) {
      case 'services': return <ServicesPage />;
      case 'realisations': return <RealisationsPage />;
      case 'packs': return <PacksPage />;
      case 'a-propos': return <AboutPage />;
      case 'devis': return <DevisPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="site-shell">
      <Header current={route} />
      <main>{renderPage()}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
