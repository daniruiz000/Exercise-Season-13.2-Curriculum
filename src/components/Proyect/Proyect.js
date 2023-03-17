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
} from '@chakra-ui/react'
import React from 'react'



const Proyect = ({ onClose, isOpen, onOpen, project }) => {


    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    return (
        <Box className='proyect'>
            <Image
                onClick={onOpen}
                src={project.urlImg}
                alt='Rick and Morty'
                w={'300PX'}
                h={'200px'}
                borderRadius={20}
                margin={5}
                >
            </Image>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{project.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody ref={initialRef}>
                        {project.text}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost' onClick={() => window.open(project.url)}>Ir a la App</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default Proyect;