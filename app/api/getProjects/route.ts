import { NextResponse } from 'next/server'; // Import NextResponse for API responses
import { groq } from 'next-sanity';        // Import GROQ for querying Sanity
import { sanityClient } from '../../../sanity'; // Import the Sanity client setup

// GROQ Query to fetch projects and their associated technologies
const query = groq`
    *[_type == "project"] {
        ...,
        technologies[]->
    }
`;

// API Route Handler for GET requests
export async function GET() {
    try {
        // Fetch the projects from Sanity
        const projects = await sanityClient.fetch(query);

        // Return the projects as a JSON response
        return NextResponse.json({ projects });
    } catch (error) {
        // Log the error for debugging
        console.error("Error fetching projects from Sanity:", error);

        // Return an error response
        return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
    }
}
