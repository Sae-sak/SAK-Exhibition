import Image from "next/image";
import Profile from "./Profile";

export default function Team() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-20 text-center">
          <h1 className="mb-4 text-2xl font-medium tracking-widest text-gray-900 title-font">
            OUR TEAM
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven`t heard of them.
          </p>
        </div>
        <div className="flex-wrap -m-4 col-center">
          <Profile
            name={"정채영"}
            job={"Project Manager"}
            description={
              "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
            }
            email={"essentials106@ewhain.net"}
            kakao={""}
          />
          <Profile
            name={"김 유"}
            job={"Developer"}
            description={
              "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
            }
            email={"kimyoo@kakao.com"}
            kakao={""}
          />
          <Profile
            name={"김민선"}
            job={"Designer"}
            description={
              "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
            }
            email={"pom990524@gmail.com"}
            kakao={""}
          />
        </div>
      </div>
    </section>
  );
}
