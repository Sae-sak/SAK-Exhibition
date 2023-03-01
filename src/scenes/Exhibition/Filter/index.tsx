import Banner from "./Banner";
import FilterButton from "./FilterButton";

export default function Filter() {
  return (
    <div className="container flex items-center justify-between w-screen px-5">
      <FilterButton />

      {/* filter selection results */}
      <Banner />
    </div>
  );
}
