import Banner from "./Banner";
import FilterButton from "./FilterButton";

export default function Filter() {
  return (
    <div className="container flex items-center justify-start w-screen gap-8 px-5">
      <FilterButton />

      {/* filter selection results */}
      <Banner />
    </div>
  );
}
