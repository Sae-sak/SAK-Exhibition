import Header from "@components/Layouts/Header/Header";
import Footer from "@components/Layouts/Footer/Footer";

export default function MainLayout({children}) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
