// pages/house-cleaning.js
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "@/components/heder/Header";
import Footer from "@/components/footer/Footer";
import { ItemHeader } from "@/components/itemcomponent/ItemHeader";
import { ItemSidebar } from "@/components/itemcomponent/ItemSidebar";
import { ItemDetails } from "@/components/itemcomponent/ItemDetails";
import { ItemTypeSelector } from "@/components/itemcomponent/ItemTypeSelector";

const DetailsPage = () => {
  return (
    <>
      <Header />

      <div className="container py-4">
        <div className="row g-4">
          <div className="col-lg-8">
            <ItemHeader
              city="Chennai"
              address="700075, Kolkata, West Bengal, India"
              title="House Cleaning in Chennai"
              rating={5}
              reviews={6177}
            />

            <div className="card mb-4">
              <div className="card-body">
                <h6 className="mb-3">What service do you need?</h6>
                <ItemTypeSelector />
              </div>
            </div>

            <ItemDetails />
          </div>

          <div className="col-lg-4">
            <ItemSidebar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetailsPage;
