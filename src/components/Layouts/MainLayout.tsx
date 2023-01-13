import Header from "@components/Layouts/Header";
import Footer from "@components/Layouts/Footer";
import Quote from "@components/Layouts/Quote";

export default function MainLayout({children}) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
      <Quote />
      <Footer />
    </>
  );
}
