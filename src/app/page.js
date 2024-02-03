import Hero from "./components/layouts/Hero";
import HomeMenu from "./components/layouts/HomeMenu";
import SectionHeader from "./components/layouts/SectionHeader";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeader subHeader={"Our story"} mainHeader={"About us"} />
        <div className="text-gray-500 text-sm max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p className="font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            doloremque ullam. Nisi laboriosam eos, quaerat quia nemo officiis
            ex. Modi quae tempora perspiciatis? Nulla temporibus, eum dolorum
            dolores a repellendus.
          </p>
          <p className="font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            doloremque ullam. Nisi laboriosam eos, quaerat quia nemo officiis
            ex. Modi quae tempora perspiciatis? Nulla temporibus, eum dolorum
            dolores a repellendus.
          </p>
          <p className="font-semibold">
            Nisi laboriosam eos, quaerat quia nemo officiis ex. Modi quae
            tempora perspiciatis? Nulla temporibus, eum dolorum dolores a
            repellendus.
          </p>
        </div>
      </section>
      <section className="text-center my-16">
        <SectionHeader
          subHeader={"Just give us a call"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a href="tel:4688899902" className="text-4xl underline text-gray-500">
            +46 888 999 02
          </a>
        </div>
      </section>
    </>
  );
}
