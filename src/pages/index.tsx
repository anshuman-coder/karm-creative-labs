import Header from "~/components/global/Header";
import MaxHeightWrapper from "~/components/global/MaxHeightWrapper";
import PageHelmet from "~/components/global/PageHelmet";
import Clients from "~/components/home/Clients";
import Description from "~/components/home/Description";
import Hero from "~/components/home/Hero";
import Services from "~/components/home/services/Services";
import Standout from "~/components/home/Standout";

export default function Home() {
  return (
    <>
      <PageHelmet title="Home" />
      <Header />
      <MaxHeightWrapper>
        <Hero />
      </MaxHeightWrapper>
      <MaxHeightWrapper className="px-3 md:px-0">
        <Description />
      </MaxHeightWrapper>
      <MaxHeightWrapper>
        <Standout />
      </MaxHeightWrapper>
      <MaxHeightWrapper>
        <Services />
      </MaxHeightWrapper>
      <MaxHeightWrapper>
        <Clients />
      </MaxHeightWrapper>
    </>
  );
}
