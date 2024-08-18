import { NextResponse } from "next/server";

export async function GET() {
  try {
 
    const response = await fetch("https://reqres.in/api/users/2");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

