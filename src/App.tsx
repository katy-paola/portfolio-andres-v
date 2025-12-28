import Contact from "./components/ui/Contact";
import Experience from "./components/ui/Experience";
import FeaturedProjects from "./components/ui/FeaturedProjects";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import Hero from "./components/ui/Hero";
import OtherProjects from "./components/ui/OtherProjects";
import Stack from "./components/ui/Stack";

export default function App() {
  return (
    <section className="w-full">
      <Header />
      <main
        id="main"
        className="grid xl:grid-cols-4 gap-4 p-4 w-full mt-[68px] scroll-mt-[68px]"
      >
        <Hero className="xl:col-span-3 bg-accent/30" />
        <Stack className="bg-accent/30" />
        <Experience className="xl:col-span-4 bg-accent/30" />
        <section
          id="proyectos"
          className="xl:col-span-4 grid grid-cols-subgrid gap-4 scroll-mt-[84px]"
        >
          <FeaturedProjects className="xl:col-span-2 row-span-3 flex flex-col gap-4 p-4 md:p-8 bg-accent/30" />
          <OtherProjects className="xl:col-span-2 row-span-3 grid gap-4 p-4 md:p-8 bg-accent/30" />
        </section>
        <Contact className="xl:col-span-4 grid md:justify-items-center gap-4 p-4 md:p-8 bg-accent/30" />
      </main>
      <Footer />
    </section>
  );
}
