import "./Header.css";
import { Text, Image, Flex, Spacer } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      margin="40px auto"
      boxShadow="5px 5px 5px 5px grey"
      as="div"
      w={700}
      h={250}
      color="white"
      background="#3182CF"
      borderRadius={50}
      justify="center"
      align="center"
      direction="row"
    >
      <Spacer />

      <Flex direction="column" justify="center" align="center">
        <Text fontSize={30} fontWeight={800}>
          Daniel Ruiz Maroto
        </Text>
        <Text fontSize={20} fontWeight={300}>
          Desarrollador Web Full Stack
        </Text>
      </Flex>

      <Spacer />

      <Image
        boxSize="300px"
        objectFit="cover"
        borderRadius={50}
        w={170}
        h={200}
        src={process.env.PUBLIC_URL + "/1516641943147.jpg"}
        alt="Daniel Ruiz Maroto image"
      />

      <Spacer />
    </Flex>
  );
};

export default Header;
