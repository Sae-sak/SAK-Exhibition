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
    <div className="col-center">
      <div>
        <span className="font-caption">{quote}</span>
      </div>
      <div>
        <span className="font-caption"> - {architect} -</span>
      </div>
    </div>
  );
}
