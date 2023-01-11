import {IFilter} from "@constants/types/Filter";

export default function StudioFilter({setIsFilter}: IFilter) {
  return (
    <div
      onClick={() => setIsFilter(0)}
      className="fixed top-0 w-screen h-screen bg-slate-900/50 col-center"
    >
      <div>studio filter</div>
    </div>
  );
}
