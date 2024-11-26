import { NextResponse } from 'next/server';
import { groq } from 'next-sanity';
import { sanityClient } from '../../../sanity'; // Sanity client setup

// GROQ Query to fetch page information
const query = groq`
    *[_type == "pageInfo"][0]
`;

// API Route Handler for GET requests
export async function GET() {
    try {
        // Fetch the page information from Sanity
        const pageInfo = await sanityClient.fetch(query);

        // Return the response without any caching
        const response = NextResponse.json({ pageInfo });

        // Set Cache-Control to ensure no caching happens
        response.headers.set('Cache-Control', 'no-store');

        return response;
    } catch (error) {
        // Log the error for debugging
        console.error("Error fetching pageInfo from Sanity:", error);

        // Return an error response with a 500 status code
        return NextResponse.json({ error: "Failed to fetch pageInfo" }, { status: 500 });
    }
}

