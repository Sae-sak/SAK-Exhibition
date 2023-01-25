export const randomFadeIn = {
  off(randomInteger: number) {
    return {
      x: randomInteger * 2,
      opacity: 0,
    };
  },
  on() {
    return {
      x: 0,
      opacity: 1,
    };
  },
};
