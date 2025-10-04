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

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
}
