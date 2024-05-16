"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { signIn } from "@/auth";
import { Register } from "@/actions/register";
import { github } from "@/actions/socials";

export const Social = () => {
  return (
    <div className="w-full flex gap-x-4 items-center">
      <Button className="w-full" variant="outline" size="lg">
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        className="w-full"
        variant="outline"
        size="lg"
        onClick={async () => {
          await github();
        }}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};
