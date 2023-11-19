import { keys } from '@/utils/keys'
import { Flex } from '@chakra-ui/react'
import React from 'react'
import SoundKey from './SoundKey'

interface Props {
  onOpen: () => void;
}

const Keyboard = ({onOpen}: Props) => {

  return (
    <Flex flexDirection={"column"} gap={2}>
      <Flex gap={3}>
        {keys.slice(0, 10).map((letter: string) => (
          <SoundKey key={letter} keyboard={letter} onOpen={onOpen}/>
        ))}
      </Flex>
      <Flex gap={3} ml={8}>
        {keys.slice(10, 19).map((letter: string) => (
          <SoundKey key={letter} keyboard={letter} onOpen={onOpen}/>
        ))}
      </Flex>
      <Flex gap={3} ml={20}>
        {keys.slice(19, 28).map((letter: string) => (
          <SoundKey key={letter} keyboard={letter} onOpen={onOpen}/>
        ))}
      </Flex>
    </Flex>
  )
}

export default Keyboard