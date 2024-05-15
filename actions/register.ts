"use server";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcryptjs";

export const Register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) return { error: "Invalid Fields!" };

  const { email, name, password } = validatedFields.data;

  const existingUser = await db.user.findUnique({ where: { email } });

  if (existingUser) return { error: "User already exists!" };

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  return { success: "User Created Successfully" };
};
