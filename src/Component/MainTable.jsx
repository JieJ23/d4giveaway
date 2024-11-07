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
  const availableRunes = allRunes.filter((obj) => obj.Count > 0);

  const updatedArray = availableRunes.map((item) => {
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
              <table className="w-full min-w-max table-auto text-left bg-transparent text-white">
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
                        className="text-[13px] min-w-[50px]"
                        style={{ color: getColor(obj.Rarity) }}
                      >
                        {obj.RuneName}
                      </td>
                      <td className="min-w-[50px]">
                        <Avatar src={`/${obj.Type}.png`} size="xs" />
                      </td>
                      <td
                        className="text-[12px] min-w-[100px]"
                        style={{ color: getColor(obj.Rarity) }}
                      >
                        {obj.Rarity}
                      </td>
                      <td className="text-[12px] text-gray-400 min-w-[150px]">
                        Rune of {obj.Type}
                      </td>
                      <td className="text-[12px]">x {obj.Count}</td>
                    </tr>
                  ))}
                  <TableSpace />
                </tbody>
              </table>
            </Card>
          </section>
          <section className="w-full max-w-[1000px] mx-auto rounded-xl px-2 font-customCin">
            <Card className="h-full w-full px-6 rounded-xl bg-transparent">
              <table className="w-full min-w-max table-auto text-left bg-transparent text-white">
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
                        className="text-[13px] min-w-[50px]"
                        style={{ color: getColor(obj.Rarity) }}
                      >
                        {obj.RuneName}
                      </td>
                      <td className="min-w-[50px]">
                        <Avatar src={`/${obj.Type}.png`} size="xs" />
                      </td>
                      <td
                        className="text-[12px] min-w-[100px]"
                        style={{ color: getColor(obj.Rarity) }}
                      >
                        {obj.Rarity}
                      </td>
                      <td className="text-[12px] text-gray-400 min-w-[150px]">
                        Rune of {obj.Type}
                      </td>
                      <td className="text-[12px]">x {obj.Count}</td>
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
