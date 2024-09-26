import { connectToDb } from "@/lib/ConnectTodb";

if (process.env.NODE_ENV === "production") {
  return new Response("Route not available in production", {
    status: 404,
    headers: { "Content-Type": "text/plain" },
  });
}
export async function GET() {
  try {
    const db = await connectToDb();
    const usersCollection = db.collection("users");
    const users = await usersCollection.find().toArray();

    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch users" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}