import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text
} from "@chakra-ui/react";
import React from "react";
import BindAccordian from "./BindAccordian";

interface Props {
  disclosure: any;
}

const BindModal = ({ disclosure }: Props) => {
  return (
    <>
      <Modal
        isOpen={disclosure.isOpen}
        onClose={disclosure.onClose}
        size={"2xl"}
      >
        <ModalOverlay />
        <ModalContent bg="#fbfbf3">
          <ModalHeader color="black">Sound Keybinds</ModalHeader>
          <ModalCloseButton color="black"/>
          <ModalBody>
            <Text color="black" mb={3}>Currently adding more sounds</Text>
            <BindAccordian/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BindModal;
