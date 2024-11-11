import { Card, CardBody, Input } from "@material-tailwind/react";
import { useState } from "react";

const TABLE_HEAD = [
  "MW",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

function calculateMW(baseNum, hit, ga) {
  let startingValue = +ga || +baseNum;
  let recordValue;

  //
  const standard = baseNum * 0.05;
  const extra = baseNum * 0.25;

  //
  let obj = [];

  for (let i = 0; i < 12; i++) {
    if (
      (i === 3 && hit >= 1) ||
      (i === 7 && hit >= 2) ||
      (i === 11 && hit >= 3)
    ) {
      startingValue += extra;
    } else {
      startingValue += standard;
    }

    recordValue = startingValue.toFixed(1);
    obj.push(recordValue);
  }

  return obj;
}

export default function Calculator() {
  const [value, setValue] = useState(0);
  const [ga, setGa] = useState(0);

  return (
    <section className="px-2">
      <div className="flex justify-center gap-4">
        <Card className="mt-6 max-w-[800px] bg-[#28282b] text-white">
          <CardBody>
            <div className="mb-4 font-customCin text-[18px]">
              Masterwork Calculator
            </div>
            <section className="flex flex-col gap-2">
              <div className="font-customCin text-[14px] text-gray-400">
                - Each Masterworking rank increase an item's affixes by 5%
              </div>
              <div className="font-customCin text-[14px] text-gray-400">
                - Every fourth rank single random affix increase by 25%
              </div>
              <div className="font-customCin text-[14px] text-gray-400">
                - Regardless GA, increases determined by base amount.
              </div>
              <div className="font-customCin text-[14px] text-[orange]">
                - If Affix is not GA, leave blank or "0".
              </div>
              <div className="font-customCin text-[14px] text-[orange]">
                - If Affix is GA, "Base Amount" must be the max base affix
                value.
              </div>
              <div className="font-customCin text-[14px] text-[orange]">
                - GA is 1.5x of Max Base affix value
              </div>
            </section>
          </CardBody>
        </Card>
      </div>

      <section className="max-w-[500px] flex flex-wrap justify-center mx-auto my-5 gap-4">
        <div className="flex flex-col">
          <div className="text-white font-customCin text-[14px]">
            Base Amount
          </div>
          <Input
            size="lg"
            placeholder=""
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <div className="text-white font-customCin text-[14px]">GA Amout</div>
          <Input
            size="lg"
            placeholder=""
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => setGa(e.target.value)}
          />
        </div>
      </section>

      {/*  */}
      <section className="w-full max-w-[1200px] overflow-x-auto mt-10 px-2 mx-auto">
        <table className="w-full min-w-full text-center font-customCin text-white">
          <thead>
            <tr className="border-b-[1px]">
              {TABLE_HEAD.map((head) => (
                <th key={head} className="py-2">
                  <div>{head}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="min-w-[50px]">0x</td>
              {(() => {
                const newArray = [...calculateMW(value, 0, ga)]; // Create a shallow copy
                newArray.pop(); // Remove the last item
                newArray.pop(); // Remove the second last item
                newArray.pop(); // Remove the second last item

                newArray.splice(3, 0, "-"); // Add 'x' at index 3
                newArray.splice(7, 0, "-"); // Add 'y' at index 5
                newArray.splice(11, 0, "-"); // Add 'y' at index 5

                return newArray.map((item, index) => (
                  <td key={index} className="min-w-[50px]">
                    <div className="py-2">{item}</div>
                  </td>
                ));
              })()}
            </tr>
            <tr>
              <td>1x</td>
              {(() => {
                const newArray = [...calculateMW(value, 1, ga)]; // Create a shallow copy
                newArray.pop(); // Remove the last item
                newArray.pop(); // Remove the second last item
                newArray.splice(7, 0, "-"); // Add 'y' at index 7
                newArray.splice(11, 0, "-"); // Add 'y' at index 5

                return newArray.map((item, index) => (
                  <td key={index}>
                    <div className="pb-2 text-[cyan]">
                      {index < 3 ? `-` : item}
                    </div>
                  </td>
                ));
              })()}
            </tr>
            <tr>
              <td>2x</td>
              {(() => {
                const newArray = [...calculateMW(value, 2, ga)]; // Create a shallow copy
                newArray.pop(); // Remove the last item
                newArray.splice(11, 0, "-"); // Add 'x' at the 7th position (index 7)

                return newArray.map((item, index) => (
                  <td key={index}>
                    <div className="pb-2 text-[yellow]">
                      {index < 7 ? `-` : item}
                    </div>
                  </td>
                ));
              })()}
            </tr>
            <tr>
              <td>3x</td>
              {calculateMW(value, 3, ga).map((item, index) => {
                return (
                  <td>
                    <div className=" pb-2 text-[orange]">
                      {index < 11 ? `-` : item}
                    </div>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </section>
      {/*  */}
    </section>
  );
}
