import Sliders from "@/components/home/slider/Sliders";
import About from "@/components/home/about/About";
import Partners from "@/components/home/partners/Partners";
import Offers from "@/components/home/offers/Offers";

export default function Page() {
  return (
    <>
      <Sliders />
      <About />
      <Offers />
      <Partners />
    </>
  );
}
