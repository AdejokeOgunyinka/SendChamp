import { Box, Flex, Link, Text, Image } from "@chakra-ui/react";
import { footerSection1 } from "../utils/constants";

const Footer = () => {
  return (
    <Box w="100%" pt="80px">
      <Flex w="100%" justify="space-between">
        {footerSection1?.map((section, index) => (
          <Flex direction="column" key={index} textAlign="left">
            <Text color="#959fab" mb="16px">
              {section?.header}
            </Text>
            <Flex rowGap="8px" textAlign="left" direction="column">
              {section?.content?.map((inner, index) => (
                <Link
                  href={inner?.link}
                  key={index}
                  color="#fff"
                  _hover={{
                    textDecoration: "none",
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  {inner?.name}
                </Link>
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
      <Flex
        mt="64px"
        w="100%"
        minH="146px"
        borderTop="1px solid #48596d"
        borderBottom="1px solid #48596d"
        justify="space-between"
        align="center"
        columnGap="85px"
        pl="43px"
        pr="27px"
      >
        <Image src="/footerLogo.svg" maxW="227px" />
        <Flex align="center">
          <Image src="/footerNGN.svg" />
          <Text color="#fff" ml="16px" textAlign="left">
            142, Ahmadu Bello Way, Victoria Island, Lagos, Nigeria
          </Text>
        </Flex>
        <Flex align="center">
          <Image src="/footerUSA.svg" />
          <Text color="#fff" ml="16px" textAlign="left">
            2055 Limestone Rd STE 200-C Wilmington, DE 19808
          </Text>
        </Flex>
      </Flex>
      <Flex h="64px" align="center" justify="center" color="#fff" opacity="0.5">
        {`Built with ❤️ at Sendchamp Inc. - © ${new Date().getFullYear()} | All rights reserved`}
      </Flex>
    </Box>
  );
};

export default Footer;
