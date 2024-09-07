import React from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CountrySelector from '@/components/atoms/Countries';
import { Select } from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const Advanced = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Language and Region</CardTitle>
          <CardDescription>
            Set your preferred language and region for the application.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="language" className="text-sm font-medium">
                Preferred Language
              </label>
              <select id="language" className="border rounded-md p-2">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="region" className="text-sm font-medium">
                Preferred Region
              </label>
              <Select id="region" className="border rounded-md p-2">
                <CountrySelector />
              </Select>
            </div>
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Save Preferences</Button>
        </CardFooter>
      </Card>
      <div className="mt-10">
        <Card>
          <CardHeader>
            <CardTitle>API Access</CardTitle>
            <CardDescription>
              Manage your API keys and access settings.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4">
              <Input placeholder="Generate New API Key" />
              <Button>Generate API Key</Button>
              <div className="mt-4">
                <p className="font-semibold">Existing API Keys:</p>
                {/* List existing keys */}
                <div className="border rounded-lg p-4 mt-2">
                  <p className="font-semibold">API Key: xxxxxxx</p>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button>Save API Settings</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Advanced
