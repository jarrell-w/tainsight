import { User } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    
  const url = new URL(request.url);
  const email = url.searchParams.get('email')

  console.log("GET email:", email);
  try {
    connectToDb();
    const user = await User.findOne({ email: email });
    if (!user) {
      return NextResponse.json({});
    }
    console.log("Get user role function in GET req", user);
    return NextResponse.json({ user });
  } catch (e) {
    console.log("Error: ", e);
    throw new Error("Failed to get role.");
  }
};
