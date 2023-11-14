import { keys } from '@/utils/keys'
import { Flex } from '@chakra-ui/react'
import React from 'react'
import SoundKey from './SoundKey'
import { useSelector } from 'react-redux'

const Keyboard = () => {

  return (
    <Flex flexDirection={"column"} gap={2}>
      <Flex gap={3}>
        {keys.slice(0, 10).map((letter: string) => (
          <SoundKey key={letter} keyboard={letter}/>
        ))}
      </Flex>
      <Flex gap={3} ml={8}>
        {keys.slice(10, 19).map((letter: string) => (
          <SoundKey key={letter} keyboard={letter}/>
        ))}
      </Flex>
      <Flex gap={3} ml={20}>
        {keys.slice(19, 28).map((letter: string) => (
          <SoundKey key={letter} keyboard={letter}/>
        ))}
      </Flex>
    </Flex>
  )
}

export default Keyboard