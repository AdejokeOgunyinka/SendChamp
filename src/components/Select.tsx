import { Select } from "@chakra-ui/react";
import React, { FC } from "react";

interface ISelect {
  options: string[];
}
const CustomSelect: FC<ISelect> = ({ options }) => {
  return (
    <Select
      border="1px solid rgba(25, 126, 239, 0.4)"
      _focusVisible={{ outline: "-webkit-focus-ring-color auto 1px" }}
      height="64px"
      borderRadius="12px"
      bg="#fff"
      w={{ base: "282px", md: "unset" }}
    >
      {options?.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

export default CustomSelect;
