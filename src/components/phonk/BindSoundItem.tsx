import { soundType } from '@/utils/soundMapping'
import { Flex, Select, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsPlayCircle } from "react-icons/bs"
import { keys } from '@/utils/keys'
import { useDispatch } from 'react-redux'
import { setKey } from '@/reducers/keybindSlice'


interface Props {
  sound: soundType,
  initialKey: string
}

const BindSoundItem = ({sound, initialKey}: Props) => {

  const dispatch = useDispatch()

  const [isExpanded, setIsExpanded] = useState(false);
  const [currentKey, setCurrentKey] = useState(initialKey)

  const handleButtonClick = () => {
    const audio = new Audio(sound.filePath)
    audio.play()
    setIsExpanded(!isExpanded);
  };

  const handleSelectChange = (event: any) => {
    const selectedLetter = event.target.value;
    setCurrentKey(selectedLetter)
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
        <Select border="2px solid black" borderRadius={0} onChange={handleSelectChange} value={currentKey}>
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