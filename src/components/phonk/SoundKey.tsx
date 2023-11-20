import React, { useState, useEffect, useCallback } from 'react';
import { Flex, Box, useToast, Menu, MenuList, MenuItem, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text, Tooltip,   Modal,
  ModalOverlay,
  ModalContent, 
  useDisclosure} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

interface Props {
  keyboard: string,
  onOpen: () => void,
}

const SoundKey = ({keyboard, onOpen}: Props) => {
  const [isPulsing, setIsPulsing] = useState(false);
  const [loop, setLoop] = useState(0)
  const [sliderValue, setSliderValue] = useState(5)
  const [showTooltip, setShowTooltip] = useState(false)
  const { isOpen, onOpen: onModalOpen, onClose } = useDisclosure()

  const sound = useSelector((state: any) => state.keybind.keys[keyboard])
  const toast = useToast()
  const responseToast = useToast()

  useEffect(() => {

    let intervalId: any = null;
    if (loop) {
      intervalId = setInterval(() => {
        sound?.audio.play()
        setIsPulsing(true);
        responseToast({
          position: 'bottom-left',
          render: () => (
            <Box color="black" p={2} border="1px solid black">
              {sound.name}.mp3
            </Box>
          )
        })
      }, loop * 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [loop, responseToast, setLoop, sound]);

  useEffect(() => {
    if (isPulsing) {
      const timeoutId = setTimeout(() => {
        setIsPulsing(false);
      }, 200);

      return () => clearTimeout(timeoutId);
    }
    setIsPulsing(() => false);
  }, [isPulsing]);

  const handleButtonClick = useCallback(() => {
    if (sound) {
      setIsPulsing(true);
      sound?.audio?.cloneNode().play()
      responseToast({
        position: 'bottom-left',
        render: () => (
          <Box color="black" p={2} border="1px solid black">
            {sound.name}.mp3
          </Box>
        )
      })

    } else if (!sound){
      if (!toast.isActive(keyboard)) {
        toast({
          id: keyboard,
          title: "Bind this key to a sound",
          duration: 2000
        })
        onOpen()
      }
    }
  }, [setIsPulsing, sound, toast, keyboard, responseToast, onOpen]);

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.key === keyboard) {
        handleButtonClick();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleButtonClick, keyboard]);

  return (
    <Box w={20} h={20}
      onContextMenu={(e) => {
        e.preventDefault();

        if (sound) {
          onModalOpen();
        }
      }}
    >
      <motion.div
        animate={{
          scale: isPulsing ? [1, 1.15, 1] : 1,
        }}
        transition={{
          duration: 200 / 1000,
        }}
      >
        <Box position="relative"
        >
          <Flex
            border="2px solid black"
            w={20}
            h={20}
            alignItems="center"
            justifyContent="center"
            color="black"
            _hover={{ bg: 'black', color: 'white' }}
            onClick={handleButtonClick}
            transition="ease-in-out 0.2s"
          >
            {keyboard}
          </Flex>
          {sound && (
            <Box
              color="gray.600"
              top={0.5}
              left={0}
              position="absolute"
              fontSize={10}
              pl={1}
            >
              {sound.name}.mp3
            </Box>
          )}
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay/>
          <ModalContent bg="#fbfbf3" p={5} display={"flex"} gap={5}>
            <Text color="black">Loop</Text>
            <Slider
              defaultValue={0}
              max={10}
              step={0.1}
              onChange={(v) => setLoop(v)}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <SliderTrack bg="gray.300">
                <SliderFilledTrack bg="black" />
              </SliderTrack>
              <Tooltip
                hasArrow
                bg='black'
                color='white'
                placement='top'
                isOpen={showTooltip}
                label={loop ? `${loop}s` : "No Loop"}
              >
                <SliderThumb bg="black" />
              </Tooltip>
            </Slider>
          </ModalContent>
        </Modal>
      </motion.div>
    </Box>
  );
};

export default SoundKey;