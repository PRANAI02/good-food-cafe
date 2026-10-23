import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SignatureDishes from "@/components/SignatureDishes";
import FoodShowcase from "@/components/FoodShowcase";
import Reviews from "@/components/Reviews";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reservation from "@/components/Reservation";
import OrderOnline from "@/components/OrderOnline";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import MobileFAB from "@/components/MobileFAB";

export default function Home() {
  return (
    <SmoothScroll>
      <main style={{ background: "var(--cream-light)" }}>
        <Navigation />
        <Hero />
        <About />
        <SignatureDishes />
        <FoodShowcase />
        <Reviews />
        <WhyChooseUs />
        <Reservation />
        <OrderOnline />
        <Location />
        <Footer />
        <MobileFAB />
      </main>
    </SmoothScroll>
  );
}
