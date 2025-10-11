import Header from "~/components/global/Header";
import MaxHeightWrapper from "~/components/global/MaxHeightWrapper";
import PageHelmet from "~/components/global/PageHelmet";
import Hero from "~/components/home/Hero";

export default function Home() {

  return (
    <>
      <PageHelmet title="Home" />
      <Header />
      <MaxHeightWrapper>
        <Hero />
      </MaxHeightWrapper>
    </>
  );
}