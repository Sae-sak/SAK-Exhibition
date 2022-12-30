import MainLayout from "@components/Layouts/MainLayout";
import Head from "next/head";

export default function Home() {
  return (
    <MainLayout>
      <div>
        <h1 className="text-3xl font-bold underline">main</h1>
      </div>
    </MainLayout>
  );
}
