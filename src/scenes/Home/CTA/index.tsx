import GoToAb from "./GoToAb";
import GoToEx from "./GoToEx";

export default function CTA() {
  return (
    <div className="h-screen p-4 border row-center">
      <h1 className="text-5xl">CTA</h1>
      <div className="gap-4 row-center">
        <GoToEx />
        <GoToAb />
      </div>
    </div>
  );
}
