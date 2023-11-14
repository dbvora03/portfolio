import { soundType } from '@/utils/soundMapping'
import { Flex, Select, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import useSound from 'use-sound'
import { BsPlayCircle } from "react-icons/bs"
import { keys } from '@/utils/keys'
import { useDispatch } from 'react-redux'
import { setKey } from '@/reducers/keybindSlice'


interface Props {
  sound: soundType
}

const BindSoundItem = ({sound}: Props) => {

  const [playSound] = useSound(sound.filePath, {interrupt: true})
  const [isExpanded, setIsExpanded] = useState(false);

  const dispatch = useDispatch()

  const handleButtonClick = () => {
    playSound()
    setIsExpanded(!isExpanded);
  };

  const handleSelectChange = (event: any) => {
    const selectedLetter = event.target.value;
    dispatch(setKey({letter: selectedLetter, value: sound}));
  };

  return (
    <Flex key={sound.name} justifyContent={"space-between"} alignItems={"center"} my={1}>
      <Flex cursor={"pointer"} onClick={handleButtonClick} gap={2} alignItems="center" bg="#bfbfbf" _hover={{bg: "#949494"}} py={1} px={4} borderRadius={10}>
        <BsPlayCircle 
          color="black"
        />
        <Text>{sound.name}.mp3</Text>
      </Flex>
      <Flex alignItems="center" gap={3}>
        <Select border="2px solid black" borderRadius={0} onChange={handleSelectChange}>
          <option value={""}>Select</option>
          {keys.map((letter: string) => (
            <option key={letter} value={letter}>
              {letter}
            </option>
          ))}
        </Select>
      </Flex>
    </Flex>
  )
}

export default BindSoundItem