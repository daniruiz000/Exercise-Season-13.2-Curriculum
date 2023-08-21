import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Proyect from "../Proyect/Proyect";
import "./Proyects.css";

const dataProject = [
  {
    id: 0,
    urlImg:
      "https://github.com/daniruiz000/Chuck-Norris/blob/main/Chuck.png?raw=true",
    title: "Chuk Norris Jokes",
    text: "App que nos devolverá chistes en funcion de la tematica realizada en JS plano, con SASS y Metodolgía BEN.",
    url: "https://daniruiz000.github.io/Chuck-Norris/",
  },
  {
    id: 1,
    urlImg:
      "https://github.com/daniruiz000/Adivina-tu-edad/blob/main/Adivina.png?raw=true",
    title: "Adivina tu edad",
    text: " App que adivinará nuestra edad en función del nombre que introduzcamos realizada en JS plano, con SASS y Metodolgía BEN.",
    url: "https://daniruiz000.github.io/Adivina-tu-edad/",
  },
  {
    id: 2,
    urlImg:
      "https://github.com/daniruiz000/Ejercicio-Sesion-5.2-Calculadora/blob/main/Captura%20de%20pantalla%202023-03-16%20221139.png?raw=true",
    title: "Calculadora",
    text: "App calculadora básica realizada en JS plano, con SASS y Metodolgía BEN.",
    url: "https://daniruiz000.github.io/Ejercicio-Sesion-5.2-Calculadora/",
  },
  {
    id: 3,
    urlImg:
      "https://github.com/daniruiz000/RICK-MORTY/blob/main/RickMorty.png?raw=true",
    title: "Rick and Morty",
    text: "Wiki de la famosa serie realizada en JS plano, con SASS y Metodolgía BEN.",
    url: "https://daniruiz000.github.io/RICK-MORTY/",
  },
  {
    id: 4,
    urlImg: process.env.PUBLIC_URL + "/laliga.png",
    title: "LaLiga",
    text: "App para la gestión y creación de ligas de equipos de fútbol. API creada con Node.",
    url: "https://laliga-front.onrender.com",
  },
  {
    id: 5,
    urlImg:
      process.env.PUBLIC_URL + "/Captura de pantalla 2023-07-09 215438.png",
    title: "TMDB-FILMS",
    text: "App que emula la famosa página de cine y tv de TMDB y hace uso de su API pública. API creada con Node. además incluye un juego propio implentado por mí.",
    url: "https://bootcam-films.onrender.com/",
  },
  {
    id: 6,
    urlImg: process.env.PUBLIC_URL + "/Pokemon.png",
    title: "POKEMON",
    text: "App que hace uso de la API pública de Pokemon, además incluye un juego propio implentado por mí.",
    url: "https://pokemon-daniel-ruiz.onrender.com",
  },
];

const Proyects = () => {
  return (
    <Flex
      direction={"column"}
      boxShadow="5px 5px 5px 5px grey"
      color="white"
      width={700}
      background="#3182CF"
      borderRadius={50}
      margin={"50px auto"}
    >
      <Text margin={"20px auto"} fontSize={30} fontWeight={600}>
        Estos son algunos de mis mejores trabajos:
      </Text>
      <Flex justify={"center"} wrap={"wrap"} margin={"0 auto"}>
        {dataProject
          .sort((a, b) => b.id - a.id)
          .map((project) => (
            <Proyect project={project} />
          ))}
      </Flex>
    </Flex>
  );
};

export default Proyects;
