import { Project } from "../typings";

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`, {
      cache: 'no-store', // Prevent stale data
    });

    if (!res.ok) {
      console.error("Failed to fetch projects:", res.statusText);
      throw new Error("Failed to fetch projects");
    }

    const data = await res.json();
    const projects: Project[] = data.projects;

    // console.log("Fetched projects:", projects); // Debugging log
    return projects;
  } catch (error) {
    console.error("Error in fetchProjects:", error);
    throw error;
  }
};
