import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "4y3u6qiu",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});