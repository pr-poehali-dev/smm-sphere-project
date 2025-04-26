import Header from '../components/Header';
import MainBanner from '../components/MainBanner';
import QuickOrderForm from '../components/QuickOrderForm';
import BenefitsSection from '../components/BenefitsSection';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <MainBanner />
        <QuickOrderForm />
        <BenefitsSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
