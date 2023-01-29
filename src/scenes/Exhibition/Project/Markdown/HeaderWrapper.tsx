export default function HeaderWrapper({children, value}) {
  return (
    <h1
      className="mb-2 text-2xl font-bold font-titleKR"
      id={value.replaceAll(" ", "-")}
    >
      {children}
    </h1>
  );
}
