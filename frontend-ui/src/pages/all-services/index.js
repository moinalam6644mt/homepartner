"use client"
import '../../app/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import ServiceHeader from "@/components/service/ServiceHeader"
import ServiceSidebar from "@/components/service/ServiceSidebar"
import ServiceCategory from "@/components/service/ServiceCategory"
import Footer from '@/components/footer/Footer';
import { Header } from '@/components/heder/Header';


export default function index() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <main className="container px-4 py-8 mx-auto md:px-6">
          <ServiceHeader />
          <div className="grid gap-8 mt-8 lg:grid-cols-[300px,1fr]">
            <ServiceSidebar />
            <ServiceCategory />
          </div>
        </main>
      </div>
      <Footer />
    </>

  )
}

