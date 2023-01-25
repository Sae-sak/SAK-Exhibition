import SimpleFooter from "./Footer/SimpleFooter";
import Header from "./Header";

export default function AuthLayout({children}) {
  return (
    <>
      <div className="fixed top-0 w-full">
        <Header />
      </div>
      <div className="w-screen h-screen col-center">{children}</div>
      <div className="fixed bottom-0 w-full">
        <SimpleFooter />
      </div>
    </>
  );
}
