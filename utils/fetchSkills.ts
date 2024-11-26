import { Skill } from "../typings";

export const fetchSkills = async (): Promise<Skill[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`, {
      cache: 'no-store', // Ensure fresh data is fetched
    });

    if (!res.ok) {
      console.error("Failed to fetch skills:", res.statusText);
      throw new Error("Failed to fetch skills");
    }

    const data = await res.json();
    const skills: Skill[] = data.skills;

    // console.log("Fetched skills:", skills); // Debugging log
    return skills;
  } catch (error) {
    console.error("Error in fetchSkills:", error);
    throw error;
  }
};
