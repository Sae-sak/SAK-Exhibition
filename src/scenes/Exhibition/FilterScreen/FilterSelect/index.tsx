import classNames from "classnames";
import { motion } from "framer-motion";

import { closeFilter, selectCategory } from "@features/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "@toolkit/hook";

import { IProject } from "@type/exhibition";
import { CATEGORIES } from "@constants/filter";

import FilterList from "../FilterComponents/FilterList";
import BorderDelay from "@components/Animation/BorderDelay";

export default function FilterSelect({ projects }: { projects: IProject[] }) {
  const categoryName = useAppSelector((state) => state.filter.categoryName);

  const dispatch = useAppDispatch();

  return (
    <div className="fixed top-0 w-screen h-screen col-center bg-light_bg_1 dark:bg-night_bg_1">
      {CATEGORIES.map((CATEGORY, indx) => (
        <>
          {/* 위 경계 */}
          {indx === 0 || indx === 1 ? <BorderDelay delayTime={indx} /> : null}

          <motion.div
            key={CATEGORY}
            className={classNames(
              "flex items-center justify-between w-full px-8",
              {
                "h-full font-bold": categoryName === CATEGORY,
                "h-20": categoryName !== CATEGORY,
              }
            )}
          >
            {/* Filter 종류별 명칭 */}
            <button
              className={classNames({
                "w-full flex hover:font-bold": categoryName !== CATEGORY,
              })}
              onClick={() =>
                dispatch(selectCategory({ categoryName: CATEGORY }))
              }
            >
              <span className="text-2xl">{CATEGORY}</span>
            </button>

            {/* Filter 종류별 리스트 */}
            {categoryName === CATEGORY && (
              <>
                {/* 가로 가이드라인 */}
                <motion.div
                  className="border-t-[1px] h-[1px] w-8 ml-4 origin-left sm:w-28 md:w-80 lg:w-full xl:w-full"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />

                <FilterList projects={projects} />
              </>
            )}
          </motion.div>

          {/* 아래 경계 */}
          {indx === 1 || indx === 2 ? <BorderDelay delayTime={indx} /> : null}
        </>
      ))}

      {/* close button */}
      <i
        onClick={() => dispatch(closeFilter())}
        className="fixed text-4xl cursor-pointer top-4 right-8 ri-close-line"
      ></i>
    </div>
  );
}
