import Cover from "@scenes/Cover";
import { motion } from "framer-motion";
import Head from "next/head";

export default function CoverPage() {
  return (
    <>
      <Head>
        <title>SAK-Exhibition</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SAK-Exhibition" />
        <meta
          property="og:description"
          content="2023 경기대학교 건축학과 온라인 졸업 전시 웹사이트"
        />
        <meta
          property="og:image"
          content={`https://sak-exhibition.vercel.app/images/door.png`}
        />
        <meta property="og:url" content="https://sak-exhibition.vercel.app" />
      </Head>
      <motion.div exit={{ opacity: 0, transition: { delay: 1.4 } }}>
        <Cover />
      </motion.div>
    </>
  );
}
