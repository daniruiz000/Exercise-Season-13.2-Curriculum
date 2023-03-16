import './About.css';
import { Flex, Text, Box } from '@chakra-ui/react';
import { BsArrowRightShort } from 'react-icons/bs'

const About = () => {
    return (
        <Box 
            borderRadius={20}
            padding={5}
            width={700}
            bg={'blue.50'}
            margin={'0 auto'}
            boxShadow='5px 5px 5px 5px grey'>
            <Flex
                direction={'column'}
                justify={'center'}
                align={'flex-start'}
                width={600}
                alignContent={'center'}
                margin={'20px auto'}
                padding={5}>

                <Text
                    margin={'10px auto'}
                    fontSize={30}
                    fontWeight={800}
                >DANIEL RUIZ MAROTO
                </Text>
                <Flex
                    direction={'row'}
                    justify={'center'}
                    alignItems='center'
                    margin={'10px 40px'}>
                    <BsArrowRightShort fontSize={30}></BsArrowRightShort>
                    <Text
                        margin={'5px 10px'}
                        fontSize={20}
                        color={'blue.500'}
                    >Empleo: <span style={{ color: 'black', fontWeight: '700' }}> Desarrollador Web Full Stack</span>
                    </Text>
                </Flex>
                <Flex
                    direction={'row'}
                    justify={'center'}
                    alignItems='center'
                    margin={'10px 40px'}>
                    <BsArrowRightShort fontSize={30}></BsArrowRightShort>
                    <Text
                        margin={'5px 10px'}
                        fontSize={20}
                        color={'blue.500'}
                    >Fecha de nacimiento: <span style={{ color: 'black', fontWeight: '700' }}>02/10/1981</span>
                    </Text>
                </Flex>
                <Flex
                    direction={'row'}
                    justify={'center'}
                    alignItems='center'
                    margin={'10px 40px'}>
                    <BsArrowRightShort fontSize={30}></BsArrowRightShort>
                    <Text
                        margin={'5px 10px'}
                        fontSize={20}
                        color={'blue.500'}
                    >Localización: <span style={{ color: 'black', fontWeight: '700' }}>Madrid, España</span>
                    </Text>
                </Flex>

                <Text
                    margin={'20px 10px'}
                    fontSize={15}
                    color={'white'}
                    bg={'blue.500'}
                    padding={10}
                    borderRadius={20}
                    boxShadow='5px 5px 5px 5px grey'
                >Durante veinte años he desarrollado mi actividad como Operador de Cámara profesional
                    a nivel nacional e internacional para diferentes medios de comunicación.
                    <br></br><br></br>
                    Al sufrir una lesión en el hombro que me tuvo fuera de juego bastante tiempo, con operación incluida, tuve tiempo durante mi baja para descubrir un nuevo mundo en el
                    desarrollo web.<br></br><br></br>Comencé a interesarme por pura curiosidad y acabé descubriendo que me encantaba.
                    <br></br><br></br>
                    Así que decidí reconvertirme y estudiar en serio esta matería. Y a día de hoy se ha convertido en mi nueva profesión y mi nueva
                    gran pasión.
                </Text>

            </Flex>
        </Box>

    )
}

export default About;