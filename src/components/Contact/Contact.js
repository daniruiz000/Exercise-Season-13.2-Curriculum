import './Contact.css';

import {
    Text,
    Flex,
    Button,
    ButtonGroup,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverCloseButton,
    Portal
} from '@chakra-ui/react'

import { CgFacebook } from 'react-icons/cg'
import { AiFillInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import { BiMailSend } from 'react-icons/bi'

import {

} from '@chakra-ui/react'
const Contact = () => {

    return (
        <Flex
            className='contact'
            direction='column'
            justify='center'
            align='center'>

            <Text
                fontSize={25}
                fontWeight={600}
                margin={1}>
                Puedes contactar conmigo a través de:
            </Text>

            <Flex
                direction='row'
                justify='center'
                align='center'>

                <ButtonGroup spacing='6'>
                    <Popover >
                        <PopoverTrigger>
                            <Button
                                boxShadow='5px 5px 5px 5px grey'
                                margin={10}
                                colorScheme={'blue'}
                                borderRadius={200}
                                width={20}
                                height={20}
                                fontSize={40}
                                children={<FiPhoneCall color='white' />} />
                        </PopoverTrigger>
                        <Portal>
                            <PopoverContent
                                bg={'blue.500'}
                                color='white'
                                borderRadius={20}
                                align='center'
                                padding={5}
                                borderColor='blue.500'
                                border={'1px solid #d2eef3'}
                                width={300}>

                                <PopoverCloseButton

                                    color={'blue.500'}
                                    border='none'
                                    bg='white'
                                    fontSize={20}
                                    alignSelf={'baseline'}
                                    margin={1}
                                    borderRadius={20} />

                                <PopoverHeader
                                    fontSize={20}
                                    margin={1}>
                                    Teléfono:
                                </PopoverHeader>

                                <PopoverBody
                                    fontSize={20}
                                    margin={1}>
                                    670 45 42 70
                                </PopoverBody>
                            </PopoverContent>
                        </Portal>
                    </Popover>

                    <Button
                        boxShadow='5px 5px 5px 5px grey'
                        onClick={() => window.open('https://www.facebook.com/daniel.ruiz.353803')}
                        colorScheme={'blue'}
                        borderRadius={200}
                        margin={10}
                        width={20}
                        height={20}
                        fontSize={40}
                        children={<CgFacebook />} />

                    <Button
                        boxShadow='5px 5px 5px 5px grey'
                        onClick={() => window.open('https://www.instagram.com/daniel000ruiz/')}
                        colorScheme={'blue'}
                        borderRadius={200}
                        margin={10}
                        width={20}
                        height={20}
                        fontSize={40}
                        children={<AiFillInstagram />} />

                    <Button
                        boxShadow='5px 5px 5px 5px grey'
                        onClick={() => window.open('https://www.linkedin.com/in/daniel-ruiz-maroto-56998236/')}
                        colorScheme={'blue'}
                        borderRadius={200}
                        margin={10}
                        width={20}
                        height={20}
                        fontSize={40}
                        children={<FaLinkedinIn />} />

                    <Popover  >
                        <PopoverTrigger>
                            <Button
                                boxShadow='5px 5px 5px 5px grey'
                                margin={10}
                                colorScheme={'blue'}
                                borderRadius={200}
                                width={20}
                                height={20}
                                fontSize={40}
                                children={<BiMailSend />} />
                        </PopoverTrigger>
                        <Portal>
                            <PopoverContent
                                bg={'blue.500'}
                                color='white'
                                borderRadius={20}
                                align='center'
                                padding={5}
                                borderColor='blue.500'
                                border={'1px solid blue.500'}
                                w={400}>

                                <PopoverCloseButton

                                    color={'blue.500'}
                                    border='none'
                                    bg='white'
                                    fontSize={30}
                                    alignSelf={'baseline'}
                                    margin={1}
                                    borderRadius={20} />

                                <PopoverHeader
                                    fontSize={20}
                                    margin={1}>
                                    Mail:
                                </PopoverHeader>

                                <PopoverBody
                                    fontSize={20}
                                    margin={1}>
                                    danielruimar@gmail.com
                                </PopoverBody>

                            </PopoverContent>
                        </Portal>
                    </Popover>
                </ButtonGroup>
            </Flex>
        </Flex>
    )
}

export default Contact;