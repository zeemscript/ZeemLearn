import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Support = () => {
  return (
    <div className="grid gap-6">
      {/* Contact Support Section */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
          <CardDescription>
            Reach out to our support team with any questions or issues you might
            have.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4">
            <Input type="email" placeholder="Your Email Address" />
            <Input type="text" placeholder="Subject" />
            <Textarea placeholder="Describe your issue or question" rows={6} />
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button className="w-full">Send</Button>
        </CardFooter>
      </Card>

      {/* View Support Tickets Section */}
      <Card>
        <CardHeader>
          <CardTitle>View Support Tickets</CardTitle>
          <CardDescription>
            Check the status of your support tickets and view past interactions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Here, users can view a list of their support tickets. This section
            will typically involve a table or list showing ticket numbers,
            subjects, and status. You might integrate it with a backend system
            to fetch and display real data.
          </p>
          {/* Example Placeholder */}
          <div className="border rounded-lg p-4">
            <p className="font-semibold">Ticket #1234: Issue with Login</p>
            <p>Status: Resolved</p>
            <p>Date: 2024-09-01</p>
          </div>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Refresh</Button>
        </CardFooter>
      </Card>

      {/* Support Preferences Section */}
      <Card>
        <CardHeader>
          <CardTitle>Support Preferences</CardTitle>
          <CardDescription>
            Customize your support experience, including preferred contact
            methods and notification settings.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-method" className="text-sm font-medium">
                Preferred Contact Method
              </label>
              <select id="contact-method" className="border rounded-md p-2">
                <option>Email</option>
                <option>Phone</option>
                <option>Live Chat</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="email-updates" />
              <label htmlFor="email-updates" className="text-sm font-medium">
                Receive email updates on ticket status.
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="sms-updates" />
              <label htmlFor="sms-updates" className="text-sm font-medium">
                Receive SMS updates on ticket status.
              </label>
            </div>
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Save Preferences</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Support;
