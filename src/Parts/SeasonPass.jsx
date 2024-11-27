import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="white"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

export default function SeasonPass() {
  return (
    <section className="flex flex-wrap justify-center pt-4 gap-10">
      <Card
        variant="gradient"
        className="w-full max-w-[650px] p-8 px-5 bg-transparent backdrop-blur-sm text-white border-[1px] border-white/30 relative"
      >
        <div
          className="absolute h-full w-full bg-contain -z-10 bg-center top-0 left-0 rounded-xl opacity-40"
          style={{ backgroundImage: "url('/expan.png')" }}
        />
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none pb-8 text-center"
        >
          <img src="/diablo4.png" className="w-[250px] mx-auto" />
          <Typography
            variant="h1"
            color="white"
            className="mt-6 flex justify-center gap-1 text-7xl font-normal font-customExo"
          >
            <span className="mt-2 text-2xl font-customExo">$</span>29{" "}
            <span className="self-end text-2xl">.99</span>
          </Typography>
          <Typography className="text-white font-customExo">
            Season 7 DLC: Reawakening the Force
          </Typography>
        </CardHeader>
        <CardBody className="p-0 flex gap-2">
          <ul className="flex flex-col gap-2 w-[45%]">
            <li className="flex items-start">
              <img src="affix2.png" className="w-[25px]" />
              <Typography className="font-normal font-customExo text-[13px]">
                New classes: the Monk and the Paladin.
              </Typography>
            </li>
            <li className="flex items-start">
              <img src="affix2.png" className="w-[25px]" />
              <Typography className="font-normal font-customExo text-[13px]">
                New Transcendencies: Each base class branches into two
                Transcendency classes, totaling 16 Transcendency classes.
              </Typography>
            </li>
            <li className="flex items-start">
              <img src="affix2.png" className="w-[25px]" />
              <Typography className="font-normal font-customExo text-[13px]">
                Two additional chapters added to the campaign: final battle
                against the three Greater Evils.
              </Typography>
            </li>
            <li className="flex items-start">
              <img src="affix2.png" className="w-[25px]" />
              <Typography className="font-normal font-customExo text-[13px]">
                The restrictions on runewords have been lifted, no more limiting
                to 2 runewords.
              </Typography>
            </li>
            <li className="flex items-start">
              <img src="affix2.png" className="w-[25px]" />
              <Typography className="font-normal font-customExo text-[13px]">
                The limitation of five Paragon boards has been removed.
              </Typography>
            </li>
            <li className="flex items-start">
              <img src="affix2.png" className="w-[25px]" />
              <Typography className="font-normal font-customExo text-[13px]">
                All previous bug builds have been reinstated across all classes,
                restoring their lost power to every class.
              </Typography>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 w-[50%]">
            <li className="flex items-start">
              <img src="affix2.png" className="w-[25px]" />
              <Typography className="font-normal font-customExo text-[13px]">
                The new Armory system enables importing and exporting to
                third-party resources.
              </Typography>
            </li>
            <li className="flex items-start">
              <img src="affix2.png" className="w-[25px]" />
              <Typography className="font-normal font-customExo text-[13px]">
                New Endgame: Global Map, More details will be available shortly.
              </Typography>
            </li>
            <li className="flex items-start">
              <img src="affix2.png" className="w-[25px]" />
              <Typography className="font-normal font-customExo text-[13px]">
                Comprehensively redesigned all monster types and Torment bosses.
              </Typography>
            </li>
            <li className="flex items-start">
              <img src="affix2.png" className="w-[25px]" />
              <Typography className="font-normal font-customExo text-[13px]">
                Expanded the Sanctuary universe with five new regions accessible
                to all players, featuring new monster types and Torment bosses.
              </Typography>
            </li>
            <li className="flex items-start">
              <img src="affix2.png" className="w-[25px]" />
              <Typography className="font-normal font-customExo text-[13px]">
                The skill trees have been fully revamped, providing enhanced
                build diversity and customization options.
              </Typography>
            </li>
            <li className="flex items-start">
              <img src="affix2.png" className="w-[25px]" />
              <Typography className="font-normal font-customExo text-[13px]">
                Other Quality of Life improvements such as: Tempering an item
                now offers the option to preserve its current stats. .
                Masterwork rerolls will only reset to the last checkpoint, such
                as 0, 4, or 8.
              </Typography>
            </li>
          </ul>
        </CardBody>
      </Card>
    </section>
  );
}
