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
}) => {
  return (
    <Box
      px={{ base: "20px", md: "40px" }}
      py="40px"
      border="1px solid rgba(25, 126, 239, 0.4)"
      flexBasis={{ base: "100%", md: "45%", xl: "31.4%" }}
      width={{ base: "309px", md: "45%", xl: "33%" }}
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
      <Text
        mt="20px"
        mb="24px"
        fontSize={{ base: "1.125rem", md: "1.25rem" }}
        fontWeight="600"
        textAlign="left"
        fontFamily="HafferXH-SemiBold"
      >
        {header}
      </Text>
      <Flex
        justify="space-between"
        mb="11px"
        fontSize={{ base: "0.875rem", md: "1rem" }}
        fontFamily="DM Sans"
        fontWeight="400"
      >
        <Text>{toSend}</Text>
        <Text>{toReceive}</Text>
      </Flex>
      <Flex
        justify="space-between"
        align="center"
        fontSize={{ base: "0.875rem", md: "1rem" }}
        fontFamily="DM Sans"
        fontWeight="400"
      >
        <Text as={Flex}>
          <b style={{ fontWeight: "700" }}>NGN {sendAmount}</b>/{unit}
        </Text>
        {receiveAmount && (
          <Text as={Flex}>
            <b style={{ fontWeight: "700" }}>NGN {receiveAmount}</b>/{unit}
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
            fontFamily="DM Sans"
          >
            Coming Soon
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default PricingCard;
