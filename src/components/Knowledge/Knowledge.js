import './Knowledge.css'
import ImageCard from '../ImageCard/ImageCard'
import { Flex, Text } from '@chakra-ui/react';

const dataInfo =[
    {
        id:0,
        title:'Node.js',
        text:'Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript',
        imageUrl:'https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.png',
        url:'https://nodejs.org/es'
    },
    {
        id:1,
        title:'React.js',
        text:'React es una biblioteca de JS de código abierto diseñada para crear interfaces de usuario con el onjetivo de facilitar el desarrollo de aplicaciones en una sola página.',
        imageUrl:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
        url:'https://react.dev/'
    },
    {
        id:2,
        title:'HTML5',
        text:'HTML 5  es la quinta revisión importante del lenguaje básico HTML.',
        imageUrl:'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
        url:''
    },
    {
        id:3,
        title:'CSS',
        text:'CSS es el lenguaje de estilos utilizado para describir la presentación de documentos HTML o XML (en-US) (incluyendo varios lenguajes basados en XML como SVG, MathML o XHTML).',
        imageUrl:'https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png',
        url:'https://developer.mozilla.org/es/docs/Web/CSS'
    }
]


const Knowledge = () => {

    return (
        <Flex
            direction={'column'}
            boxShadow='5px 5px 5px 5px grey'
            color='white'
            width={700}
            background='#3182CF'
            margin={'50px auto'}
            borderRadius={50}>
            <Text
                margin={'20px auto'}
                fontSize={30}
                fontWeight={600}
            >Estos son algunos de mis conocimientos:
            </Text>
            <Flex
                direction={'row'}
                borderRadius={50}
                wrap='wrap'
                padding={10}
                color='white'
                width={700}
                background='#3182CF'
                margin={'0 auto'}
                justify={'center'}
            >{dataInfo.map(element=> <ImageCard key={element.id} imageUrl={element.imageUrl} text={element.text} title={element.title} url={element.url}/>)}
            </Flex>
        </Flex>
    )
}

export default Knowledge;