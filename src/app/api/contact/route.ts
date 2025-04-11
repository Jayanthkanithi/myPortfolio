import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  console.log("📩 Form data received:", body);

  if (!name || !email || !message) {
    console.log("❌ Missing fields");
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  const uri = process.env.MONGODB_URI!;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("✅ MongoDB connected");

    const db = client.db('portfolio');
    const collection = db.collection('contacts');

    const result = await collection.insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    console.log("✅ Insert result:", result);

    return NextResponse.json({ success: true, insertedId: result.insertedId });
  } catch (error) {
    console.error("❌ Error inserting to MongoDB:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  } finally {
    await client.close();
  }
}
