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
    <Flex
      align="center"
      justify={{ base: "space-between", lg: "unset" }}
      height="88px"
      width="100%"
    >
      <Image src="/logo.svg" mr="80px" maxW={{ base: "157px" }} />
      <Flex
        justify="space-between"
        width="100%"
        display={{ base: "none", lg: "inline-flex" }}
      >
        <Flex columnGap="48px" align="center">
          {navItems?.map((item, index) => (
            <Text
              cursor="pointer"
              key={index}
              fontFamily="DM Sans"
              fontWeight="400"
            >
              {item}
            </Text>
          ))}
        </Flex>
        <Flex align="center">
          <Text mr="20px" fontFamily="DM Sans" fontWeight="400">
            Login
          </Text>
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
      <Flex display={{ base: "inline-block", lg: "none" }}>
        <Image src={"/menuIcon.svg"} />
      </Flex>
    </Flex>
  );
};

export default Navbar;
