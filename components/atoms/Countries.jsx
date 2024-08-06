import { SelectItem } from "@/components/ui/select";
import countryList from "react-select-country-list";
import { useState, useMemo } from "react";

const CountrySelector = () => {
  const options = useMemo(() => countryList().getData(), []);

  return (
    <>
      {options.map((option) => (
        <SelectItem key={option.value} value={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </>
  );
};

export default CountrySelector;
