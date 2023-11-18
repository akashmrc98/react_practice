import { Box, Image, Text, Flex } from "@chakra-ui/react";

interface VideoProps {
  thumbnailUrl: string;
  title: string;
  author: string;
  views: string;
}

export default function Video(props: VideoProps) {
  return (
    <Box borderRadius={"xl"}>
      <Image borderRadius={"xl"} maxW="320px" src={props.thumbnailUrl} />
      <Box>
        <Text fontSize={"sm"} fontWeight={"bold"} color="white">
          {props.title}
        </Text>
        <Flex columnGap={"1rem"}>
          <Text fontSize={"xx-small"} fontWeight={"bold"} color="gray.400">
            {props.author}
          </Text>
          <Text fontSize={"xx-small"} color="gray.400">
            {props.views}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
