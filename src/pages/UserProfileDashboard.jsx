import React from 'react'
import { Flex, Box, Button, Text } from '@chakra-ui/react'
import Dashboard from '../components/Dashboard';
import UserPanel from '../components/UserPanel';

const UserProfileDashboard = () => {
  return (
    <>
    <Flex>
      <Box>
        <Dashboard/>
      </Box>
      <Box>
        <UserPanel/>
      </Box>
    </Flex>
    </>
  )
}

export default UserProfileDashboard