import { User } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    
  const url = new URL(request.url);
  const email = url.searchParams.get('email')

  try {
    connectToDb();
    const user = await User.findOne({});
    if (!user) {
      return NextResponse.json({});
    }
    return NextResponse.json({});
  } catch (e) {
    console.log("Error: ", e);
    throw new Error("Failed to get role.");
  }
};