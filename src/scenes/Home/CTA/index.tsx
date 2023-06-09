import GoToAb from "./GoToAb";
import GoToEx from "./GoToEx";

export default function CTA() {
  return (
    <div className="h-screen py-8 border-b row-center">
      <h1 className="text-5xl">CTA</h1>
      <div className="gap-4 row-center">
        <GoToAb />
        <GoToEx />
      </div>
    </div>
  );
}
