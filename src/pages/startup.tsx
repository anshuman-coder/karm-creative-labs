import Header from "~/components/global/Header";
import PageHelmet from "~/components/global/PageHelmet";
import Footer from "~/components/global/Footer";
import Hero from "~/components/startup/Hero";
import WhoWeAre from "~/components/startup/WhoAreWe";
import Clients from "~/components/startup/Clients";
import Pricing from "~/components/startup/Pricing";
import WhyKarm from "~/components/startup/WhyKarm";
import Faq from "~/components/startup/Faq";

export default function Startup() {
  return (
    <>
      <PageHelmet
        title="For Startups - Karm Labs"
        description="We help startups tell powerful stories and build smart, scalable products through closely collaborated workshop series."
      />
      <Header className="bg-transparent!" />
      <Hero />
      <WhoWeAre />
      <Clients />
      <Pricing />
      <WhyKarm />
      <Faq />
      <Footer forPage="home" />
    </>
  );
}
