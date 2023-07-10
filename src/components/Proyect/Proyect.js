import {
  Image,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const Proyect = ({ project }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <Box className="proyect">
      <Image
        onClick={onOpen}
        src={project.urlImg}
        alt="app"
        w={"300PX"}
        h={"200px"}
        borderRadius={20}
        margin={5}
      />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"40px"}>{project.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize={"25px"} ref={initialRef}>
            {project.text}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cerrar
            </Button>
            <Button variant="ghost" onClick={() => window.open(project.url)}>
              Ir a la App
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Proyect;
