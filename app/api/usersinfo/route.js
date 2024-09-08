import { connectToDb } from "@/lib/ConnectTodb";
import { MongoClient, ObjectId } from "mongodb"; // Make sure ObjectId is imported


export async function GET(req) {
  const body = await req.json();
  const db = await connectToDb();
  const collection = db.collection("users");
  const user = await collection.findOne({ email: body.email });
  if (user) {
    return new Response(JSON.stringify(user), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response(
      JSON.stringify({ status: 404, body: { message: "User not found" } }),
      {
        status: 404,
        headers: { "Content-Type": "application/json" },
      }
    );
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



// PATCH method using new Response
export async function PATCH(req) {
  try {
    const { email, username } = await req.json();
    const db = await connectToDb();
    const usersCollection = db.collection("users");
    const result = await usersCollection.updateOne(
      { email }, 
      { $set: { username } } 
    );

    if (result.matchedCount === 0) {
      return new Response(
        JSON.stringify({ error: "User not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ message: "Data patched successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error patching data:", error);
    return new Response(JSON.stringify({ error: "Failed to patch data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}




// DELETE method using new Response
export async function DELETE(req) {
  try {
    const { email } = await req.json(); // Extract email from request body

    const db = await connectToDb();
    const usersCollection = db.collection("users");

    // Delete the user by email
    const result = await usersCollection.deleteOne({ email });

    // Check if the deletion was successful
    if (result.deletedCount === 0) {
      return new Response(
        JSON.stringify({ error: "User not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ message: "Data deleted successfully" }),
      {
        status: 200,
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
