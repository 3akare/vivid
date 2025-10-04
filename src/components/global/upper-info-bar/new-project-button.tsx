"use client";

import { Button } from "@/components/ui/button";
import { User } from "@/generated/prisma";
import { Plus } from "lucide-react";
// import { useRouter } from "next/navigation";


export default function NewProjectButton({ user }: { user: User }) {
  // WIP:handle click needs completion
  // const router = useRouter()
  return (
    <Button className="rounded-lg font-semibold" size={"lg"}
      onClick={() => { }}
      disabled={!user.subcription}>
      <Plus />
      New Project
    </Button>
  )
}
