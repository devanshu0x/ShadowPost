import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";

export default function () {
  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center text-md">Register</CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to register
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 ">
            <div>
              <Label className="text-sm mb-1">Name</Label>
              <Input placeholder="alice" />
            </div>
            <div>
              <Label className="text-sm mb-1">Email Address</Label>
              <Input placeholder="alice@gmail.com" />
            </div>
            <div>
              <Label className="text-sm mb-1">Password</Label>
              <Input placeholder="123456" />
            </div>
            <div className="flex gap-2 py-2">
              <Button>Signup</Button>
              <Button variant="outline">Signin</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
