import { ModeToggle } from "@/components/providers/themeProvider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
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
interface SidebarType extends React.HTMLAttributes<HTMLDivElement> {}

function Sidebar({ className, style, ...props }: SidebarType) {
  return (
    <div className={cn(className)}>
      <div className="hidden justify-center sm:flex md:justify-start">
        <CatIcon size={32} />
      </div>
      <div className="flex  justify-center rounded-lg p-2  hover:bg-[#27272A] sm:py-3 sm:pl-2 md:justify-start md:space-x-4">
        <HomeIcon />
        <h3 className="hidden text-xl font-bold md:block">Home</h3>
      </div>
      <div className="flex   justify-center rounded-lg p-2 hover:bg-[#27272A] sm:py-3 sm:pl-2 md:justify-start md:space-x-4">
        <Search />
        <h3 className="hidden text-xl font-bold md:block">Search</h3>
      </div>
      <div className="flex   justify-center rounded-lg p-2 hover:bg-[#27272A] sm:py-3 sm:pl-2 md:justify-start md:space-x-4">
        <Bell />
        <h3 className="hidden text-xl font-bold md:block">Notifications</h3>
      </div>
      <div className="flex   justify-center rounded-lg p-2 hover:bg-[#27272A] sm:py-3 sm:pl-2 md:justify-start md:space-x-4">
        <Mail />
        <h3 className="hidden text-xl font-bold md:block">Message</h3>
      </div>
      <div className="flex   justify-center rounded-lg p-2 hover:bg-[#27272A] sm:py-3 sm:pl-2 md:justify-start md:space-x-4">
        <Bookmark />
        <h3 className="hidden text-xl font-bold md:block">Bookmark</h3>
      </div>
      <div className="flex   justify-center rounded-lg p-2 hover:bg-[#27272A] sm:py-3 sm:pl-2 md:justify-start md:space-x-4">
        <User />
        <h3 className="hidden text-xl font-bold md:block">Profile</h3>
      </div>
      <div className="hidden sm:block">
        <PostButton />
      </div>
    </div>
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
        <div className="flex space-x-3">
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="grid w-full gap-2">
            <Textarea placeholder="What's on your mind.." />
            <Button>POST</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default Sidebar;
