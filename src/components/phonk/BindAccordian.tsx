import React from 'react'
import { soundMapping, soundType } from '@/utils/soundMapping'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import BindSoundItem from './BindSoundItem';

const BindAccordian = () => {

  const types = ["Chant", "One Shot", "Vocals", "Random"]
  return (
    <Accordion allowToggle>
      {types.map((type: string) => (
        <AccordionItem key={type} borderBottom="1px solid black">
          <h2>
            <AccordionButton color="black">
              <Box as="span" flex='1' textAlign='left' color="black" fontWeight={"600"}>
                {type}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color="black">
            {soundMapping.filter((sound: soundType) => sound.type == type).map((sound: soundType) => (
              <BindSoundItem key={sound.name} sound={sound}/>
            ))}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default BindAccordian