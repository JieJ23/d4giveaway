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
      stroke="currentColor"
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
        className="w-full max-w-[450px] p-8 bg-transparent backdrop-blur-md text-white border-[1px] border-white/30 relative"
      >
        <div
          className="absolute h-full w-full bg-cover -z-10 bg-center top-0 left-0 rounded-xl opacity-20"
          style={{ backgroundImage: "url('/deluxe.png')" }}
        />
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
          <img src="/d4logo.png" className="w-[250px] mx-auto" />
          <Typography
            variant="h1"
            color="white"
            className="mt-6 flex justify-center gap-1 text-7xl font-normal font-customCin"
          >
            <span className="mt-2 text-2xl">$</span>109{" "}
            <span className="self-end text-2xl">.99</span>
          </Typography>
          <Typography className="text-white font-customCin">
            Ultimate Season Pass
          </Typography>
        </CardHeader>
        <CardBody className="p-0 ">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1 bg-[#013220]">
                <CheckIcon />
              </span>
              <Typography className="font-normal font-customCin text-[13px]">
                Includes all benefits from the Deluxe and Standard editions,
                plus:
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1 bg-[#013220]">
                <CheckIcon />
              </span>
              <Typography className="font-normal font-customCin text-[13px]">
                10000 Platinum
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1 bg-[#013220]">
                <CheckIcon />
              </span>
              <Typography className="font-normal font-customCin text-[13px]">
                +200% Experience Boost
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1 bg-[#013220]">
                <CheckIcon />
              </span>
              <Typography className="font-normal font-customCin text-[13px]">
                Expand maximum Paragon Boards to 9
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1 bg-[#013220]">
                <CheckIcon />
              </span>
              <Typography className="font-normal font-customCin text-[13px]">
                Gain an additional 100 Paragon levels
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1 bg-[#013220]">
                <CheckIcon />
              </span>
              <Typography className="font-normal font-customCin text-[13px]">
                Access to the Armory
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1 bg-[#013220]">
                <CheckIcon />
              </span>
              <Typography className="font-normal font-customCin text-[13px]">
                Access Your stash from anywhere
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1 bg-[#013220]">
                <CheckIcon />
              </span>
              <Typography className="font-normal font-customCin text-[13px]">
                Increase Temper Limit by 2x
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1 bg-[#013220]">
                <CheckIcon />
              </span>
              <Typography className="font-normal font-customCin text-[13px]">
                Reduce masterwork material requirements by 50%
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1 bg-[#013220]">
                <CheckIcon />
              </span>
              <Typography className="font-normal font-customCin text-[13px]">
                Glyphs experience increased by 100% and shared across all
                characters
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1 bg-[#013220]">
                <CheckIcon />
              </span>
              <Typography className="font-normal font-customCin text-[13px]">
                For the full list of benefits, please refer to our VIP handbook
              </Typography>
            </li>
          </ul>
        </CardBody>
      </Card>
      <Card
        variant="gradient"
        className="w-full max-w-[450px] p-8 bg-transparent backdrop-blur-md text-white border-[1px] border-white/30 relative"
      >
        <div
          className="absolute h-full w-full bg-cover -z-10 bg-center top-0 left-0 rounded-xl opacity-20"
          style={{ backgroundImage: "url('/ultimate.png')" }}
        />
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
          <img src="/d4logo.png" className="w-[250px] mx-auto" />
          <Typography
            variant="h1"
            color="white"
            className="mt-6 flex justify-center gap-1 text-7xl font-normal font-customCin"
          >
            <span className="mt-2 text-2xl">$</span>89{" "}
            <span className="self-end text-2xl">.99</span>
          </Typography>
          <Typography className="text-white font-customCin">
            Deluxe Season Pass
          </Typography>
        </CardHeader>
        <CardBody className="p-0 ">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1 bg-[#013220]">
                <CheckIcon />
              </span>
              <Typography className="font-normal font-customCin text-[13px]">
                Includes all benefits from the Deluxe and Standard editions,
                plus:
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1 bg-[#013220]">
                <CheckIcon />
              </span>
              <Typography className="font-normal font-customCin text-[13px]">
                7000 Platinum
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1 bg-[#013220]">
                <CheckIcon />
              </span>
              <Typography className="font-normal font-customCin text-[13px]">
                +50% Experience Boost
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1 bg-[#013220]">
                <CheckIcon />
              </span>
              <Typography className="font-normal font-customCin text-[13px]">
                Expand maximum Paragon Boards to 7
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1 bg-[#013220]">
                <CheckIcon />
              </span>
              <Typography className="font-normal font-customCin text-[13px]">
                Gain an additional 50 Paragon levels
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1 bg-[#013220]">
                <CheckIcon />
              </span>
              <Typography className="font-normal font-customCin text-[13px]">
                Increase stash size by 10 slots
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1 bg-[#013220]">
                <CheckIcon />
              </span>
              <Typography className="font-normal font-customCin text-[13px]">
                Ancestral items guaranteed to have maximum aspects
              </Typography>
            </li>
          </ul>
        </CardBody>
      </Card>
      <Card
        variant="gradient"
        className="w-full max-w-[450px] p-8 bg-transparent backdrop-blur-md text-white border-[1px] border-white/30 relative"
      >
        <div
          className="absolute h-full w-full bg-cover -z-10 bg-center top-0 left-0 rounded-xl opacity-20"
          style={{ backgroundImage: "url('/standard.png')" }}
        />
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
          <img src="/d4logo.png" className="w-[250px] mx-auto" />
          <Typography
            variant="h1"
            color="white"
            className="mt-6 flex justify-center gap-1 text-7xl font-normal font-customCin"
          >
            <span className="mt-2 text-2xl">$</span>49{" "}
            <span className="self-end text-2xl">.99</span>
          </Typography>
          <Typography className="text-white font-customCin">
            Standard Season Pass
          </Typography>
        </CardHeader>
        <CardBody className="p-0 ">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1 bg-[#013220]">
                <CheckIcon />
              </span>
              <Typography className="font-normal font-customCin">
                Access to the Season Pass
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1 bg-[#013220]">
                <CheckIcon />
              </span>
              <Typography className="font-normal font-customCin">
                6000 Platinum
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1 bg-[#013220]">
                <CheckIcon />
              </span>
              <Typography className="font-normal font-customCin">
                +25% Experience Boost
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1 bg-[#013220]">
                <CheckIcon />
              </span>
              <Typography className="font-normal font-customCin">
                Expand maximum Paragon Boards to 6
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1 bg-[#013220]">
                <CheckIcon />
              </span>
              <Typography className="font-normal font-customCin">
                One Premium Battle Pass Token
              </Typography>
            </li>
          </ul>
        </CardBody>
      </Card>
    </section>
  );
}
