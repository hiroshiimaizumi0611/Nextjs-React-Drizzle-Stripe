import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress, getUserSubscriptions } from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Items } from "./items";

const ShopPage = async () => {
  const userProgress = await getUserProgress();
  const userSubscriptions = await getUserSubscriptions();

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  const isPro = !!userSubscriptions?.isActive;

  return (
    <div className="flex flex-row-reverse gap-[48px] ox-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />
      </StickyWrapper>
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image src="/shop.svg" width={90} height={90} alt="Shop" />
        </div>
        <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">Shop</h1>
        <p className="text-muted-foreground text-center text-lg mb-6">
          Spend your points on cool stuff.
        </p>
        <Items
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />
      </FeedWrapper>
    </div>
  );
};

export default ShopPage;
