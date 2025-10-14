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
      <MaxHeightWrapper className="!mt-4 sm:!mt-10 md:!mt-0 px-3 md:px-0 justify-center md:justify-start items-center min-h-auto">
        <Description className="flex-1" />
      </MaxHeightWrapper>
      <MaxHeightWrapper className="mt-16 sm:!mt-10 md:!mt-16 justify-center items-center !min-h-auto">
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
