
import { MongoClient } from "mongodb";

export async function POST(request: Request) {
  try {
    const { name, email, clerkId } = await request.json();

    if (!name || !email || !clerkId) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const MONGODB_URI = "mongodb+srv://sonicgurtaj079:ImAs5bTy7Ig9rnJW@cluster0.h5unu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

    const client = new MongoClient(MONGODB_URI);
    await client.connect();


    console.log("Connected to MongoDB")

    const db = client.db("WWSolutions");
    const collection = db.collection("Users");

    const response = await collection.insertOne({ name, email, clerkId });
    console.log("User created successfully")
    client.close();

    return new Response(
      JSON.stringify({ data: response }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

