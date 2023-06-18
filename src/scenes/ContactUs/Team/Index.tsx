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
      <div className="col-center">
        <Profile
          name={"정채영"}
          job={"Project Manager"}
          description={"사람 재미를 아는 길잡이가 되자"}
          email={"chaezero1997@gmail.com"}
          github={"https://github.com/chae-zero"}
        />
        <Profile
          name={"김 유"}
          job={"Frontend Developer"}
          description={"굳건하게 코딩하는 개발자"}
          email={"kimyoo04eco@naver.com"}
          github={"https://github.com/kimyoo04"}
        />
      </div>
    </section>
  );
}
