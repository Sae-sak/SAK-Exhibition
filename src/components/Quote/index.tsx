import {quotes} from "@constants/quotes";
import {useEffect, useState} from "react";

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Quote() {
  const [architect, setArchitect] = useState("");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const randint = rand(1, 23);
    setArchitect(quotes[randint].architect);
    setQuote(quotes[randint].quote);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="gap-2 py-8 col-center">
        <div className="text-center">
          <span className="text-3xl font-titleKR">&quot;{quote}&quot;</span>
        </div>
        <div>
          <span className="text-xl text-gray-700 font-titleKR">
            - {architect} -
          </span>
        </div>
      </div>
    </div>
  );
}
