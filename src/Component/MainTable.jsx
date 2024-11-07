import { Card, Avatar } from "@material-tailwind/react";
import { allRunes } from "../Data/RuneData";
import Loading from "./Loading";

const TABLE_HEAD = ["", "Rune", "", "Rarity", "Type", "Count"];

function TableSpace() {
  return (
    <tr>
      <td className="py-1"></td>
    </tr>
  );
}

export const getColor = (x) => {
  switch (x) {
    case `Legendary`:
      return `#FFAC1C`;
    case `Rare`:
      return `#FFEA00`;
    case `Magic`:
      return `#4169E1`;
  }
};

export function MainTable({ data, load }) {
  const updatedArray = allRunes.map((item) => {
    const subtractItem = data.find((sub) => sub.RuneName === item.RuneName);

    if (subtractItem) {
      return {
        ...item, // Keep other properties unchanged
        Count: item.Count - subtractItem.Count,
      };
    }
    return item;
  });

  const ritualRunes = updatedArray.filter((obj) => obj.Type === `Ritual`);
  const invocationRunes = updatedArray.filter(
    (obj) => obj.Type === `Invocation`
  );

  return (
    <>
      {" "}
      {load ? (
        <Loading />
      ) : (
        <main className="flex flex-col gap-6">
          <section className="w-full max-w-[1000px] mx-auto rounded-xl px-2 font-customCin">
            <Card className="h-full w-full px-6 rounded-xl bg-transparent">
              <table className="w-full min-w-max table-auto text-left bg-transparent backdrop-blur-sm text-white">
                <thead>
                  <tr className="border-b-[1px]">
                    {TABLE_HEAD.map((item, index) => (
                      <td
                        className="pt-5 text-gray-400 text-[12px]"
                        key={index}
                      >
                        {item}
                      </td>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <TableSpace />
                  {ritualRunes.map((obj, index) => (
                    <tr key={index}>
                      <td className="text-[12px] font-serif w-[50px]">
                        {index + 1}.
                      </td>
                      <td
                        className="text-[14px] min-w-[50px]"
                        style={{ color: getColor(obj.Rarity) }}
                      >
                        {obj.RuneName}
                      </td>
                      <td>
                        <Avatar src={`/${obj.Type}.png`} size="xs" />
                      </td>
                      <td
                        className="text-[12px]"
                        style={{ color: getColor(obj.Rarity) }}
                      >
                        {obj.Rarity}
                      </td>
                      <td className="text-[12px] text-gray-400">
                        Rune of {obj.Type}
                      </td>
                      <td className="text-[14px]">x {obj.Count}</td>
                    </tr>
                  ))}
                  <TableSpace />
                </tbody>
              </table>
            </Card>
          </section>
          <section className="w-full max-w-[1000px] mx-auto rounded-xl px-2 font-customCin">
            <Card className="h-full w-full px-6 rounded-xl bg-transparent">
              <table className="w-full min-w-max table-auto text-left bg-transparent backdrop-blur-sm text-white">
                <thead>
                  <tr className="border-b-[1px]">
                    {TABLE_HEAD.map((item, index) => (
                      <td
                        className="pt-5 text-gray-400 text-[12px]"
                        key={index}
                      >
                        {item}
                      </td>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <TableSpace />
                  {invocationRunes.map((obj, index) => (
                    <tr key={index}>
                      <td className="text-[12px] font-serif w-[50px]">
                        {index + 1}.
                      </td>
                      <td
                        className="text-[14px] min-w-[50px]"
                        style={{ color: getColor(obj.Rarity) }}
                      >
                        {obj.RuneName}
                      </td>
                      <td>
                        <Avatar src={`/${obj.Type}.png`} size="xs" />
                      </td>
                      <td
                        className="text-[12px]"
                        style={{ color: getColor(obj.Rarity) }}
                      >
                        {obj.Rarity}
                      </td>
                      <td className="text-[12px] text-gray-400">
                        Rune of {obj.Type}
                      </td>
                      <td className="text-[14px]">x {obj.Count}</td>
                    </tr>
                  ))}
                  <TableSpace />
                </tbody>
              </table>
            </Card>
          </section>
        </main>
      )}
    </>
  );
}
