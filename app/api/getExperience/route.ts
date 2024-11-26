import { NextResponse } from 'next/server'; // Import NextResponse for API responses
import { groq } from 'next-sanity';        // Import GROQ for querying Sanity
import { sanityClient } from '../../../sanity'; // Import the Sanity client setup

// GROQ Query to fetch experiences and their associated technologies
const query = groq`
    *[_type == "experience"] {
        ...,
        technologies[]->
    }
`;

// API Route Handler for GET requests
export async function GET() {
    try {
        // Fetch the experiences from Sanity
        const experiences = await sanityClient.fetch(query);

        // Return the experiences as a JSON response
        return NextResponse.json({ experiences });
    } catch (error) {
        // Log the error for debugging
        console.error("Error fetching experiences from Sanity:", error);

        // Return an error response
        return NextResponse.json({ error: "Failed to fetch experiences" }, { status: 500 });
    }
}
