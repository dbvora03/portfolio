import React from 'react'
import { Text, Flex, Box, Avatar } from '@chakra-ui/react'
import CurrentWork from './CurrentWork'

const HomePageTitle = () => {
  return (
    <Flex justifyContent="space-between" alignItems={"start"} gap={40}>
      <Flex flexDirection="column" maxW={"100%"}>
        <Text color="black" fontWeight="600" fontSize={40}>
          hi, i{"'"}m dhruv 👋
        </Text>
        <Text color="black" fontWeight="600" fontSize={20}>
          I build stuff
        </Text>
      </Flex>
    </Flex>
  )
}

export default HomePageTitle