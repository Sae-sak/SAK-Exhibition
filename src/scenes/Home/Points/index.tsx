import { playerData } from "public/data/playerData";

export default function Points() {
  return (
    <div className="py-8 border-b flex flex-col gap-8 justify-between">
      <h1 className="text-3xl">Player List</h1>
      <div className="col-center gap-10">
        {Object.keys(playerData).map((studio) => (
          <div
            key={studio}
            className={`w-full flex flex-col justify-center items-start gap-1`}
          >
            <h4 className="text-xl">{studio}</h4>

            <ul className="w-full flex items-start justify-start gap-2 flex-wrap">
              {playerData[studio].map((player: string) => (
                <li key={studio + player}>{player}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
