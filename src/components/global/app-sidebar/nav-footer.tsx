"use client";

import { Button } from "@/components/ui/button";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { User } from "@/generated/prisma"
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import { useState } from "react";

type NavFooterProps = {
  prismaUser: User
}

export default function NavFooter({ prismaUser }: NavFooterProps) {
  const { isLoaded, isSignedIn, user } = useUser();
  const { loading, setLoading } = useState<boolean>(false);

  if (!isLoaded || !isSignedIn) return null
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex flex-col gap-y-6 items-start collapsible=icon]:hidden">
          {!prismaUser.subcription && (
            <div className="flex flex-col items-start p-2 pb-3 gap-4 bg-background-80 rounded-xl">
              <div className="flex flex-col items-start gap-1">
                <p className="text-base font-bold">
                  Get <span className="text-purple-400"> Creative AI </span>
                </p>
                <span className="text-sm">
                  Unlock all features including AI and more
                </span>
              </div>
              <div className="w-full p=[1px] rounded-full">
                <Button
                  className="w-full bg-background-80 hover:bg-background-90 text-primary rounded-full font-bold border-[1px] border-black hover:cursor-pointer"
                  variant={"default"}
                  size={'lg'}
                // onClick={handleUpgrading}
                >
                  {loading ? "Upgrading..." : "Upgrade"}
                </Button>
              </div>
            </div>
          )}
          <SignedIn>
            <SidebarMenuButton size={"lg"} className="data-[state=open]:bg-accent data-[state=open]:text-accent-foreground">
              <UserButton />
              <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                <span className="truncate font-semibold">{user?.fullName}</span>
                <span className="truncate text-accent-foreground">{user?.emailAddresses[0]?.emailAddress}</span>
              </div>
            </SidebarMenuButton>
          </SignedIn>
        </div>
      </SidebarMenuItem>
    </SidebarMenu >
  )
}
