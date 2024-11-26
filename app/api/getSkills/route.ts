import { NextResponse } from 'next/server'; // Import NextResponse for API responses
import { groq } from 'next-sanity';        // Import GROQ for querying Sanity
import { sanityClient } from '../../../sanity'; // Import the Sanity client setup

// GROQ Query to fetch all documents of type "skill"
const query = groq`
    *[_type == "skill"]
`;

// API Route Handler for GET requests
export async function GET() {
    try {
        // Fetch skills from Sanity
        const skills = await sanityClient.fetch(query);

        // Return the skills as a JSON response
        return NextResponse.json({ skills });
    } catch (error) {
        // Log the error for debugging
        console.error("Error fetching skills from Sanity:", error);

        // Return an error response with status 500
        return NextResponse.json({ error: "Failed to fetch skills" }, { status: 500 });
    }
}


