import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

interface IPricingCard {
  icon: string;
  header: string;
  toSend: string;
  toReceive: string;
  sendAmount: string;
  receiveAmount: string;
  unit: string;
  comingSoon: boolean;
  more?: boolean;
  basis: string;
  width: string;
}
const PricingCard: FC<IPricingCard> = ({
  icon,
  header,
  toSend,
  toReceive,
  sendAmount,
  receiveAmount,
  unit,
  comingSoon,
  more,
  basis,
  width,
}) => {
  return (
    <Box
      p="40px"
      border="1px solid rgba(25, 126, 239, 0.4)"
      flexBasis={basis}
      width={width}
      borderRadius="12px"
      height="358px"
      bg="#fff"
    >
      <Flex
        bg="#197eef"
        align="center"
        justify="center"
        w="64px"
        h="64px"
        borderRadius="12px"
      >
        <Image src={icon} w="32px" h="32px" />
      </Flex>
      <Text mt="20px" mb="24px" fontSize="1.25rem" textAlign="left">
        {header}
      </Text>
      <Flex justify="space-between" mb="11px">
        <Text>{toSend}</Text>
        <Text>{toReceive}</Text>
      </Flex>
      <Flex justify="space-between" align="center">
        <Text>
          NGN {sendAmount}/{unit}
        </Text>
        {receiveAmount && (
          <Text>
            NGN {receiveAmount}/{unit}
          </Text>
        )}
        {comingSoon && (
          <Flex
            w="98px"
            h="26px"
            borderRadius="9999px"
            bg="#eff5fe"
            fontSize="0.75rem"
            justify="center"
            align="center"
            color="#197eef"
          >
            Coming Soon
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default PricingCard;
