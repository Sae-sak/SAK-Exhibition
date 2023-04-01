export default function Logo() {
  return (
    <div className="relative w-[72px] h-[32px]">
      <div className="absolute left-0 top-2">
        <div className="top-[8px] h-[1px] w-full bg-light_gray_1 dark:bg-night_gray_1" />
        <div className="w-[72px] z-20 h-4"></div>
        <div className="bottom-[8px] h-[1px] w-full bg-light_gray_1 dark:bg-night_gray_1" />
      </div>
      <div className="absolute w-[72px] z-20">
        <span className="text-2xl font-bold text-kgu_main_red dark:text-kgu_main_red">
          S
        </span>
        <span className="text-2xl font-bold text-kgu_main_yellow dark:text-kgu_main_yellow">
          A
        </span>
        <span className="text-2xl font-bold text-kgu_main_green dark:text-kgu_main_green">
          K
        </span>
        <span className="">-</span>
        <span className="text-2xl font-bold text-kgu_main_blue dark:text-kgu_main_blue">
          E
        </span>
      </div>
    </div>
  );
}
