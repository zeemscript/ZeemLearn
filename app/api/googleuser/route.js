import { connectToDb } from "@/lib/ConnectTodb";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email query parameter is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const db = await connectToDb();
    const usersCollection = db.collection("users");

    // Find the user by email
    const user = await usersCollection.findOne({ email });

    if (user) {
      // If the user exists, return the existing user data
      return new Response(JSON.stringify(user), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      // If the user doesn't exist, return 404 or similar
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch user" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req) {
  try {
    const userData = await req.json();
    console.log("Received userData:", userData); // Log received data

    if (!userData.email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const db = await connectToDb();
    const usersCollection = db.collection("users");

    // Insert new user data
    const result = await usersCollection.insertOne(userData);
    console.log("New user result:", result); // Log result of insertion

    return new Response(JSON.stringify(result.ops[0]), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating user:", error.message); // Log the error message
    return new Response(JSON.stringify({ error: "Failed to create user" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
