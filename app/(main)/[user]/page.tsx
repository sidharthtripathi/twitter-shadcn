import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";

interface Props {
  params: { user: string };
}
async function page({ params: { user } }: Props) {
  console.log(user);
  const dbuser = await db.user.findUnique({
    where: {
      username: user,
    },
  });
  if (!dbuser) return notFound();
  return (
    <div className="grow overflow-y-scroll p-2 scrollbar-hide">
      {/* Profile banner */}
      <div className="border-b pb-3">
        <div className="relative h-36 w-full">
          <Image
            src="https://pbs.twimg.com/profile_banners/1100776978393649153/1678307056/1080x360"
            alt="Image"
            layout="fill"
            objectFit="cover"
            className="rounded-md object-cover"
          />
          <Avatar className="absolute bottom-0 h-24 w-24 translate-y-1/2">
            <AvatarImage src={dbuser?.image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="mt-16 flex justify-between">
          <div>
            <p className="scroll-m-20 text-xl font-semibold tracking-tight">
              {dbuser?.name}
            </p>
            <p className="text-sm text-muted-foreground">{dbuser?.email}</p>
          </div>
          <Button>Follow</Button>
        </div>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          {dbuser?.about}
        </blockquote>
        <div className="mt-3 flex space-x-4">
          <div className="space-x-1">
            <span className="font-bold">101</span>
            <span className="text-sm font-light text-gray-300">followers</span>
          </div>
          <div className="space-x-1">
            <span className="font-bold">101</span>
            <span className="text-sm font-light text-gray-300">followings</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
