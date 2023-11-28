import { cn } from "@/lib/utils";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/providers/themeProvider";
import { db } from "@/lib/db";

interface AsideType extends React.HTMLAttributes<HTMLDivElement> {}
async function Aside({ className, ...props }: AsideType) {
  const users = await db.user.findMany({
    where: {
      name: { not: "hulu" },
    },
    orderBy: {
      createdAt: "asc",
    },
    take: 3,
  });
  return (
    <div className={cn(className, "space-y-3 ")}>
      <div className="flex">
        <Input placeholder="search..." />
        <ModeToggle />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Subscribe to premium</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Subscribe to unlock new features and if eligible, receive a share of
            ads revenue.
          </CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Subscribe</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Whom to Follow</CardTitle>
          <CardDescription>
            Get Tweets of your friends on your homescreen
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {users.map((user) => (
            <UserProfile
              name={user.name}
              email={user.email}
              image={user.image}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

interface UserType {
  name: string;
  email: string;
  image: string;
}
function UserProfile(user: UserType) {
  return (
    <HoverCard>
      <div className="flex justify-between">
        <HoverCardTrigger>
          <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={user.image} />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium leading-none">{user.name}</p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
            </div>
          </div>
        </HoverCardTrigger>
        <Button>Follow</Button>
      </div>

      <HoverCardContent
        side="top"
        sideOffset={20}
        className="shadow-lg shadow-gray-800"
      >
        {/* hover card */}
        <div>
          <div className="flex items-center justify-between">
            <Avatar>
              <AvatarImage src={user.image} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Button>Follow</Button>
          </div>

          <div className="mt-4">
            <div className="text-md font-medium leading-none">{user.name}</div>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
          <div>
            <blockquote className="mt-6 border-l-2 pl-6 italic">
              After all,he said, everyone enjoys a good joke, so it is only fair
              that they should pay for the privilege.
            </blockquote>
          </div>
          <div className="mt-3 flex justify-between">
            <div className="space-x-1">
              <span className="font-bold">101</span>
              <span className="text-sm font-light text-gray-300">
                followers
              </span>
            </div>
            <div className="space-x-1">
              <span className="font-bold">101</span>
              <span className="text-sm font-light text-gray-300">
                followings
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default Aside;
