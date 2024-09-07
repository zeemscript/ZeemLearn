import { auth } from "@/lib/firebaseAdmin";

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Ensure it's a GET request
    try {
      const listUsersResult = await auth.listUsers();
      const totalUsers = listUsersResult.users.length;

      // Send the response as JSON with status 200
      res.status(200).json({ totalUsers });
    } catch (error) {
      console.error("Error fetching users:", error);

      // Return the error message in the response with status 500
      res.status(500).json({ error: "Failed to fetch users" });
    }
  } else {
    // Return a 405 error for non-GET methods
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
