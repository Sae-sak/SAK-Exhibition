import GoToAb from "./GoToAb";
import GoToEx from "./GoToEx";

export default function CTA() {
  return (
    <div className="p-4 bg-red-300 col-center">
      <h1 className="text-5xl">CTA</h1>
      <div className="gap-4 row-center">
        <GoToEx />
        <GoToAb />
      </div>
    </div>
  );
}