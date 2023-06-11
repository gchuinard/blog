import React from 'react';
import styled from 'styled-components';

interface Project {
    title: string;
    description: string;
    technos: string[];
    link: string;
    image: string;
    imageAlt: string;
    imageHover: string;
    imageHoverAlt: string;
}

const projectsData: Project[] = [
    {
        title: 'Projet 1',
        description: 'Description du projet 1',
        technos: ['React', 'TypeScript', 'Styled-Components'],
        link: 'https://www.google.com',
        image: 'https://picsum.photos/200/300',
        imageAlt: 'Image du projet 1',
        imageHover: 'https://picsum.photos/200/300',
        imageHoverAlt: 'Image du projet 1',
    },
    {
        title: 'Projet 2',
        description: 'Description du projet 2',
        technos: ['Python', 'Django', 'SQLite'],
        link: 'https://www.google.com',
        image: 'https://picsum.photos/200/300',
        imageAlt: 'Image du projet 2',
        imageHover: 'https://picsum.photos/200/300',
        imageHoverAlt: 'Image du projet 2',
    },
    {
        title: 'Projet 3',
        description: 'Description du projet 3',
        technos: ['React', 'TypeScript', 'Styled-Components'],
        link: 'https://www.google.com',
        image: 'https://picsum.photos/200/300',
        imageAlt: 'Image du projet 3',
        imageHover: 'https://picsum.photos/200/300',
        imageHoverAlt: 'Image du projet 3',
    },
    {
        title: 'Projet 4',
        description: 'Description du projet 4',
        technos: ['Python', 'Django', 'SQLite'],
        link: 'https://www.google.com',
        image: 'https://picsum.photos/200/300',
        imageAlt: 'Image du projet 4',
        imageHover: 'https://picsum.photos/200/300',
        imageHoverAlt: 'Image du projet 4',
    },
    {
        title: 'Projet 5',
        description: 'Description du projet 5',
        technos: ['React', 'TypeScript', 'Styled-Components'],
        link: 'https://www.google.com',
        image: 'https://picsum.photos/200/300',
        imageAlt: 'Image du projet 5',
        imageHover: 'https://picsum.photos/200/300',
        imageHoverAlt: 'Image du projet 5',
    },
    {
        title: 'Projet 6',
        description: 'Description du projet 6',
        technos: ['Python', 'Django', 'SQLite'],
        link: 'https://www.google.com',
        image: 'https://picsum.photos/200/300',
        imageAlt: 'Image du projet 6',
        imageHover: 'https://picsum.photos/200/300',
        imageHoverAlt: 'Image du projet 6',
    },
    {
        title: 'Projet 7',
        description: 'Description du projet 7',
        technos: ['React', 'TypeScript', 'Styled-Components'],
        link: 'https://www.google.com',
        image: 'https://picsum.photos/200/300',
        imageAlt: 'Image du projet 7',
        imageHover: 'https://picsum.photos/200/300',
        imageHoverAlt: 'Image du projet 7',
    },
    {
        title: 'Projet 8',
        description: 'Description du projet 8',
        technos: ['Python', 'Django', 'SQLite'],
        link: 'https://www.google.com',
        image: 'https://picsum.photos/200/300',
        imageAlt: 'Image du projet 8',
        imageHover: 'https://picsum.photos/200/300',
        imageHoverAlt: 'Image du projet 8',
    }

];

const CardContent = styled.div`
  flex: 1;
  max-width: 370px;
`;

const CardImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  gap: 1rem;
  margin: 0 20%;
  position: relative;
  font-family: 'Space Mono',sans-serif;
`;


const Card = styled.div`
  border: 3px solid #fcf7f0;
  border-radius: 5px;
  padding: 1rem 3rem 3rem 3rem;
  margin-bottom: 5rem;
  color: #fcf7f0;
  background: #000;
  font-family: 'Space Mono',sans-serif;
  transition: box-shadow 0.5s ease;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  
  &:hover {
    box-shadow: 0 0 20px #870FA5, 0 0 30px #870FA5, 0 0 40px #870FA5;
  }
`;


const Technos = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  gap: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 5px;
`;

const Titre = styled.h1`
    font-family: 'Space Mono',sans-serif;
    font-size: 3rem;
    color: #fff;
    margin-top: 0;
    margin-bottom: 5rem;
    padding: 15% 20% 3% 20%;
`;

const VoirProjet = styled.button`
    text-transform: uppercase;
    font-size: 1.5rem;
    border: 3px solid #fcf7f0;
    border-radius: 5px;
    background-color: transparent;
    padding: 20px 40px;
    color: #fcf7f0;
    transition: color 0.5s, background-color 0.5s;
    
    &:hover {
        color: #fff;
        background-color: #fcf7f0;
        }
`;

const LienProjet = styled.a`
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 3.5px;
    font-size: 1.5rem;
    color: #fcf7f0;
    transition: color 0.5s, background-color 0.5s;
    
    &:hover {
        color: #000;
        background-color: #fcf7f0;
        }
`;

function ProjetsComponent() {
    return (
        <div
            style={{background: '#000000', height: '100vh'}}>
            <Titre>Projets</Titre>
            <Grid>
                {projectsData.map((project, i) => (
                    <Card key={i}>
                        <Technos>
                            {project.technos.map((techno, j) => (
                                <li key={j}>{techno}</li>
                            ))}
                        </Technos>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <CardContent>
                                <h2 style={{
                                    display: 'inline',
                                    backgroundColor: '#870FA5',
                                    color: '#47e98d'
                                }}>{project.title}</h2>
                                <p>{project.description}</p>
                                <VoirProjet>
                                    <LienProjet href={project.link} target="_blank" rel="noopener noreferrer">
                                        Voir le projet
                                    </LienProjet>
                                </VoirProjet>
                            </CardContent>
                            <CardImageContainer>
                                <img
                                    src={project.image}
                                    alt={project.imageAlt}
                                    onMouseOver={e => (e.currentTarget.src = project.imageHover)}
                                    onMouseOut={e => (e.currentTarget.src = project.image)}
                                />
                            </CardImageContainer>
                        </div>
                    </Card>
                ))}
            </Grid>
        </div>
    );
}

export default ProjetsComponent;
