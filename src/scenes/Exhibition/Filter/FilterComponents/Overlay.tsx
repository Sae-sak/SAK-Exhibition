import { closeFilter } from "@features/filter/filterSlice";
import { useAppDispatch } from "@toolkit/hook";

export default function Overlay() {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="fixed top-0 w-screen h-screen bg-light_bg_1 dark:bg-night_bg_1 col-center"></div>
      <i
        onClick={() => dispatch(closeFilter())}
        className="fixed text-4xl cursor-pointer top-10 right-10 ri-close-line"
      ></i>
    </>
  );
}
