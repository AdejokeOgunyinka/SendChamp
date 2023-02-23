import { Flex, Image, Text } from "@chakra-ui/react";

import CustomButton from "../Button";

const Navbar = () => {
  const navItems = [
    "Products",
    "Developers",
    "Company",
    "Use Cases",
    "Pricing",
  ];

  return (
    <Flex align="center" height="88px" width="100%">
      <Image src="/logo.svg" mr="80px" />
      <Flex justify="space-between" width="100%">
        <Flex columnGap="48px" align="center">
          {navItems?.map((item, index) => (
            <Text cursor="pointer" key={index}>
              {item}
            </Text>
          ))}
        </Flex>
        <Flex align="center">
          <Text mr="20px">Login</Text>
          <CustomButton
            label="Get Started"
            solid
            height={40}
            width={123}
            fontSize="0.875rem"
            borderRadius={4}
          />
          <Text ml="12px" fontSize="1.7em" lineHeight="1em">
            🇳🇬
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
