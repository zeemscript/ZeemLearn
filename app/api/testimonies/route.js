import { connectToDb } from "@/lib/ConnectTodb";

export async function GET() {
  const db = await connectToDb();
    const collections = db.collection("testimonies");
    const data = await collections.find().toArray()
    return new Response(JSON.stringify(data), {
        
    })
}
