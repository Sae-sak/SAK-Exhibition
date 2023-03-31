import HBorder from "@components/HBorder";
import Banner from "./Banner";
import FilterButton from "./FilterButton";

export default function Filter() {
  return (
    <div className="container w-screen gap-[18px] px-5 col-center">
      <FilterButton />

      {/* filter selection results */}
      <Banner />
    </div>
  );
}
