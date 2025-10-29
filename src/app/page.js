import { NomNom } from "./FoodIkon/nomnom";

export default function Home() {
  return (
    <div className="w-[1440px] h-[1024px] flex">
      <div className="h-full w-[20%] bg-white">
        <div className="flex p-5">
          <NomNom />

          <p className="text-xs">
            <span className="text-xl">NomNom</span>Swift delivery
          </p>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="h-full w-[80%] bg-[#E4E4E7]"></div>
    </div>
  );
}
