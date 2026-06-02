import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#FFF7F2] text-[#2B1B20]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}