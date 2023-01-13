import {useState} from "react";
import FilterList from "./FilterItem/FilterList";
import Overlay from "./FilterItem/Overlay";
import FilterSelect from "./FilterSelect";

export default function Filter() {
  const [isFilter, setIsFilter] = useState(false);
  const [isActive, setIsActive] = useState("");

  const STUDENT = "Student";
  const STUDIO = "Studio";
  const TAG = "Tag";

  return (
    <>
      <button onClick={() => setIsFilter(true)}>
        <h1 className="text-3xl font-bold">----------Filter----------</h1>
      </button>

      {isFilter ? (
        <>
          <FilterSelect
            isActive={isActive}
            setIsActive={setIsActive}
            names={[STUDENT, STUDIO, TAG]}
          />

          <FilterList
            isActive={isActive}
            setIsFilter={setIsActive}
            names={[STUDENT, STUDIO, TAG]}
          />

          <Overlay setIsFilter={setIsFilter} />
        </>
      ) : null}
    </>
  );
}
