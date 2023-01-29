import Header from "@components/Layouts/Header";
import Footer from "@components/Layouts/Footer";
import ScrollButton from "@components/Base/ScrollButton";

export default function HomeLayout({ children }) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
      <ScrollButton />
      <Footer />
    </>
  );
}
