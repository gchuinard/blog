import React from 'react';
import styled from 'styled-components';


const Description = styled.div`
    z-index: 100;
    width: 100%;
    height: auto;
    color: #ece8e6;
    text-align: center;
    background-color: #2f122e;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 4rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Titre = styled.h1`
    font-size: 2rem;  
    font-size: 2.5rem;
    color: #fff;
`;

const Paragraphe = styled.p`
    font-size: 1.1rem;
    color: #999;
`;

function AproposComponent() {
    return (
        <Description>

            <Titre>CHEF DE PROJET - DÉVELOPPEUR</Titre>
            <Paragraphe>Un leadship fort et une cohésion d'équipe à toutes épreuves sont les clés qui amènent les
                projets vers la réussite</Paragraphe>
            <Paragraphe>Avec une expertise approfondie dans le développement et la gestion de projets, je donne vie aux
                idées, les transformant de simples concepts en réalités concrètes et fonctionnelles (et documentées
                !).</Paragraphe>
        </Description>
    );
}

export default AproposComponent;


/* Neon effet :
    text-shadow:
        0 0 5px #fff,
        0 0 7px #fff,
        0 0 30px rgb(230, 18, 124),
        0 0 48px rgb(230, 18, 124),
        0 0 75px rgb(230, 18, 124);
    animation: lumiere 1s infinite linear;
    @keyframes lumiere {
        0%{
            text-shadow:
            0 0 5px #fff,
            0 0 7px #fff,
            0 0 30px rgb(230, 18, 124),
            0 0 48px rgb(230, 18, 124),
            0 0 75px rgb(230, 18, 124);
        }
       50%{
            text-shadow:
            0 0 5px #fff,
            0 0 7px #fff,
            0 0 24px rgb(230, 18, 124),
            0 0 66px rgb(230, 18, 124),
            0 0 90px rgb(230, 18, 124);
        }
    } */