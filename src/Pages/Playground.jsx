import SeasonPass from "../Parts/SeasonPass";
import Items from "../Parts/Items";
import { Footer } from "../Component/Footer";

export default function Playground() {
  return (
    <main className="h-lvh">
      <div className="fixed bg-gradient-to-bl from-[#050505] to-[#1a1818] h-lvh w-full object-cover -z-20" />
      <div
        className="fixed h-full w-full bg-cover -z-10 bg-center"
        style={{ backgroundImage: "url('/mainBG.png')" }}
      />
      {/*  */}
      <Items />
      {/*  */}
      <Footer />
    </main>
  );
}
