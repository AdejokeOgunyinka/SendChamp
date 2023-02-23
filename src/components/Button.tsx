import { Button } from "@chakra-ui/react";
import React, { FC } from "react";

interface IButton {
  label: string;
  onClick?: () => void;
  width: number;
  height: number;
  fontSize?: string;
  borderRadius?: number;
  solid?: boolean;
}

const CustomButton: FC<IButton> = ({
  label,
  width,
  height,
  fontSize,
  borderRadius,
  onClick,
  solid,
}) => {
  return (
    <Button
      width={`${width}px`}
      height={`${height}px`}
      onClick={onClick}
      bg={solid ? "#197eef" : "#fff"}
      border={solid ? "unset" : "1px solid #595959"}
      color={solid ? "#fff" : "#000"}
      _hover={{
        bg: solid ? "#0555a8" : "#fff",
        color: solid ? "#fff" : "#595959",
        border: solid ? "unset" : "1px solid #595959",
      }}
      fontSize={fontSize}
      //   boxShadow="rgba(66, 153, 225, 0.6) 0px 0px 0px 3px"
      borderRadius={borderRadius ? `${borderRadius}px` : "8px"}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
