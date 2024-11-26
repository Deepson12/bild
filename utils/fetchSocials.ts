import { Social } from "../typings";

export const fetchSocials = async (): Promise<Social[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`, {
      cache: 'no-store', // Prevent stale data from being cached
    });

    if (!res.ok) {
      console.error("Failed to fetch socials:", res.statusText);
      throw new Error("Failed to fetch socials");
    }

    const data = await res.json();
    const socials: Social[] = data.socials;

    // console.log("Fetched socials:", socials); // Debugging log
    return socials;
  } catch (error) {
    console.error("Error in fetchSocials:", error);
    throw error;
  }
};
