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
  Settings2,
  User,
} from "lucide-react";
import React from "react";
interface SidebarType extends React.HTMLAttributes<HTMLDivElement> {}

function Sidebar({ className, style, ...props }: SidebarType) {
  return (
    <div className={cn(className)}>
      <div className="flex w-full justify-around sm:block ">
        <div className="hidden  justify-center space-x-2 p-2 sm:flex md:justify-start">
          <CatIcon size={32} />
        </div>
        <div className="flex  justify-center space-x-2 p-2 md:justify-start">
          <HomeIcon />
          <h3 className="hidden md:block">Home</h3>
        </div>
        <div className="flex  justify-center space-x-2 p-2 md:justify-start   ">
          <Search />
          <h3 className="hidden md:block">Search</h3>
        </div>
        <div className="flex  justify-center space-x-2 p-2 md:justify-start   ">
          <Bell />
          <h3 className="hidden md:block">Notifications</h3>
        </div>
        <div className="flex  justify-center space-x-2 p-2 md:justify-start   ">
          <Mail />
          <h3 className="hidden md:block">Message</h3>
        </div>
        <div className="flex  justify-center space-x-2 p-2 md:justify-start   ">
          <Bookmark />
          <h3 className="hidden md:block">Bookmark</h3>
        </div>
        <div className=" flex  justify-center space-x-2 p-2 md:justify-start  ">
          <User />
          <h3 className="hidden md:block">Profile</h3>
        </div>
        <div className="hidden  justify-center space-x-2 p-2 sm:flex md:justify-start">
          <PostButton />
        </div>
      </div>

      <div className="hidden sm:block">
        <div className="flex items-center justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="hidden items-center space-x-1 md:flex">
            <div>
              <p className="text-sm font-medium leading-none">Sofia Davis</p>
              <p className="text-sm text-muted-foreground">m@example.com</p>
            </div>
            <Settings2 />
          </div>
        </div>
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
