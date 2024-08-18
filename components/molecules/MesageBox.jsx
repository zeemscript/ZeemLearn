"use client";
import { Mic, Paperclip, Settings } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import img from "@/public/images/user1.jpg";
import { Send } from "lucide-react";

export default function MessageBox() {
  return (
    <TooltipProvider>
      <div className="h-screen w-full p-4">
        <div className="flex flex-col h-full">
          <header className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              {/* <SquareUser className="size-5" /> */}
              <span className="text-lg font-bold">John Doe</span>
            </div>
            <Button variant="ghost" size="icon">
              <Settings className="size-4" />
            </Button>
          </header>
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <Image
                  src={img}
                  alt="user image"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <span className="text-lg font-bold">John Doe</span>
                  <span className="text-sm text-muted">10:00 AM</span>
                </div>
              </div>
              <div className="bg-background p-3 rounded-lg">
                <p>Hello, how are you?</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <Image
                  src={img}
                  alt="user image"
                  width={30}
                  height={30}
                  className="rounded-full"
                />{" "}
                <div className="flex-1">
                  <span className="text-lg font-bold">You</span>
                  <span className="text-sm text-muted">10:05 AM</span>
                </div>
              </div>
              <div className="bg-background p-3 rounded-lg self-end">
                <p>Im good, thanks!</p>
              </div>
            </div>
          </div>
          <form className="flex items-center p-4 gap-2 bg-blue-400 rounded-md">
            <div className="flex-1 relative">
              <Textarea
                id="message"
                rows={2}
                cols={2}
                placeholder="Type your message here..."
                className="resize-none border-0 p-3 shadow-none focus-visible:ring-0 w-full"
              />
              <div className="absolute bottom-3 right-3 flex gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Paperclip className="size-4" />
                      <span className="sr-only">Attach file</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">Attach File</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Mic className="size-4" />
                      <span className="sr-only">Use Microphone</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">Use Microphone</TooltipContent>
                </Tooltip>
                <div className="flex justify-center items-center">
                  <Send />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </TooltipProvider>
  );
}
