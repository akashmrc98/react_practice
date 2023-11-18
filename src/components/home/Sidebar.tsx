import { Box, Text, Input, Flex } from "@chakra-ui/react";

export default function Sidebar() {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      minW="18vw"
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
