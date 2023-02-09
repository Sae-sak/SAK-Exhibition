export default function Logo() {
  return (
    <div className="relative w-[72px]">
      <div className="z-30 block">
        <span className="text-2xl font-bold text-kgu_main_red">S</span>
        <span className="text-2xl font-bold text-kgu_main_yellow">A</span>
        <span className="text-[25px] font-bold text-kgu_main_green">K</span>
        <span>-</span>
        <span className="text-[25px] font-bold text-kgu_main_blue">E</span>
      </div>
      <div className="absolute top-[8px] h-[1px] w-full bg-light_gray_1 dark:bg-night_gray_1" />
      <div className="absolute bottom-[7px] h-[1px] w-full bg-light_gray_1 dark:bg-night_gray_1" />
    </div>
  );
}
