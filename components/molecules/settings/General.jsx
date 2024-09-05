import React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const General = () => {
  return (
    <div className="grid gap-6">
      {/* User Profile Section */}
      <Card>
        <CardHeader>
          <CardTitle>Profile Settings</CardTitle>
          <CardDescription>
            Update your profile information such as your display name and email.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4">
            <Input placeholder="Display Name" />
            <Input type="email" placeholder="Email Address" />
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Save</Button>
        </CardFooter>
      </Card>

      {/* Privacy Settings Section */}
      <Card>
        <CardHeader>
          <CardTitle>Privacy Settings</CardTitle>
          <CardDescription>
            Manage your privacy preferences, including who can view your
            information.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="profile-visibility" defaultChecked />
              <label
                htmlFor="profile-visibility"
                className="text-sm font-medium leading-none"
              >
                Allow others to view my profile.
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="email-notifications" />
              <label
                htmlFor="email-notifications"
                className="text-sm font-medium leading-none"
              >
                Receive email notifications for updates.
              </label>
            </div>
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Save</Button>
        </CardFooter>
      </Card>

     
    </div>
  );
};

export default General;
