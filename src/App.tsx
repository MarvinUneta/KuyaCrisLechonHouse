import { Hero } from './components/Hero';
import { BenefitsSection } from './components/BenefitsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { NavigationBar } from './components/NavigationBar';
import { SiteFooter } from './components/SiteFooter';
import { useSiteContent } from './hooks/useSiteContent';
import './index.css';

function App() {
  const { content } = useSiteContent();

  return (
    <>
      <NavigationBar />
      <main>
        <Hero hero={content.hero} />
        <BenefitsSection services={content.services} menu={content.menu} />
        <TestimonialsSection testimonials={content.testimonials} />
      </main>
      <SiteFooter contact={content.contact} />
    </>
  );
}

export default App;
