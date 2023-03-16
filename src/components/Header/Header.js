import './Header.css'
import { Text, Image, Flex, Spacer} from '@chakra-ui/react'


const Header = () => {

    return (
        
        <Flex
            margin='40px auto'
            boxShadow='5px 5px 5px 5px grey'
            as='div'
            w={700}
            h={250}
            color='white'
            background='#3182CF'
            borderRadius={50}
            justify='center'
            align='center'
            direction='row'>

            <Spacer />

            <Flex direction='column'
                justify='center'
                align='center'>
                <Text fontSize={30} fontWeight={800}>Daniel Ruiz Maroto</Text>
                <Text fontSize={20} fontWeight={300}>Desarrollador Web Full Stack</Text>
            </Flex>

            <Spacer />

            <Image
                boxSize='300px'
                objectFit='cover'
                borderRadius={50}
                w={170}
                h={200}
                alt='portada'
                src='https://scontent-mad2-1.xx.fbcdn.net/v/t1.18169-9/16105532_10211778276602180_9130556473616655902_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MqHj5VrqiLAAX-eCX8p&_nc_ht=scontent-mad2-1.xx&oh=00_AfBqFL3Wl7Z4hHTViuxbG5Y9ghdkAbj1UiiNR0GWHnfsiw&oe=643A9B9D'
                />
            
            <Spacer />
            
        </Flex>
    )
}

export default Header;