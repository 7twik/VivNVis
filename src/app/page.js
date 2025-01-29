
import { Footer } from "./Footer";
import Hero from "./Hero";
import { Services } from "./Services";
import { Testimonial } from "./Testimonial";
import { VideoShowcase } from "./VideoShowcase";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <VideoShowcase />
      <Testimonial />
      <Footer />
    </div>
  );
}
