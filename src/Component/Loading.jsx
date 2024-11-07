import { Spinner } from "@material-tailwind/react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center gap-2 font-serif mt-10">
      <Spinner color="blue" />
      <div className="text-white text-[20px] font-customCin">Loading Data</div>
    </div>
  );
}
