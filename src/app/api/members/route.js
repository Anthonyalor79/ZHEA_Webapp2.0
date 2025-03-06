import pool from "../../../utilis/db";
import { NextResponse } from "next/server";

export async function GET() {
  let client;
  try {
    client = await pool.connect();
    const result = await client.query("SELECT * FROM member");
    
    // Convert photo (if exists) to Base64 for frontend display
    const members = result.rows.map((member) => ({
      ...member,
      photo: member.photo ? Buffer.from(member.photo).toString("base64") : null,
    }));

    return NextResponse.json(members);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Failed to fetch members" }, { status: 500 });
  } finally {
    if (client) client.release(); // Ensure the connection is released
  }
}

export async function POST(req) {
  let client;
  try {
    const data = await req.json(); // Ensure `req.json()` is awaited properly
    client = await pool.connect();

    // Decode Base64 photo (if provided)
    const photoBuffer = data.photo ? Buffer.from(data.photo, "base64") : null;

    const query = `
      INSERT INTO member (firstname, lastname, email, title, major, dob, skills, photo)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING id
    `;

    const values = [
      data.firstName,
      data.lastName,
      data.email,
      data.title,
      data.major,
      data.dob,
      data.skills,
      photoBuffer,
    ];

    const result = await client.query(query, values);

    return NextResponse.json({ id: result.rows[0].id }, { status: 200 });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Failed to add member" }, { status: 500 });
  } finally {
    if (client) client.release(); // Ensure the connection is released
  }
}
