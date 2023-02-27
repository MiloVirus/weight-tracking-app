import React from 'react'
import { Box, Button, IconButton, Flex, Text, SimpleGrid, Image } from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState, useEffect } from 'react'
import { AnimatePresence, motion} from "framer-motion"


const Dashboard = () => {

   const [onSwitch, setOnSwitch] = useState(false)
   

   const switchSelection = () => {
    setOnSwitch(!onSwitch);
  };

  const handleResize = () => {
    if (window.innerWidth < 720) {
    } else {
      setOnSwitch(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  

  return (
    <>
        <Flex bg={"#218380"} height={"100vh"} width={["30vw","35vw","35vw","25vw"]} display={["none", "none", "flex", "flex"]}>
            <Flex flexWrap={"wrap"} h="200" margin={"auto"} textAlign="left">
                <Box w="100%">
                    <Text color={"white"} fontWeight="bold" fontSize={28} paddingLeft="16" paddingRight="10">
                       <h2>Graphic</h2> 
                    </Text>
                </Box>
                <Box w="100%">
                    <Text color={"white"} fontWeight="bold" fontSize={28} paddingLeft="16" paddingRight="10">
                       <h2>Data Update</h2> 
                    </Text>
                </Box>
                <Box w="100%">
                    <Text color={"white"} fontWeight="bold" fontSize={28} paddingLeft="16" paddingRight="10">
                       <h2>Extra option</h2> 
                    </Text>
                </Box>
                
            </Flex>
        </Flex>
        <Flex bg={"#218380"} width={"100%"} display={["flex", "flex", "none", "none"]}>
        <IconButton
            aria-label="Open Menu"
            size="lg"
            icon={<HamburgerIcon/>}
            onClick={() => switchSelection()}
            alignSelf="center"
            marginTop={10}
            position="absolute"
          ></IconButton>
        </Flex>
        
          <AnimatePresence>
            {
              onSwitch && (
            <Flex as={motion.div} key={"modal"} bg={"#218380"} height={"100vh"} width={"100vw"} initial={{opacity:0}} animate={{opacity: 100}} exit={{opacity: 0}} transition={{duration : 0.5, ease: "easeIn"}} >
                <Flex flexWrap={"wrap"} h="200" margin={"auto"} textAlign="left">
                    <Box w="100%">
                        <Text color={"white"} fontWeight="bold" fontSize={28} paddingLeft="16" paddingRight="10">
                          <h2>Graphic</h2> 
                        </Text>
                    </Box>
                    <Box w="100%">
                        <Text color={"white"} fontWeight="bold" fontSize={28} paddingLeft="16" paddingRight="10">
                          <h2>Data Update</h2> 
                        </Text>
                    </Box>
                    <Box w="100%">
                        <Text color={"white"} fontWeight="bold" fontSize={28} paddingLeft="16" paddingRight="10">
                          <h2>Extra option</h2> 
                        </Text>
                    </Box>
                </Flex>
            </Flex>
              )
            }
            </AnimatePresence>
          
    </>
  )
}

export default Dashboard