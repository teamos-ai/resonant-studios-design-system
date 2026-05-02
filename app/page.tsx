import Nav from "./components/Nav";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Journey from "./components/Journey";
import NdisBlock from "./components/NdisBlock";
import Story from "./components/Story";
import CtaBand from "./components/CtaBand";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Journey />
        <NdisBlock />
        <Story />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
