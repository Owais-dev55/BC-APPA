import About from "@/app/About/About";
import Blog from "@/app/Blog/Blog";
import Counter from "@/components/Counter/Counter";
import FAQs from "@/app/FAQs/FAQs";
import Features from "@/app/Features/Features";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Mind from "@/components/Mind/Mind";
import Mind2 from "@/components/Mind/Mind2";
import OurApp from "@/app/OurApp/OurApp";
import OurApp2 from "@/components/OurApp/OurApp2";
import Testimonial from "@/app/Testimonial/Testimonial";
import Vision from "@/components/Vision/Vision";
import Work from "@/app/Work/Work";

export default function Home() {
  return (
    <>
   <Hero />
   <About />
   <Vision />
   <Counter />
   <Work />
   <Mind />
   <Features />
   <Mind2 />
   <OurApp />
   <Blog />
   <Testimonial />
   <FAQs />
   <OurApp2 />
   <Footer />
    </>
  );
}
