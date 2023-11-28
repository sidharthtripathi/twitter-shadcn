import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Bell,
  Bookmark,
  CatIcon,
  HomeIcon,
  Mail,
  Search,
  User,
} from "lucide-react";
import React from "react";
import { CreateTweet } from "./page";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { Logout } from "@/components/Logout";
import Link from "next/link";
interface SidebarType extends React.HTMLAttributes<HTMLDivElement> {}

async function Sidebar({ className, style, ...props }: SidebarType) {
  const session = await getServerSession(authOptions);
  return (
    <div className={cn(className)}>
      <div className="flex w-full justify-around sm:block sm:space-y-3 ">
        <div className="hidden  justify-center space-x-2 p-2 sm:flex md:justify-start">
          <CatIcon size={32} />
        </div>
        <MenuItem title="Home" href="/">
          <HomeIcon />
        </MenuItem>
        <MenuItem title="Search">
          <Search />
        </MenuItem>
        <MenuItem title="Notification">
          <Bell />
        </MenuItem>
        <MenuItem title="Message">
          <Mail />
        </MenuItem>
        <MenuItem title="Bookmark">
          <Bookmark />
        </MenuItem>
        <MenuItem title="Profile" href={`/${session?.user.username}`}>
          <User />
        </MenuItem>
        <div className="hidden  justify-center space-x-2 p-2 sm:flex md:justify-start">
          <PostButton />
        </div>
      </div>

      <UserProfile />
    </div>
  );
}
interface MenuItemType extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  href?: string;
}
function MenuItem({ className, title, href, ...props }: MenuItemType) {
  return (
    <Link
      href={href || "#"}
      className={cn(
        "flex  justify-center space-x-2 p-2 md:justify-start",
        className,
      )}
    >
      {props.children}
      <h3 className={cn("hidden md:block", className)}>{title}</h3>
    </Link>
  );
}

function PostButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">POST</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tweet</DialogTitle>
          <DialogDescription>Click post when you are done</DialogDescription>
        </DialogHeader>

        {/* creating tweete */}
        <CreateTweet />
      </DialogContent>
    </Dialog>
  );
}

async function UserProfile() {
  const session = await getServerSession(authOptions);
  return (
    <div className="mb-4 hidden sm:block">
      <div className="flex items-center justify-between space-x-4">
        <Avatar>
          <AvatarImage src={session?.user?.image!} />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="hidden items-center space-x-2 md:flex">
          <div>
            <p className="text-sm font-medium leading-none">
              {session?.user?.name!}
            </p>
            <p className="text-sm text-muted-foreground">
              {session?.user?.email!}
            </p>
          </div>
          <Logout />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
