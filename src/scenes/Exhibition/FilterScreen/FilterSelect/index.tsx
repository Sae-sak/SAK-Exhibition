import classNames from "classnames";
import { motion } from "framer-motion";

import { closeFilter, selectCategory } from "@features/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "@toolkit/hook";

import { IProject } from "@type/exhibition";
import { CATEGORIES } from "@constants/filter";

import FilterList from "../FilterComponents/FilterList";
import BorderDelay from "@components/Animation/BorderDelay";
import { Fragment } from "react";

export default function FilterSelect({ projects }: { projects: IProject[] }) {
  const categoryName = useAppSelector((state) => state.filter.categoryName);

  const dispatch = useAppDispatch();

  return (
    <div className="col-center fixed top-0 h-screen w-screen bg-light_bg_1 dark:bg-night_bg_1">
      {CATEGORIES.map((CATEGORY, indx) => (
        <Fragment key={CATEGORY + indx}>
          {/* 위 경계 */}
          {indx === 0 || indx === 1 ? <BorderDelay delayTime={indx} /> : null}

          <motion.div
            className={classNames(
              "flex w-full items-center justify-between px-8 font-accent",
              {
                "h-full": categoryName === CATEGORY,
                "h-20": categoryName !== CATEGORY,
              }
            )}
          >
            {/* Filter 종류별 명칭 */}
            <button
              className={classNames({
                "flex w-full font-accent ": categoryName !== CATEGORY,
              })}
              onClick={() =>
                dispatch(selectCategory({ categoryName: CATEGORY }))
              }
            >
              <span
                className={`text-2xl ${
                  categoryName === CATEGORY
                    ? "text-accent_pink dark:text-accent_green"
                    : "hover:text-accent_pink dark:hover:text-accent_green"
                }`}
              >
                {CATEGORY}
              </span>
            </button>

            {/* Filter 종류별 리스트 */}
            {categoryName === CATEGORY && (
              <>
                {/* 가로 가이드라인 */}
                <motion.div
                  className="ml-4 h-[1px] w-full origin-left border-t-[1px]"
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
        </Fragment>
      ))}

      {/* close button */}
      <i
        onClick={() => dispatch(closeFilter())}
        className="ri-close-line fixed right-8 top-4 cursor-pointer text-4xl"
      ></i>
    </div>
  );
}
