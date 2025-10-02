export const dynamic = 'force-dynamic';

import { onAuthenticateUser } from "@/actions/user";
import { redirect } from "next/navigation";

type ProtectedLayoutRops = {
  children: React.ReactNode
}

export default async function ProtectedLayout({ children }: ProtectedLayoutRops) {
  const auth = await onAuthenticateUser();
  if (!auth.user) redirect('/sign-in');
  return (
    <div className="w-full min-h-screen">{children}</div>
  )
}
