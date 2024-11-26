import { PageInfo } from "../typings";

export const fetchPageInfo = async (): Promise<PageInfo> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`, {
      cache: 'no-store', // Prevent stale data
    });

    if (!res.ok) {
      console.error("Failed to fetch page info:", res.statusText);
      throw new Error("Failed to fetch page info");
    }

    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;

    // console.log("Fetched page info:", pageInfo); // Debugging log
    return pageInfo;
  } catch (error) {
    console.error("Error in fetchPageInfo:", error);
    throw error;
  }
};
