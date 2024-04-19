"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export const Promo = () => {
  return (
    <div className="border-2 rounded-xl p-4 space-y-4">
      <div className="space-y-2">
        <div className="flex items-center gap-x-2">
          <Image src="/unlimited.svg" width={26} height={26} alt="Unlimited" />
          <h3 className="font-bold text-lg">Upgrade to Pro</h3>
        </div>
        <p className="text-muted-foreground">Get unlimited hearts and more!</p>
        <Button variant="super" size="lg" className="w-full" asChild>
          <Link href="/shop">Upgrade now</Link>
        </Button>
      </div>
    </div>
  );
};
