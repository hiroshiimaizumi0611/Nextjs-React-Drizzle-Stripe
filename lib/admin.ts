import { auth } from "@clerk/nextjs";

const adminIds = ["user_2e03aXJzrvJoUZBZPy3O7KYNb75"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
