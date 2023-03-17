import {
    Image,
    Flex,
    Text,
    Box,
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

import React from 'react';
import Proyect from '../Proyect/Proyect';

import './Proyects.css';

const dataProject = [
    {
        id: 0,
        urlImg: 'https://github.com/daniruiz000/RICK-MORTY/blob/main/RickMorty.png?raw=true',
        title: 'Rick and Morty',
        text: 'Wiki de la famosa serie realizada en JS plano, con SASS y Metodolgía BEN.',
        url: 'https://daniruiz000.github.io/RICK-MORTY/'
    },
    {
        id: 1,
        urlImg: 'https://github.com/daniruiz000/Chuck-Norris/blob/main/Chuck.png?raw=true',
        title: 'Chuk Norris Jokes',
        text: 'App que nos devolverá chistes en funcion de la tematica realizada en JS plano, con SASS y Metodolgía BEN.',
        url: 'https://daniruiz000.github.io/Chuck-Norris/'
    },
    {
        id: 2,
        urlImg: 'https://github.com/daniruiz000/Adivina-tu-edad/blob/main/Adivina.png?raw=true',
        title: 'Adivina tu edad',
        text: ' App que adivinará nuestra edad en funcion del nombre que introduzcamos realizada en JS plano, con SASS y Metodolgía BEN.',
        url: 'https://daniruiz000.github.io/Adivina-tu-edad/'
    },
    {
        id: 3,
        urlImg: 'https://github.com/daniruiz000/Ejercicio-Sesion-5.2-Calculadora/blob/main/Captura%20de%20pantalla%202023-03-16%20221139.png?raw=true',
        title: 'Calculadora',
        text: 'App calculadora básica realizada en JS plano, con SASS y Metodolgía BEN.',
        url: 'https://daniruiz000.github.io/Ejercicio-Sesion-5.2-Calculadora/'
    },
]

const Proyects = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (

        <Flex
            direction={'column'}
            boxShadow='5px 5px 5px 5px grey'
            color='white'
            width={700}
            background='#3182CF'
            borderRadius={50}
            margin={'50px auto'}>

            <Text
                margin={'20px auto'}
                fontSize={30}
                fontWeight={600}
            >Estos son algunos de mis mejores trabajos:
            </Text>

            <Flex
                justify={'center'}
                wrap={'wrap'}
                margin={'0 auto'}>

                {dataProject.map(project => {

                    return (

                        <Proyect
                            onOpen={onOpen}
                            isOpen={isOpen}
                            onClose={onClose}
                            project={project} />
                    )
                })}

                <Box className='proyect'>
                    <Image
                        onClick={onOpen}
                        src="https://github.com/daniruiz000/RICK-MORTY/blob/main/RickMorty.png?raw=true"
                        alt='Rick and Morty'
                        w={'300PX'}
                        h={'200px'}
                        borderRadius={20}
                        margin={5}>
                    </Image>

                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Rick and Morty</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                Wiki de la famosa serie realizada en JS plano, con SASS y Metodolgía BEN.
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                    Close
                                </Button>
                                <Button variant='ghost' onClick={() => window.open("https://daniruiz000.github.io/RICK-MORTY/")}>Ir a la App</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Box>

                <Box className='proyect'>

                    <Image
                        onClick={onOpen}
                        src="https://github.com/daniruiz000/Chuck-Norris/blob/main/Chuck.png?raw=true"
                        alt='Chuck Norris'
                        w={'300PX'}
                        h={'200px'}
                        borderRadius={20}
                        margin={5}>
                    </Image>
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Chuk Norris Jokes</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                App que nos devolverá chistes en funcion de la tematica realizada en JS plano, con SASS y Metodolgía BEN.
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                    Close
                                </Button>
                                <Button variant='ghost' onClick={() => window.open("https://daniruiz000.github.io/Chuck-Norris/")}>Ir a la App</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Box>

                <Box className='proyect'>

                    <Image
                        onClick={onOpen}
                        src="https://github.com/daniruiz000/Adivina-tu-edad/blob/main/Adivina.png?raw=true"
                        alt='adivina tu edad'
                        w={'300PX'}
                        h={'200px'}
                        borderRadius={20}
                        margin={5}>
                    </Image>
                    <Modal isOpen={isOpen} onClose={onClose} >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Adivina tu edad</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                App que adivinará nuestra edad en funcion del nombre que introduzcamos realizada en JS plano, con SASS y Metodolgía BEN.
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                    Close
                                </Button>
                                <Button variant='ghost' onClick={() => window.open("https://daniruiz000.github.io/Adivina-tu-edad/")}>Ir a la App</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Box>

                <Box className='proyect'>

                    <Image
                        onClick={onOpen}
                        src="https://github.com/daniruiz000/Ejercicio-Sesion-5.2-Calculadora/blob/main/Captura%20de%20pantalla%202023-03-16%20221139.png?raw=true"
                        alt='calculadora'
                        w={'300PX'}
                        h={'200px'}
                        borderRadius={20}
                        margin={5}>
                    </Image>
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Calculadora</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                App calculadora básica realizada en JS plano, con SASS y Metodolgía BEN.
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                    Close
                                </Button>
                                <Button variant='ghost' onClick={() => window.open("https://daniruiz000.github.io/Ejercicio-Sesion-5.2-Calculadora/")}>Ir a la App</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Proyects;