import Header from "@components/Layouts/Header";
import Footer from "@components/Layouts/Footer";

export default function MainLayout({children}) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
      <Footer />
    </>
  );
}
