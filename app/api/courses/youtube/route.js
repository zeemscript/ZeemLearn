import axios from "axios";
import { response } from "express";

/**
 * Fetches YouTube video data using the YouTube API.
 *
 * @returns {Promise<Response>} A JSON response containing the video data or an error message.
 */

export async function GET() {
  try {
    const url = "https://www.googleapis.com/youtube/v3/search";
    const params = {
      part: "snippet",
      maxResults: 50,
      q: "programming+courses",
      type: "video",
      key: "AIzaSyBvvWNt_2ZqnfbtVSAnkmoOOOk4y5GExfA",
    };
    const response = await axios.get(url, { params });
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to fetch courses" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req) {
    const body = await req.body;
    const { q } = body;
  try {
    const url = "https://www.googleapis.com/youtube/v3/search";
    const params = {
      part: "snippet",
      maxResults: 50,
      q: `${q} +courses`,
      type: "video",
      key: "AIzaSyBvvWNt_2ZqnfbtVSAnkmoOOOk4y5GExfA",
    };
    const response = await axios.get(url, { params });
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to fetch courses" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
