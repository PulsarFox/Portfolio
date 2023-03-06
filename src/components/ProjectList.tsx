import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';

const ProjectListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

interface ProjectData {
    id: number;
    title: string;
    description: string;
    imageSrc: string[];
}

interface ProjectListProps {
    projects: ProjectData[];
}

const ProjectList = () => {


    return (
        <div>
            {projects.map((project) => (
                <Link key={project.id} to={`/projects/${project.id}`}>
                    <ProjectCard
                        title={project.title}
                        description={project.description}
                        imageSrc={project.imageSrc[0]}
                    />
                </Link>
            ))}
        </div>
    );
};

export default ProjectList;
export type { ProjectData };