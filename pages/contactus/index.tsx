import MainLayout from "@layouts/MainLayout";
import ContactUs from "@scenes/ContactUs";
import Head from "next/head";

export default function ContactUsPage() {
  return (
    <>
      <Head>
        <title>SAK-Exhibition | Contact Us</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SAK-Exhibition | Contact Us" />
        <meta
          property="og:description"
          content="2023 경기대학교 건축학과 온라인 졸업 전시 웹사이트"
        />
        <meta
          property="og:image"
          content={`https://sak-exhibition.vercel.app/images/door.png`}
        />
        <meta
          property="og:url"
          content="https://sak-exhibition.vercel.app/contactus"
        />
      </Head>
      <MainLayout>
        <ContactUs />
      </MainLayout>
    </>
  );
}
