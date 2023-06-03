import bg from "../../../../public/images/grid-pattern-gray.png";

export default function Overlay({ setIsClicked }) {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "repeat",
      }}
      onClick={() => setIsClicked(false)}
      className="fixed top-0 z-20 w-screen h-screen bg-light_bg_1 col-center dark:bg-night_bg_1"
    ></div>
  );
}
