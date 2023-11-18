import { Box, Text, Input, Flex } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box
      flexDir={"column"}
      display={"flex"}
      justifyContent={"space-between"}
      minH="10vh"
      bg="gray.500"
    >
      <Text>AginaTube</Text>
      <Input></Input>
      <Flex>
        <Box>1</Box>
        <Box>1</Box>
        <Box>1</Box>
        <Box>1</Box>
        <Box>1</Box>
      </Flex>
    </Box>
  );
}
