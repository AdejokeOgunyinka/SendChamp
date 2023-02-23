import { Flex, Heading, Text } from "@chakra-ui/react";

import CustomSelect from "./Select";
import { useGetCountries } from "../api/pricing";

const Header = () => {
  const { data: countries } = useGetCountries();
  console.log({ countries });

  return (
    <Flex width="100%" justify="center">
      <Flex
        maxW={{ base: "100%", lg: "50%" }}
        direction="column"
        paddingTop="96px"
        paddingBottom="96px"
      >
        <Heading
          fontSize={{ base: "2rem", md: "3rem" }}
          fontWeight={{ base: "500", md: "600" }}
          lineHeight={{ base: "35px", md: "52px" }}
          fontFamily="HafferXH-Medium"
        >
          Pricing for every business
        </Heading>
        <Text
          color="#1a202c"
          marginTop="32px"
          marginBottom="64px"
          fontSize="1.125rem"
          lineHeight={{ base: "24px", md: "28px" }}
          fontFamily="DM Sans"
          fontWeight="400"
        >
          No hidden fees or charges - simple & flexible pricing that fits with
          your business at any stage.
        </Text>
        <Flex
          direction={{ base: "column", md: "row" }}
          rowGap="8px"
          justify="center"
          align={{ base: "center", md: "unset" }}
        >
          <CustomSelect
            options={countries?.data
              ?.map((country: any) => country?.name?.official)
              ?.sort((a: string, b: string) => (a === b ? 0 : a < b ? -1 : 1))}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
