import './Knowledge.css';
import ImageCard from '../ImageCard/ImageCard';
import { Flex, Text } from '@chakra-ui/react';
import { dataInfo } from '../../data';

const Knowledge = () => {
  return (
    <Flex
      direction={'column'}
      boxShadow="5px 5px 5px 5px grey"
      color="white"
      width={700}
      background="#3182CF"
      margin={'50px auto'}
      borderRadius={50}
    >
      <Text margin={'20px auto'} fontSize={30} fontWeight={600}>
        Estos son algunos de mis conocimientos:
      </Text>
      <Flex
        direction={'row'}
        borderRadius={50}
        wrap="wrap"
        padding={10}
        color="white"
        width={700}
        background="#3182CF"
        margin={'0 auto'}
        justify={'center'}
      >
        {dataInfo.map((element) => (
          <ImageCard key={element.id} imageUrl={element.imageUrl} text={element.text} title={element.title} url={element.url} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Knowledge;
