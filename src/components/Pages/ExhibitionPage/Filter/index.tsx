import {useState} from "react";
import StudentFilter from "./StudentFilter";
import StudioFilter from "./StudioFilter";
import TagFilter from "./TagFilter";

export default function Filter() {
  const [isFilter, setIsFilter] = useState(0);

  return (
    <>
      <div className="gap-10 col-center">
        {isFilter === 1 ? <StudentFilter setIsFilter={setIsFilter} /> : null}
        {isFilter === 2 ? <StudioFilter setIsFilter={setIsFilter} /> : null}
        {isFilter === 3 ? <TagFilter setIsFilter={setIsFilter} /> : null}
        <div>
          <h1 className="text-3xl font-bold">Filter 기능</h1>
        </div>
        <div className="gap-10 row-center">
          <button onClick={() => setIsFilter(1)}>Student ?</button>
          <button onClick={() => setIsFilter(2)}>Studio ?</button>
          <button onClick={() => setIsFilter(3)}>Tag ?</button>
        </div>
      </div>
    </>
  );
}
