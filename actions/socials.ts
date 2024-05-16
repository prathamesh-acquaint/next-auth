"use server";

import { signIn } from "@/auth";

export const github = async () => {
  await signIn("github");
};
