import { connectToDb } from "@/lib/ConnectTodb";
import { MongoClient, ObjectId } from "mongodb"; // Make sure ObjectId is imported

// GET method to check if ther is user stored before
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
      return new Response(JSON.stringify(user), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
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

// POST method using new Response
export async function POST(req) {
  try {
    const body = await req.json();
    const db = await connectToDb();
    const usersCollection = db.collection("users");
    await usersCollection.insertOne(body);

    return new Response(
      JSON.stringify({ message: "Data created successfully" }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error creating data:", error);
    return new Response(JSON.stringify({ error: "Failed to create data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// PUT method using new Response

export async function PUT(req) {
  try {
    const body = await req.json();
    const { id, username, profilepic } = body;

    const db = await connectToDb();
    const usersCollection = db.collection("users");

    const updateFields = {
      username,
    };

    // If profilepic is provided, add it to the update fields
    if (profilepic) {
      updateFields.profilepic = profilepic;
    }

    await usersCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateFields }
    );

    return new Response(
      JSON.stringify({ message: "Data updated successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error updating data:", error);
    return new Response(JSON.stringify({ error: "Failed to update data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}


// DELETE method using new Response
export async function DELETE(req) {
  try {
    const { id } = await req.json();
    const db = await connectToDb();
    const usersCollection = db.collection("users");
    await usersCollection.deleteOne({ _id: new MongoClient.ObjectId(id) });

    return new Response(
      JSON.stringify({ message: "Data deleted successfully" }),
      {
        status: 204,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error deleting data:", error);
    return new Response(JSON.stringify({ error: "Failed to delete data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
