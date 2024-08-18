"use client";
import React from "react";
import countryList from "react-select-country-list";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

const CountrySelector = ({ onCountryChange }) => {
  const options = countryList().getData();

  return (
    <Select onValueChange={onCountryChange}>
      <SelectTrigger>
        <SelectValue placeholder="Select your country" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.label}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CountrySelector;
