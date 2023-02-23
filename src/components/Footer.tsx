import { Box, Flex, Link, Text, Image } from "@chakra-ui/react";
import { footerSection1 } from "../utils/constants";

const Footer = () => {
  return (
    <Box w="100%" pt="80px">
      <Flex
        w="100%"
        justify="space-between"
        flexWrap={{ base: "wrap", lg: "nowrap" }}
        rowGap="20px"
      >
        {footerSection1?.map((section, index) => (
          <Flex
            direction="column"
            key={index}
            textAlign="left"
            flexBasis={{ base: "49%", md: "30%", lg: "unset" }}
          >
            <Text
              color="#959fab"
              mb="16px"
              fontSize={{ base: "0.875rem", md: "1rem" }}
            >
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
                  fontSize={{ base: "0.875rem", md: "1rem" }}
                  fontFamily="DM Sans"
                  fontWeight="400"
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
        minH={{ base: "259.88", lg: "146px" }}
        borderTop="1px solid #48596d"
        borderBottom="1px solid #48596d"
        justify={{ base: "center", lg: "space-between" }}
        align="center"
        columnGap="85px"
        pl={{ md: "43px" }}
        // pr={{ md: "27px" }}
        direction={{ base: "column", lg: "row" }}
        fontFamily="DM Sans"
      >
        <Image src="/footerLogo.svg" maxW="227px" />
        <Flex mt={{ base: "12px", lg: "unset" }}>
          <Image
            src="/footerNGN.svg"
            display={{ base: "none", lg: "inline" }}
          />
          <Text
            color="#fff"
            ml={{ md: "16px" }}
            textAlign={{ base: "center", lg: "left" }}
          >
            142, Ahmadu Bello Way, Victoria Island, Lagos, Nigeria
          </Text>
        </Flex>
        <Flex mt={{ base: "20px", lg: "unset" }}>
          <Image
            src="/footerUSA.svg"
            display={{ base: "none", lg: "inline" }}
          />
          <Text
            color="#fff"
            ml="16px"
            textAlign={{ base: "center", lg: "left" }}
          >
            2055 Limestone Rd STE 200-C Wilmington, DE 19808
          </Text>
        </Flex>
      </Flex>
      <Flex
        h="64px"
        align="center"
        justify="center"
        color="#fff"
        opacity="0.5"
        fontSize={{ base: "0.875rem", md: "1rem" }}
      >
        {`Built with ❤️ at Sendchamp Inc. - © ${new Date().getFullYear()} | All rights reserved`}
      </Flex>
    </Box>
  );
};

export default Footer;
