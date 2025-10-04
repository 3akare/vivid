import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import SearchBar from "./search-bar"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"
import NewProjectButton from "./new-project-button"
import { User } from "@/generated/prisma"

export default function UpperInfoBar({ user }: { user: User }) {
  return (
    <header className="sticky top-0 z-10 flex shrink-0 items-center gap-2 bg-background p-4 justify-between">
      <SidebarTrigger className="ml-1" />
      <div className="w-full max-w-[95%] flex items-center justify-between gap-4 flex-wrap">
        <SearchBar />
        <div className="flex flex-wrap gap-4 items-center justify-end">
          <Button className="bg-primary-80 rounded-lg hover:bg-background-80 text-primary font-semibold cursor-not-allowed">
            <Upload />
            Import
          </Button>
          <NewProjectButton user={user} />
        </div>
      </div>
    </header>
  )
}
