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
    <section id='home'className="pt-[80px] sm:pt-[90px] lg:pt-[106px]" >
   <Hero />
    </section>
      <section id="about"><About /></section>
      <Vision />
      <Counter />
      <section id="how-it-works"><Work /></section>
      <Mind />
      <section id="features"><Features /></section>
      <Mind2 />
      <section id="our-app"><OurApp /></section>
      <section id="blog"><Blog /></section>
      <section id="testimonials"><Testimonial /></section>
      <section id="faqs"><FAQs /></section>
      <OurApp2 />
      <Footer />
    </>
  );
}
