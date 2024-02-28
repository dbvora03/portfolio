import React from "react";
import { Text, Flex, Box } from "@chakra-ui/react";
import { BsArrowReturnRight } from "react-icons/bs";
import Strong from "./Strong";

const CurrentWork = () => {
  return (
    <Flex flexDirection="column" gap={2} mt={5}>
      <Box>
        <Text color="black" fontWeight="500" fontSize={20}>
          What am I up to during the day?
        </Text>
        <Flex alignItems={"center"} pl={3} gap={2}>
          <BsArrowReturnRight color="black" />
          <Text color="black" fontSize={18}>
            Building really cool stuff at
            <Strong link={"https://www.tensor.trade/"}>Tensor</Strong>
          </Text>
        </Flex>
      </Box>
      <Box>
        <Text color="black" fontWeight="500" fontSize={20}>
          What am I up to at night?
        </Text>
        <Flex alignItems={"center"} pl={3} gap={2}>
          <BsArrowReturnRight color="black" />
          <Text color="black" fontSize={18}>
            I{"'"}m building{" "}
            <Strong link="https://www.ariamusic.co/">Aria Music</Strong>, an
            artist first platform that makes sense
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default CurrentWork;
