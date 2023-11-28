import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface Props {
  name: string;
  username: string;
  tweet: string;
  image: string;
}
function Tweet({ name, username, tweet, image }: Props) {
  return (
    <div className="flex  items-start space-x-3 py-2">
      <div className="p-2">
        <Avatar>
          <AvatarImage src={image} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <div className="space-x-2">
          <small className="text-sm font-medium leading-none">{name}</small>
          <small className="text-sm text-muted-foreground">@{username}</small>
        </div>
        <div>{tweet}</div>
      </div>
    </div>
  );
}

export default Tweet;
