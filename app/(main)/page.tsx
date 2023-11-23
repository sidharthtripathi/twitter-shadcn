import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="grow">
      {/* creating tweete */}
      <div className="flex space-x-4">
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="grid w-full gap-2">
          <Textarea placeholder="Whats on your mind..." />
          <Button>POST</Button>
        </div>
      </div>
    </div>
  );
}
