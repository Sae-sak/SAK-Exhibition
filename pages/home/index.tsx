import MainLayout from "@layouts/MainLayout";
import Home from "@scenes/Home";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>SAK-Exhibition | Home</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SAK-Exhibition | Home" />
        <meta
          property="og:description"
          content="2023 경기대학교 건축학과 온라인 졸업 전시 웹사이트"
        />
        <meta
          property="og:image"
          content={`https://sak-exhibition.vercel.app/images/poster.jpg`}
        />
        <meta
          property="og:url"
          content="https://sak-exhibition.vercel.app/home"
        />
      </Head>
      <MainLayout>
        <Home />
      </MainLayout>
    </>
  );
}
