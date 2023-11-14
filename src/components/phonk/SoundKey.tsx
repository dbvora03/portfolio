import React, { useState, useEffect, useCallback } from 'react';
import { Flex, Box, useToast } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

interface Props {
  keyboard: string
}

const SoundKey = ({keyboard}: Props) => {
  const [isPulsing, setIsPulsing] = useState(false);

  const sound = useSelector((state: any) => state.keybind.keys[keyboard])
  const toast = useToast()
  const responseToast = useToast()

  useEffect(() => {
    if (isPulsing) {
      const timeoutId = setTimeout(() => {
        setIsPulsing(false);
      }, 1); // 5000 milliseconds = 5 seconds

      return () => clearTimeout(timeoutId);
    }
    setIsPulsing(() => false);
  }, [isPulsing]);

  const handleButtonClick = useCallback(() => {
    if (sound && !isPulsing) {
      setIsPulsing(true);
      const audio = new Audio(sound.filePath)
      responseToast({
        position: 'bottom-left',
        render: () => (
          <Box color="black" p={2} border="1px solid black">
            {sound.name}.mp3
          </Box>
        )
      })
      audio.play()
    } else if (!sound){
      if (!toast.isActive(keyboard)) {
        toast({
          id: keyboard,
          title: "Bind this key to a sound",
          duration: 2000
        })
      }
    }
  }, [setIsPulsing, sound, toast, keyboard, isPulsing, responseToast]);

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
    <Box w={20} h={20}>
      <motion.div
        animate={{
          scale: isPulsing ? [1, 1.15, 1] : 1,
        }}
        transition={{
          duration: 400 / 1000,
        }}
      >
    <Box position="relative">
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
      </motion.div>
    </Box>
  );
};

export default SoundKey;