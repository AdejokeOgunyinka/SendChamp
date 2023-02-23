import { Flex, Heading, Text } from "@chakra-ui/react";

import CustomSelect from "./Select";
import { useGetCountries } from "../api/pricing";

const Header = () => {
  const { data: countries } = useGetCountries();
  console.log({ countries });

  return (
    <Flex width="100%" justify="center">
      <Flex
        maxW="50%"
        direction="column"
        paddingTop="96px"
        paddingBottom="96px"
      >
        <Heading fontSize="3rem">Pricing for every business</Heading>
        <Text
          color="#1a202c"
          marginTop="32px"
          marginBottom="64px"
          fontSize="1.125rem"
        >
          No hidden fees or charges - simple & flexible pricing that fits with
          your business at any stage.
        </Text>
        <Flex>
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
