import { Flex, Text } from "@chakra-ui/react";
import { CustomButton, PricingCard } from "../components";
import { pricingData } from "../utils/constants";

export const Pricing1 = () => {
  return (
    <Flex
      minH="746px"
      px={{ base: "32px", md: "128px" }}
      pb="128px"
      flexWrap="wrap"
      w="100%"
      columnGap="33px"
      rowGap="33px"
      mt={{ base: "41px", lg: "-65px" }}
    >
      {pricingData?.map((data, index) => (
        <PricingCard
          key={index}
          icon={data?.icon}
          header={data?.header}
          toSend={data?.toSend}
          toReceive={data?.toReceive}
          sendAmount={data?.sendAmount}
          receiveAmount={data?.receiveAmount}
          unit={data?.unit}
          comingSoon={data?.comingSoon}
          more={data?.more}
        />
      ))}
    </Flex>
  );
};

export const Pricing2 = () => {
  return (
    <Flex
      minH={{ base: "380px", md: "512px" }}
      bg="#edf5fe"
      width="100%"
      paddingTop={{ base: "64px", md: "152px" }}
      paddingBottom={{ base: "80px", md: "128px" }}
      justify="center"
      px={{ base: "32px", md: "unset" }}
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        maxW={{ base: "100%", md: "50%" }}
      >
        <Text
          mb="24px"
          fontSize={{ base: "1.5rem", md: "2rem" }}
          fontWeight="600"
        >
          Sendchamp for Startups
        </Text>
        <Text
          mb="48px"
          lineHeight={{ base: "24px", md: "28px" }}
          fontSize={{ base: "1rem", md: "1.125rem" }}
        >
          Apply for $1,000 in credits, if you are a startup that is less than 3
          years old with less than $500k in total funding.
        </Text>
        <CustomButton label="Apply now" height={56} width={125.8} solid />
      </Flex>
    </Flex>
  );
};

export const Pricing3 = () => {
  return (
    <Flex
      minH={{ base: "560px", md: "588px" }}
      paddingTop={{ base: "64px", md: "152px" }}
      paddingBottom={{ base: "80px", md: "128px" }}
      width="100%"
      justify="center"
      px={{ base: "32px", md: "unset" }}
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        maxW={{ base: "100%", md: "50%" }}
      >
        <Text
          mb="24px"
          fontSize={{ base: "1.5rem", md: "2rem" }}
          fontWeight="600"
        >
          Start building better communication experience with Sendchamp
        </Text>
        <Text
          mb="48px"
          lineHeight={{ base: "24px", md: "28px" }}
          fontSize={{ base: "1rem", md: "1.125rem" }}
        >
          Access a platform that is modernizing communications and making it
          possible for your customers to communicate with your business the same
          way they do with their friends and family.
        </Text>
        <Flex columnGap="20px">
          <CustomButton
            label="Start for free"
            height={56}
            width={125.8}
            solid
          />
          <CustomButton
            label="Talk To Sales"
            height={56}
            width={125.8}
            solid={false}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
