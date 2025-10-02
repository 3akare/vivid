'use server';

import { onAuthenticateUser } from "@/actions/user";
import { redirect } from "next/navigation";

export default async function AuthCallbackPage() {
  const auth = await onAuthenticateUser();

  console.log(auth);

  if (auth.status == 200 || auth.status == 201) {
    redirect("/dashboard");
  }
  else {
    redirect("/sign-in")
  }
}
