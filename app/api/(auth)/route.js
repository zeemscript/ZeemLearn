import { db } from "@/lib/firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";


// get request to database
export async function GET() {
  try {
    const usersCollection = collection(db, "users");
    const userSnapshot = await getDocs(usersCollection);
    const users = userSnapshot.docs.map((doc) => doc.data());

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


// post request to database
export async function POST(req) {
  try {
    const body = await req.json();
    const usersCollection = collection(db, "users");
    await addDoc(usersCollection, body);

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



// put request to database
export async function PUT(req) {
  try {
    
  } catch (e) {
    console.log(error, e)
  }
}




// patch request to database
export async function PATCH(req) {
  try {
    
  } catch (e) {
    console.log(error, e)
  }
}


// delete request to database
export async function DELETE(req) {
  try {
    const { id } = await req.json(); // Expecting ID in the request body
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);

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
