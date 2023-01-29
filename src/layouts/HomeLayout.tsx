import Header from "@layouts/Header";
import Footer from "@layouts/Footer";
import ScrollButton from "@components/ScrollButton";

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
