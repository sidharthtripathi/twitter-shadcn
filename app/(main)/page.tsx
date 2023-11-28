import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import PostTweet from "@/components/PostTweet";

export default function Home() {
  return (
    <div className="grow overflow-y-scroll p-2 scrollbar-hide">
      {/* creating tweete */}

      <CreateTweet />

      {/* <Timeline /> */}
    </div>
  );
}

export async function CreateTweet() {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex space-x-4">
      <div>
        <Avatar>
          <AvatarImage src={session?.user?.image!} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <PostTweet />
    </div>
  );
}
