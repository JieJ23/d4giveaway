import { Card, CardBody, Input } from "@material-tailwind/react";
import { useState } from "react";

const TABLE_HEAD = [
  "Masterwork",
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

const TABLE_ROWS = [{}];

function calculateMW(baseNum, hit, ga) {
  let startingValue = +ga || +baseNum;
  let recordValue;

  //
  const standard = baseNum * 0.05;
  const extra = baseNum * 0.25;

  //
  let obj = [];

  for (let i = 0; i < 12; i++) {
    if (i === 3 && hit >= 1) {
      startingValue += extra;
      recordValue = startingValue.toFixed(1);
      obj.push(recordValue);
    } else if (i === 7 && hit >= 2) {
      startingValue += extra;
      recordValue = startingValue.toFixed(1);
      obj.push(recordValue);
    } else if (i === 11 && hit >= 3) {
      startingValue += extra;
      recordValue = startingValue.toFixed(1);
      obj.push(recordValue);
    } else {
      startingValue += standard;
      recordValue = startingValue.toFixed(1);
      obj.push(recordValue);
    }
  }
  return obj;
}

console.log(calculateMW(457, 3, 685));

export default function Calculator() {
  const [value, setValue] = useState(457);
  const [ga, setGa] = useState(685);

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
      <table className="w-full table-auto text-left max-w-[1000px] mx-auto mt-10 font-customCin text-white">
        <thead>
          <tr className="border-b-[1px]">
            {TABLE_HEAD.map((head) => (
              <th key={head} className="py-2">
                <div className="">{head}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0x - 25% Buff</td>
            {calculateMW(value, 0, ga).map((item, index) => {
              return (
                <td>
                  <div className="py-2">{item}</div>
                </td>
              );
            })}
          </tr>
          <tr>
            <td>1x - 25% Buff</td>
            {calculateMW(value, 1, ga).map((item, index) => {
              return (
                <td>
                  <div className=" pb-2 text-[cyan]">{item}</div>
                </td>
              );
            })}
          </tr>
          <tr>
            <td>2x - 25% Buff</td>
            {calculateMW(value, 2, ga).map((item, index) => {
              return (
                <td>
                  <div className=" pb-2 text-[yellow]">{item}</div>
                </td>
              );
            })}
          </tr>
          <tr>
            <td>3x - 25% Buff</td>
            {calculateMW(value, 3, ga).map((item, index) => {
              return (
                <td>
                  <div className=" pb-2 text-[orange]">{item}</div>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
      {/*  */}
    </section>
  );
}
