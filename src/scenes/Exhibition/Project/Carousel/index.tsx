import {useState} from "react";
import {useAppDispatch} from "@toolkit/hook";
import {photoActions} from "@features/photo/photoSlice";

export default function Carousel(props: {data: string[]}) {
  const data = props.data;
  const dataLen = data.length;

  const dispatch = useAppDispatch();
  let [count, setCount] = useState(1);

  function goToSlide(slideIndex: number) {
    setCount(slideIndex);
  }

  return (
    <div className="max-w-[1400px] h-[580px] w-full m-auto py-16 relative group">
      <div
        style={{backgroundImage: `url(${data[Math.abs(count) % dataLen]})`}}
        className="w-full h-full duration-500 bg-center bg-cover rounded-2xl"
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
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-2xl p-1 bg-black/70 text-white cursor-pointer"
        onClick={() => setCount(count - 1)}
      >
        <i className="text-3xl ri-arrow-left-s-line"></i>
      </button>

      {/* Right Arrow */}
      <button
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-2xl p-1 bg-black/70 text-white cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        <i className="text-3xl ri-arrow-right-s-line"></i>
      </button>

      {/* Dots */}
      <div className="gap-2 p-4 row-center">
        {data.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <div key={slideIndex} onClick={() => goToSlide(slideIndex)}>
              <div
                className={`w-2 h-2 ${
                  Math.abs(count) % dataLen === slideIndex
                    ? "bg-black"
                    : "bg-gray-300"
                } rounded-full`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
