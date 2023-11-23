import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DemoTeamMembers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Whom to Follow</CardTitle>
        <CardDescription>
          Get Tweets of your friends on your homescreen
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6"></CardContent>
    </Card>
  );
}
