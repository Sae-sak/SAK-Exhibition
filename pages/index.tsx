import Cover from "@components/Layouts/Cover/Cover";
import HomeLayout from "@components/Layouts/HomeLayout";
import HomePage from "@components/Pages/HomePage";
import Image from "next/image";

export default function Home() {
  return (
    <HomeLayout>
      <HomePage />
    </HomeLayout>
  );
}
