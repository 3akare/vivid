"use client";

import { Button } from "@/components/ui/button"
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { Project } from "@/generated/prisma"
import { JsonValue } from "@/generated/prisma/runtime/library"
import { useSlideStore } from "@/store/userSlideStore"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

type RecentOpenProps = {
  recentProjects: Project[]
}

export default function RecentOpen({ recentProjects }: RecentOpenProps) {
  const router = useRouter();
  const { setSlides } = useSlideStore();

  function handleClick(projectId: string, slides: JsonValue) {
    if (!projectId || !slides) {
      toast("Project not found", {
        description: "Try again",
      })
      return
    }

    setSlides(JSON.parse(JSON.stringify(slides)));
    router.push(`/presentation/${projectId}`)
  }
  return (
    recentProjects.length > 0 &&
    recentProjects.map((project) => (
      <SidebarGroup>
        <SidebarGroupLabel>Recently Opened </SidebarGroupLabel>
        <SidebarMenu>

          <SidebarMenuItem key={project.id}>
            <SidebarMenuButton asChild tooltip={project.title} className="hover:bg-primary-80">
              <Button variant={"link"}
                onClick={() => handleClick(project.id, project.slides)}
                className="text-xs items-center justify-start">
                <span>{project.title}</span>
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    ))
  )
}

