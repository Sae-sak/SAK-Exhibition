export default function HeaderWrapper({ children, value }) {
  return (
    <h1
      className="mb-2 text-[20px] font-bold font-titleKR md:text-2xl"
      id={value.replaceAll(" ", "-")}
    >
      {children}
    </h1>
  );
}
