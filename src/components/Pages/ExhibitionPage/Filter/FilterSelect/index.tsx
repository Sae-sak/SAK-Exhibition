import FilterButton from "./FilterButton";
import UnactiveButton from "./UnativeButton";

export default function FilterSelect({isActive, setIsActive, names}) {
  return (
    <div className="fixed z-10 w-56 gap-10 p-4 left-10 col-end">
      {names.map((name) =>
        isActive === "" || isActive === name ? (
          <FilterButton key={name} setIsActive={setIsActive} name={name} />
        ) : (
          <UnactiveButton key={name} setIsActive={setIsActive} name={name} />
        )
      )}
    </div>
  );
}
