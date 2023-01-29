import {useState} from "react";

export default function usePrevious(state) {
  const [tuple, setTuple] = useState([null, state]); // [prev, next]

  if (tuple[1] !== state) {
    setTuple([tuple[1], state]);
  }

  return tuple[0];
}
