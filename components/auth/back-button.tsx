"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  label: string;
  href: string;
}

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Button variant="link" size="sm" className="w-full font-normal" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
