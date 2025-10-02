import { Home, LayoutTemplate, Settings, Trash } from "lucide-react";

export const data = {
  user: {
    name: "Shadcn",
    email: 'me@email.com',
    avatar: '/avatar/shadcn.jpg'
  },
  navMain: [
    {
      title: "Home",
      url: "/dashboard",
      icon: Home
    },
    {
      title: "Templates",
      url: "/templates",
      icon: LayoutTemplate
    },
    {
      title: "Trash",
      url: "/trash",
      icon: Trash
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings
    },
  ]
}
