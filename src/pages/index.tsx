import { PageHelmet } from "~/components/global";
import Hero from "~/components/home/Hero";
import Banner from "./components/home/Banner";
import Services from "~/components/home/Services";

export default function Home() {
  return (
    <>
      <PageHelmet title="Home" />
      <div className="mx-auto w-full max-w-[1560px] min-h-screen flex flex-col justify-center items-center">
        <Hero />
        <Banner />
        <Services />
      </div>
    </>
  );
}
