import React from "react";
import { Text, Flex, Box } from "@chakra-ui/react";
import { BsArrowReturnRight } from "react-icons/bs";
import Strong from "./Strong";

const CurrentWork = () => {
  return (
    <Flex flexDirection="column" gap={2} mt={5}>
      <Box>
        <Text color="black" fontWeight="500" fontSize={18}>
          Daytime
        </Text>
        <Flex alignItems={"center"} pl={3} gap={2}>
          <BsArrowReturnRight color="black" />
          <Text color="black" fontSize={16}>
            Building really cool stuff at{" "}
            <Strong link={"https://www.tensor.trade/"}>Tensor</Strong>
          </Text>
        </Flex>
      </Box>
      <Box>
        <Text color="black" fontWeight="500" fontSize={18}>
          Nighttime
        </Text>
        <Flex alignItems={"center"} pl={3} gap={2}>
          <BsArrowReturnRight color="black" />
          <Text color="black" fontSize={16}>
            I{"'"}m building{" "}
            <Strong link="https://www.ariamusic.co/">Aria Music</Strong>, the
            first artist first platform with a proper rev share model
          </Text>
        </Flex>
      </Box>
      <Box>
        <Text color="black" fontWeight="500" fontSize={18}>
          Previously
        </Text>
        <Flex alignItems={"center"} pl={3} gap={2}>
          <BsArrowReturnRight color="black" />
          <Text color="black" fontSize={16}>
            Helped{" "}
            <Strong link="https://www.ether.fi/">Ether.fi</Strong> build the
            leading restaking platform
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default CurrentWork;
