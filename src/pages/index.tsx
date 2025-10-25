import Header from "~/components/global/Header";
import MaxHeightWrapper from "~/components/global/MaxHeightWrapper";
import PageHelmet from "~/components/global/PageHelmet";
import Clients from "~/components/home/testimonials/Clients";
import Description from "~/components/home/Description";
import Hero from "~/components/home/Hero";
import Services from "~/components/home/services/Services";
import Standout from "~/components/home/Standout";
import Footer from "~/components/global/Footer";

export default function Home() {
  return (
    <>
      <PageHelmet title="Home" />
      <Header />
      <MaxHeightWrapper id="hero">
        <Hero />
      </MaxHeightWrapper>
      <MaxHeightWrapper id="about" className="!mt-4 sm:!mt-10 md:!mt-0 px-3 md:px-0 justify-center md:justify-start items-center min-h-auto">
        <Description className="flex-1" />
      </MaxHeightWrapper>
      <MaxHeightWrapper id="services" className="mt-16 sm:!mt-10 md:!mt-16 justify-center items-start !min-h-auto">
        <Standout />
      </MaxHeightWrapper>
      <MaxHeightWrapper>
        <Services />
      </MaxHeightWrapper>
      <MaxHeightWrapper id="testimonials" className="min-h-auto justify-center items-center bg-black !m-0">
        <Clients />
      </MaxHeightWrapper>
      <Footer forPage="home" />
    </>
  );
}
