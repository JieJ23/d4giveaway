import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

export function Header() {
  return (
    <div className="py-5 flex flex-row gap-2 justify-center">
      <Link to={"/Playground"}>
        <Button
          className="font-customCin text-white border-white/50 text-[13px]"
          variant="outlined"
        >
          Item Generator
        </Button>
      </Link>
      <Link to={"/"}>
        <Button
          className="font-customCin text-white border-white/50 text-[13px]"
          variant="outlined"
        >
          Masterworking Calculator
        </Button>
      </Link>
    </div>
  );
}
