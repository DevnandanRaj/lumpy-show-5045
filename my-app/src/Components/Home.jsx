import React from "react";
import { ChakraProvider} from '@chakra-ui/react'
import { Navbar } from "./Navbar";

function Home() {
  return (
    <ChakraProvider>
      <div>
        <Navbar/>
      </div>
    </ChakraProvider>
  );
}
export default Home;
