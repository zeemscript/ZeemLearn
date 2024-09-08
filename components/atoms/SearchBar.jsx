"use client";
import React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
const SearchBar = () => {
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    console.log(search);
  };
  return (
    <div className="flex items-center space-x-2">
      <Input
        type="search"
        placeholder="Search"
        value={search}
        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button
        className="bg-gray-100 rounded-full p-2 hover:bg-gray-200"
        onClick={handleSearch}
      >
        <Search className="h-5 w-5" />
      </button>
    </div>
  );
};
export default SearchBar;