import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import projectsData from '../data/projects';
import ReturnHomeButton from './ReturnHomeButton';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
interface Project {
    id: string;
    title: string;
    description: string;
    imageSrc: string[];
}

interface ProjectDetailProps {
    projects: Project[];
}

const ProjectDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectDetailImage = styled.img`
  max-width: 100%;
  margin-bottom: 1rem;
`;

const ProjectDetailCarousel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;

  > img {
    max-width: 100px;
    margin-right: 0.5rem;
    cursor: pointer;

    &:hover {
      border: 2px solid #222;
    }
  }
`;

const ProjectDetailTitle = styled.h2`
  margin-bottom: 0.5rem;
`;

const ProjectDetailDescription = styled.p`
  margin-bottom: 1rem;
`;

const PrevNextButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const PrevButton = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  &:hover {
    color: #000;
  }
`;

const NextButton = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  &:hover {
    color: #000;
  }
`;


const ProjectDetail = () => {
    const { id } = useParams();
    const projectIndex = projectsData.findIndex((project) => project.id.toString() === id);
    const project = projectsData[projectIndex];

    const prevProjectId = projectIndex > 0 ? projectsData[projectIndex - 1].id : null;
    const nextProjectId = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1].id : null;

    const [selectedImage, setSelectedImage] = useState(project?.imageSrc[0]);

    if (!project) {
        return <div>Project not found</div>;
    }


    return (
        <ProjectDetailWrapper>
            <ProjectDetailTitle>{project.title}</ProjectDetailTitle>

            <ProjectDetailCarousel>
                {project.imageSrc.map((imgSrc) => (
                    <img
                        key={imgSrc}
                        src={imgSrc}
                        alt={`Project ${project.title}`}
                        onClick={() => setSelectedImage(imgSrc)}
                        style={{ border: selectedImage === imgSrc ? '2px solid #222' : 'none' }}
                    />
                ))}
            </ProjectDetailCarousel>

            <ProjectDetailImage src={selectedImage} alt={`Project ${project.title}`} />

            <ProjectDetailDescription>{project.description}</ProjectDetailDescription>
            <PrevNextButtons>
                {prevProjectId && (
                    <PrevButton to={`/projects/${prevProjectId}`}>
                        <FaArrowLeft /> Previous
                    </PrevButton>
                )}
                {nextProjectId && (
                    <NextButton to={`/projects/${nextProjectId}`}>
                        Next <FaArrowRight />
                    </NextButton>
                )}
            </PrevNextButtons>
            <ReturnHomeButton to="/" />
        </ProjectDetailWrapper>
    );
};

export default ProjectDetail;