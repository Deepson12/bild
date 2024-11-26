import { NextResponse } from 'next/server'; // Import NextResponse for API responses
import { groq } from 'next-sanity';        // Import GROQ for querying Sanity
import { sanityClient } from '../../../sanity'; // Import the Sanity client setup

// GROQ Query to fetch social data, including associated technologies
const query = groq`
    *[_type == "social"] {
        ...,
        technologies[]->
    }
`;

// API Route Handler for GET requests
export async function GET() {
    try {
        // Fetch social data from Sanity
        const socials = await sanityClient.fetch(query);

        // Return the social data as a JSON response
        return NextResponse.json({ socials });
    } catch (error) {
        // Log the error for debugging
        console.error("Error fetching socials from Sanity:", error);

        // Return an error response with status 500
        return NextResponse.json({ error: "Failed to fetch socials" }, { status: 500 });
    }
}
