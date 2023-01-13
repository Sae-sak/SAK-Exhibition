import {useState} from "react";
import FilterList from "./FilterComponents/FilterList";
import Overlay from "./FilterComponents/Overlay";
import FilterSelect from "./FilterSelect";

export default function Filter() {
  const [isFilter, setIsFilter] = useState(false);
  const [isActive, setIsActive] = useState("");
  const [isSetFilter, setIsSetFilter] = useState("");

  const STUDENT = "Student";
  const STUDIO = "Studio";
  const TAG = "Tag";

  return (
    <>
      <button
        onClick={() => {
          setIsActive("");
          setIsFilter(true);
        }}
      >
        <h1 className="text-3xl font-bold">----------Filter----------</h1>
      </button>

      {isFilter ? (
        <>
          {/* 필터 분류 선택 */}
          <FilterSelect
            isActive={isActive}
            setIsActive={setIsActive}
            names={[STUDENT, STUDIO, TAG]}
          />

          {/* 필터 선택 목록 */}
          <FilterList
            isActive={isActive}
            setIsSetFilter={setIsSetFilter}
            setIsFilter={setIsFilter}
            names={[STUDENT, STUDIO, TAG]}
          />

          {/* 배경 */}
          <Overlay setIsFilter={setIsFilter} />
        </>
      ) : null}
    </>
  );
}
