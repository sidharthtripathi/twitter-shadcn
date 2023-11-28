import { authOptions } from "@/lib/authOptions";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const payload = await req.json();
  const newTweet = await db.tweet.create({
    data: {
      title: payload.title as string,
      authorId: session?.user?.id as string,
    },
  });
  return NextResponse.json(newTweet);
}
