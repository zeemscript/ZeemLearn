"use client";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Search({ searchTerm, setSearchTerm }) {
  const [open, setOpen] = React.useState(false);

  const frameworks = [
    { value: "web-development", label: "Web Development Bootcamp" },
    { value: "javascript", label: "JavaScript Mastery" },
    { value: "react", label: "React for Beginners" },
  ];

  const handleSelect = (selectedValue) => {
    setSearchTerm(selectedValue);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen} className="w-full">
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {searchTerm || "Search for a course..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput
            placeholder="Search course..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSelect(e.target.value);
              }
            }}
          />
          <CommandList>
            <CommandEmpty>No course found.</CommandEmpty>
            <CommandGroup>
              {frameworks
                .filter((framework) =>
                  framework.label
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                )
                .map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.label}
                    onSelect={() => handleSelect(framework.label)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        searchTerm === framework.label
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {framework.label}
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
