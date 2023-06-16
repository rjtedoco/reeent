import { Listing, User } from "@prisma/client";

export type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt: String;
};

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: String;
  updatedAt: String;
  emailVerified: string | null;
};
