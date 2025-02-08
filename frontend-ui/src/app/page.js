"use client"
import { Header } from "@/components/heder/Header";
import Footer from "@/components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import './globals.css'
import { ServiceCategories } from "@/components/category/CardCategory";
import { AppPromotion } from "@/components/category/Promotion";
import Hero from "@/components/home/HeroSection";
import PromotionalBanners from "@/components/home/PromotionalBanners";
import { ServiceSection } from "@/components/home/ServiceSection";
import BlogSection from "@/components/home/BlogsTitle";
import FAQSection from "@/components/home/FAQ";
import { cleaningServices, salonServices, mostBookedServices } from "@/data/service"


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container py-5">
        <ServiceCategories />

        <PromotionalBanners />

        <ServiceSection title="Cleaning & Pest Services" services={cleaningServices} />

        <ServiceSection title="Most Booked Services" services={mostBookedServices} />

        <ServiceSection title="Salon Services" services={salonServices} />
        <AppPromotion />
        <BlogSection />
        <FAQSection />
      </div>
      <Footer />
    </>
  );
}
