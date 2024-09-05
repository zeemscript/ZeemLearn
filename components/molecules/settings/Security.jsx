import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const Security = () => {
  return (
    <div>   {/* Account Security Section */}
        <Card>
          <CardHeader>
            <CardTitle>Account Security</CardTitle>
            <CardDescription>
              Update your password and enable two-factor authentication for
              better security.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4">
              <Input type="password" placeholder="Current Password" />
              <Input type="password" placeholder="New Password" />
              <Input type="password" placeholder="Confirm New Password" />
              <div className="flex items-center space-x-2">
                <Checkbox id="two-factor-auth" />
                <label
                  htmlFor="two-factor-auth"
                  className="text-sm font-medium leading-none"
                >
                  Enable Two-Factor Authentication.
                </label>
              </div>
            </form>
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button>Save</Button>
          </CardFooter>
        </Card>
      
      <div className="mt-10">
     <Card>
        <CardHeader>
          <CardTitle>Account Deactivation</CardTitle>
          <CardDescription>
            If you wish to deactivate or delete your account, please proceed
            with the options below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-red-600">
            Warning: Deactivating your account will disable access to all your
            data.
          </p>
          <Button className="bg-red-500 text-white mt-4">
            Deactivate Account
          </Button>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}

export default Security
