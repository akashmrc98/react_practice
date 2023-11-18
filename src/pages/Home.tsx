import { Box, Flex } from "@chakra-ui/react";

import Navbar from "../components/home/Navbar";
import Video from "../components/home/Video";

import videos from "../assets/videos.json";
import Sidebar from "../components/home/Sidebar";

export default function Home() {
  return (
    <Box minH="100vh" minW="100vw" bg="black">
      <Navbar />
      <Flex>
        <Sidebar />
        <Box
          py={8}
          px={8}
          display={"grid"}
          gridTemplateColumns={{
            base: "1fr",
            lg: "1fr 1fr",
            xl: "1fr 1fr 1fr",
            "2xl": "1fr 1fr 1fr",
          }}
          rowGap={"2rem"}
          columnGap={"2rem"}
        >
          {videos.map((video, index) => (
            <Video key={index} {...video} />
          ))}
          {videos.map((video, index) => (
            <Video key={index} {...video} />
          ))}
          {videos.map((video, index) => (
            <Video key={index} {...video} />
          ))}
          {videos.map((video, index) => (
            <Video key={index} {...video} />
          ))}
        </Box>
      </Flex>
    </Box>
  );
}
