
import { Card, Stack, CardBody, Text, Image, Heading } from '@chakra-ui/react'

const ImageCard = ({ imageUrl, text, title, url }) => {

    return (
        <Card maxW={280} margin={3} borderRadius={50} alignContent='center' justify={'center'}>
            <CardBody>
                <Image
                    src={imageUrl}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{title}</Heading>
                    <Text>
                        {text}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                    <p onClick={()=>window.open(url)} style={{cursor:'pointer'}}>{url}</p>
                    </Text>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default ImageCard;