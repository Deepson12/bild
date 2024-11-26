import { Experience } from "../typings";

export const fetchExperiences = async (): Promise<Experience[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`, {
      cache: 'no-store', // Prevent stale data
    });

    if (!res.ok) {
      console.error("Failed to fetch experiences:", res.statusText);
      throw new Error("Failed to fetch experiences");
    }

    const data = await res.json();
    const experiences: Experience[] = data.experiences;

    // console.log("Fetched experiences:", experiences); // Debugging log
    return experiences;
  } catch (error) {
    console.error("Error in fetchExperiences:", error);
    throw error;
  }
};
