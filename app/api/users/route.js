import { connectToDb } from "@/lib/ConnectTodb";
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