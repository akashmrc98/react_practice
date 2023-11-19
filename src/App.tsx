import { Box, ChakraProvider, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface DataInterface {
  id: string;
  title: string;
}

function App() {
  const [data, setData] = useState<DataInterface[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <ChakraProvider>
      <Box>
        {data.map((d, i) => (
          <Box key={i}>
            <Text>{d.id}</Text>
            <Text>{d.title}</Text>
          </Box>
        ))}
      </Box>
    </ChakraProvider>
  );
}
export default App;
