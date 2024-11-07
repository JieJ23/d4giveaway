import { Avatar } from "@material-tailwind/react";
import { grabRunes } from "../Data/Logic";
import { Spinner } from "@material-tailwind/react";

export default function SelectedPlayer({ data, load }) {
  return (
    <>
      {load ? (
        ""
      ) : (
        <section className="max-w-[1000px] mx-auto flex items-center flex-wrap gap-2 font-customCin text-white px-4">
          <Spinner color="blue" />
          {data.map((obj, index) => (
            <div
              className="flex flex-col bg-[#15427d] py-1 px-2 rounded-md items-center"
              key={index}
            >
              <div className="text-[12px]" key={index}>
                {obj.Player}
              </div>
              <div className="flex justify-center items-center gap-2">
                <Avatar src={`/${grabRunes(obj.RuneName)}.png`} size="xs" />
                <div className="text-[12px]">{obj.RuneName}</div>
                <div className="text-[12px]">
                  {obj.Count}
                  <span className="font-serif"> x</span>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
}
