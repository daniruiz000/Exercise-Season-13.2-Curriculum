import './About.css';
import { Flex, Text, Box } from '@chakra-ui/react';
import { BsArrowRightShort } from 'react-icons/bs';

const About = () => {
  return (
    <Box borderRadius={20} padding={5} width={700} bg={'blue.50'} margin={'0 auto'} boxShadow="5px 5px 5px 5px grey">
      <Flex
        direction={'column'}
        justify={'center'}
        align={'flex-start'}
        width={600}
        alignContent={'center'}
        margin={'20px auto'}
        padding={5}
      >
        <Text margin={'10px auto'} fontSize={40} fontWeight={800}>
          DANIEL RUIZ MAROTO
        </Text>

        <Flex direction={'row'} justify={'center'} alignItems="center" margin={'10px 40px'}>
          <BsArrowRightShort fontSize={25}></BsArrowRightShort>
          <Text margin={'5px 10px'} fontSize={25} color={'blue.500'}>
            Empleo: <span style={{ color: 'black', fontWeight: '700' }}> Desarrollador Web Full Stack</span>
          </Text>
        </Flex>

        <Flex direction={'row'} justify={'center'} alignItems="center" margin={'10px 40px'}>
          <BsArrowRightShort fontSize={30}></BsArrowRightShort>
          <Text margin={'5px 10px'} fontSize={25} color={'blue.500'}>
            Localización: <span style={{ color: 'black', fontWeight: '700' }}>Madrid, España</span>
          </Text>
        </Flex>
        <Text
          margin={'20px 10px'}
          fontSize={25}
          color={'white'}
          bg={'blue.500'}
          padding={10}
          borderRadius={20}
          boxShadow="5px 5px 5px 5px grey"
        >
          A lo largo de veinte años, he desempeñado mi labor como Operador de Cámara profesional tanto a nivel nacional como internacional,
          colaborando con diversos medios de comunicación.
          <br></br>
          <br></br>
          Sin embargo, mi trayectoria dio un giro significativo cuando una lesión en el hombro me apartó temporalmente de mi profesión,
          incluso requiriendo una intervención quirúrgica. Durante mi período de convalecencia, tuve la oportunidad de explorar un nuevo
          horizonte: el desarrollo web.
          <br></br>
          <br></br>
          Lo que inicialmente despertó mi interés por simple curiosidad se transformó en una auténtica pasión. Con determinación, opté por
          una reconversión profesional, comprometiéndome seriamente a estudiar esta disciplina. Hoy en día, el desarrollo web no solo
          constituye mi nueva profesión, sino también mi nueva gran pasión.
        </Text>
      </Flex>
    </Box>
  );
};

export default About;
