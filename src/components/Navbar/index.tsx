import {
  Flex,
  Image,
  Link,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { navItems } from "../../utils/constants";

import CustomButton from "../Button";

const Navbar = () => {
  return (
    <Flex
      align="center"
      justify={{ base: "space-between", lg: "unset" }}
      height={{ base: "80px", md: "88px" }}
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
            <>
              {index === navItems?.length - 1 ? (
                <Link
                  fontFamily="DM Sans"
                  fontWeight="400"
                  _hover={{
                    textDecoration: "none",
                    color: "#000",
                  }}
                  href="https://www.sendchamp.com/pricing"
                >
                  {item?.name}
                </Link>
              ) : (
                <Popover key={index} trigger="hover">
                  <PopoverTrigger>
                    <Text
                      cursor="pointer"
                      fontFamily="DM Sans"
                      fontWeight="400"
                    >
                      {item.name}
                    </Text>
                  </PopoverTrigger>
                  <PopoverContent width="272px" borderRadius="12px">
                    <PopoverBody
                      display="flex"
                      flexDir="column"
                      textAlign="left"
                      px="24px"
                      py="32px"
                      rowGap="20px"
                    >
                      <Text textAlign="left" color="#9da8bb" fontSize="13px">
                        {item?.name?.toUpperCase()}
                      </Text>
                      {item.popoverContent?.map((content: any, index) => (
                        <Flex align="center" columnGap="11px">
                          {content?.icon && (
                            <Image
                              src={content?.icon}
                              width="24px"
                              height="24px"
                            />
                          )}
                          <Link
                            key={index}
                            // fontFamily="DM Sans"
                            fontWeight="400"
                            _hover={{
                              textDecoration: "none",
                              color: "#000",
                            }}
                            href={content?.link}
                            fontSize="13px"
                            color="#1a202c"
                            letterSpacing="0.08em"
                            lineHeight="18px"
                          >
                            {content?.name}
                          </Link>
                        </Flex>
                      ))}
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              )}
            </>
          ))}
        </Flex>
        <Flex align="center">
          <Link
            mr="20px"
            fontFamily="DM Sans"
            fontWeight="400"
            _hover={{
              textDecoration: "none",
              color: "#000",
            }}
            href="https://my.sendchamp.com/login"
          >
            Login
          </Link>
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
      <Flex
        display={{ base: "inline-block", lg: "none" }}
        width="30px"
        height="30px"
        align="center"
        pt="4px"
      >
        <Image src={"/menuIcon.svg"} width="20px" height="20px" />
      </Flex>
    </Flex>
  );
};

export default Navbar;
