import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  value: number;
  variant?: "points" | "hearts";
};

export const ResultCard = ({ value, variant }: Props) => {
  const inmageSrc = variant === "hearts" ? "/heart.svg" : "/points.svg";

  return (
    <div
      className={cn(
        "rounded-2xl border-2 w-full",
        variant === "points" && "border-orange-400 bg-orange-400",
        variant === "hearts" && "border-rose-500 bg-rose-500"
      )}
    >
      <div
        className={cn(
          "p-1.5 text-white text-center font-bold rounded-t-xl uppercase text-xs",
          variant === "points" && "bg-orange-400",
          variant === "hearts" && "bg-rose-500"
        )}
      >
        {variant === "hearts" ? "Hearts Left" : "Total XP"}
      </div>
      <div
        className={cn(
          "rounded-2xl bg-white items-center flex justify-center p-6 font-bold text-lg",
          variant === "points" && "text-orange-400",
          variant === "hearts" && "text-rose-500"
        )}
      >
        <Image src={inmageSrc} width={30} height={30} alt="Icon" className="mr-1.5" />
        {value}
      </div>
    </div>
  );
};
