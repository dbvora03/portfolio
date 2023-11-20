import BindModal from '@/components/phonk/BindModal'
import Keyboard from '@/components/phonk/Keyboard'
import { store } from '@/reducers/store'
import { Flex, Text, Button, useDisclosure, Image, Tooltip, Box } from '@chakra-ui/react'
import React from 'react'
import { Provider } from 'react-redux';

const Phonk = () => {

  const disclosure = useDisclosure()

  return (
    <Provider store={store}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text color="black" m={2} fontSize={28} fontWeight={"600"}>
          Favella Friday
        </Text>
        <Flex mx={2}>
          <Button
            border="2px solid black"
            borderRadius={0}
            padding={4}
            color="black"
            _hover={{ bg: 'black', color: 'white' }}
            transition="ease-in-out 0.2s"
            onClick={() => disclosure.onOpen()}
          >
            bind sound
          </Button>
        </Flex>
      </Flex>
      <Flex flexDirection={"column"} justifyContent="center" mt={20} alignItems="center" h="100%" gap={5}>
        <Image src="/images/arana.gif" w={250} alt="DJ Arana"/>
        <Flex flexDirection={"column"} w="50%" gap={4}>
          <Keyboard onOpen={disclosure.onOpen}/>
        </Flex>
      </Flex>
      <BindModal disclosure={disclosure}/>
    </Provider>
  )
}

export default Phonk