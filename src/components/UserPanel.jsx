import React from 'react'
import { Flex, Box, Button, Text } from '@chakra-ui/react'
import { useState } from 'react'
import Graph from './Graph'


const UserPanel = () => {

  const [name, setName] = useState("Camilo")
  const [date, setDate] = useState("Feb 03, 2023")
  const [userCurrentWeigth, setUserCurrentWeight] = useState("70")
  const [userBmi, setUserBmi] = useState("24.5")
  
  return (
   <>
    <Box width={["100%","100%","65vw","75vw"]} id="elbox" >
      <Flex justifyContent={"space-around"} borderBottom="1px" borderBottomColor='gray.200' id="cidiasd">
        <Box p={10}>
          <Button>
            Logout
          </Button>
        </Box>
        <Box p={5}>
          <Text fontSize={40} fontWeight="bold">
            Hello, {name}
          </Text>
          <Text fontSize={20} fontWeight="light">
            {date}
          </Text>
        </Box>
      </Flex>
    </Box>
    <Box marginTop={20} width={["100%","100vw","65vw","75vw"]}>
      <Flex justifyContent={"space-around"} id="cidiasd2" flexWrap={"wrap"}>
        <Box bgColor={"#EDF2F7"} borderRadius={30} p={5}>
            <Box>
              <Text fontSize={["1.2em","1.4em","1.6em","1.6em"]} fontWeight="bold">
              Current weight
              </Text>
              <Flex alignItems={"center"} gap={6}>
                <Text fontSize={["1.2em","1.4em","1.6em","1.6em"]} fontWeight="bold">
                {userCurrentWeigth}Kg
                </Text>
                <Box>
                  2%
                </Box>
              </Flex>
              
            </Box>
            
        </Box>
        <Box bgColor={"#EDF2F7"} borderRadius={30} p={5}>
          <Text fontSize={["1.2em","1.4em","1.6em","1.6em"]} fontWeight="bold">
            Current BMI
          </Text>
          <Text fontSize={["1.2em","1.4em","1.6em","1.6em"]} fontWeight="bold">
            {userBmi} BMI
          </Text>
        </Box>
      </Flex>
    </Box>
    <Box marginTop={20}>
     <Graph/>
    </Box>
   </>
  )
}

export default UserPanel