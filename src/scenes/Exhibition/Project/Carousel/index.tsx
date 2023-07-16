import { useState } from "react";
import { useAppDispatch } from "@toolkit/hook";
import { photoActions } from "@features/photo/photoSlice";

export default function Carousel(props: { data: string[] }) {
  const data = props.data;
  const dataLen = data.length;

  const dispatch = useAppDispatch();
  const [count, setCount] = useState(0);

  function goToSlide(slideIndex: number) {
    setCount(slideIndex);
  }

  return (
    <div className="group relative m-auto h-[580px] w-full max-w-[1400px] pb-10">
      <div
        style={{ backgroundImage: `url(${data[Math.abs(count) % dataLen]})` }}
        className="h-full w-full rounded-md border bg-cover bg-center duration-500"
        onClick={() =>
          dispatch(
            photoActions.openPhoto({
              selectedId: data[Math.abs(count) % dataLen],
            })
          )
        }
      ></div>

      {/* Left Arrow */}
      <button
        className="col-center absolute left-5 top-[50%] h-10 w-10 -translate-x-0 translate-y-[-50%] rounded-full bg-black/70 pr-[2px] text-2xl opacity-0 transition-all group-hover:opacity-100"
        onClick={() => setCount(count - 1)}
      >
        <i className="ri-arrow-left-s-line text-3xl text-white"></i>
      </button>

      {/* Right Arrow */}
      <button
        className="col-center absolute right-5 top-[50%] h-10 w-10 -translate-x-0 translate-y-[-50%] rounded-full bg-black/70 pl-[2px] text-2xl opacity-0 transition-all group-hover:opacity-100"
        onClick={() => setCount(count + 1)}
      >
        <i className="ri-arrow-right-s-line text-3xl text-white"></i>
      </button>

      {/* Dots */}
      <div className="row-center gap-2 p-4">
        {data.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="cursor-pointer text-2xl"
          >
            <div key={slideIndex}>
              <div
                className={`h-2 w-2 ${
                  Math.abs(count) % dataLen === slideIndex
                    ? "bg-black dark:bg-white"
                    : "bg-gray-300 dark:bg-gray-600"
                } rounded-full`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
