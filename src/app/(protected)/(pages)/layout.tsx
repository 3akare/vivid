import { getRecentProjects } from "@/actions/project";
import { onAuthenticateUser } from "@/actions/user";
import AppSideBar from "@/components/global/app-sidebar";
import UpperInfoBar from "@/components/global/upper-info-bar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { redirect } from "next/navigation";

type PageLayoutProps = {
  children: React.ReactNode;
}
export default async function PageLayout({ children }: PageLayoutProps) {
  const recentProjects = await getRecentProjects();
  const auth = await onAuthenticateUser();
  if (!auth.user) redirect('/sign-in');
  return (
    <SidebarProvider>
      <AppSideBar user={auth.user} recentProjects={recentProjects.data || []} />
      <SidebarInset>
        <UpperInfoBar user={auth.user} />
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
