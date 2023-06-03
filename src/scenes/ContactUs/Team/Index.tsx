import Profile from "./Profile";

export default function Team() {
  return (
    <section className="text-gray-600 body-font">
      <div className="w-full gap-4 mb-20 text-center col-center">
        <h1 className="text-2xl font-bold font-title">OUR TEAM</h1>
        <p className="mx-auto text-base leading-relaxed  lg:w-2/3">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven`t
          heard of them.
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
      </div>
    </section>
  );
}
