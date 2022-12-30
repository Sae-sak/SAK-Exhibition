import {css} from "@emotion/css";

interface IValue {
  [key: number]: number | string;
}

export const breakpoints = (
  cssProp = "padding",
  cssPropUnits = "px",
  values: IValue[] = [],
  mediaQueryType = "min-width"
) => {
  const breakpointProps = values.reduce(
    (mediaQueries: string, value: IValue) => {
      const screenBreakpoint = Object.keys(value);
      const cssPropBreakpoint = Object.values(value);

      return (mediaQueries += `
    @media screen and (${mediaQueryType}: ${screenBreakpoint}px) {
      ${cssProp}: ${cssPropBreakpoint}${cssPropUnits};
    };
    `);
    },
    ""
  );

  return css(`
    ${() => breakpointProps}
  `);
};
