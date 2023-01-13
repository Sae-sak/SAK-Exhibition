export default function Overlay({setIsFilter}) {
  return (
    <>
      <div className="fixed top-0 w-screen h-screen bg-slate-900/50 col-center"></div>
      <i
        onClick={() => setIsFilter(false)}
        className="fixed text-4xl text-white cursor-pointer top-10 right-10 ri-close-line"
      ></i>
    </>
  );
}
