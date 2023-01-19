import Header from "@components/Layouts/Header";
import Footer from "@components/Layouts/Footer";
import Quote from "@components/Layouts/Quote";
import ScrollButton from "@components/Base/ScrollButton";

export default function MainLayout({children}) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
      <ScrollButton />
      <Quote />
      <Footer />
    </>
  );
}
