"use server";

import { client } from "@/lib/prisma";
import { onAuthenticateUser } from "./user";

export async function getAllProjects() {
  try {
    const checkUser = await onAuthenticateUser();
    if (checkUser.status !== 200 || !checkUser.user) {
      return {
        status: 403,
        error: "User not authenticated"
      }
    }

    const projects = await client.project.findMany({
      where: {
        ownerId: checkUser.user.id,
        isDeleted: false,
      },
      orderBy: {
        updatedAt: 'desc',
      }
    })

    if (projects.length === 0) {
      return {
        status: 404,
        error: "No Projects found"
      }
    }
    return { status: 200, data: projects }

  } catch (error) {
    console.error(error);
    return { status: 500, error: 'Internal Server Error' }
  }

}

export async function getRecentProjects() {
  try {
    const checkUser = await onAuthenticateUser();
    if (checkUser.status !== 200 || !checkUser.user) {
      return {
        status: 403,
        error: "User not authenticated"
      }
    }

    const projects = await client.project.findMany({
      where: {
        ownerId: checkUser.user.id,
        isDeleted: false,
      },
      orderBy: {
        updatedAt: 'desc',
      },
      take: 5,
    })

    if (projects.length === 0) {
      return {
        status: 404,
        error: "No Recent Projects found"
      }
    }

    return { status: 200, data: projects }
  } catch (error) {
    console.error(error);
    return { status: 500, error: 'Internal Server Error' }
  }
}
