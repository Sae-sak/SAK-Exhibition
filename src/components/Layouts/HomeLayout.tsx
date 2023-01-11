import Header from "@components/Layouts/Header/Header";
import Footer from "@components/Layouts/Footer/Footer";
import Cover from "./Cover/Cover";

export default function HomeLayout({children}) {
  return (
    <>
      <Cover />
      <Header />
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
      <Footer />
    </>
  );
}
