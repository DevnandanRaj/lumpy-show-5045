import React from "react";
import { ChakraProvider} from '@chakra-ui/react'

import Footer from "./Footer";
import Navbar from "./Navbar";

function Home() {
  return (
    <ChakraProvider>
      <div>
        <Navbar/>
        <Footer/>
      </div>
    </ChakraProvider>
  );
}
export default Home;
