import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Proyect from '../Proyect/Proyect';
import './Proyects.css';
import { dataProject } from '../../data';

const Proyects = () => {
  return (
    <Flex
      direction={'column'}
      boxShadow="5px 5px 5px 5px grey"
      color="white"
      width={700}
      background="#3182CF"
      borderRadius={50}
      margin={'50px auto'}
    >
      <Text margin={'20px auto'} fontSize={30} fontWeight={600}>
        Estos son algunos de mis mejores trabajos:
      </Text>
      <Flex justify={'center'} wrap={'wrap'} margin={'0 auto'}>
        {dataProject
          .sort((a, b) => b.id - a.id)
          .map((project) => (
            <Proyect project={project} key={project.id} />
          ))}
      </Flex>
    </Flex>
  );
};

export default Proyects;
