"use client";

import { JsonValue } from "@/generated/prisma/runtime/library"
import { itemVariants } from "@/lib/constants";
import { motion } from "framer-motion"

type ProjectCardProps = {
  projectId: string,
  title: string,
  createdAt: Date,
  src: string,
  isDeleted: boolean,
  slideData: JsonValue
}
export default function ProjectCard({ projectId, title, createdAt, src, slideData, isDeleted }: ProjectCardProps) {
  return (
    <motion.div variants={itemVariants}></motion.div>
  )
}
