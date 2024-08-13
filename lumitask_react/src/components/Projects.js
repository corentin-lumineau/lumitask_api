import React from 'react';

export default function Projects(props) {
    return(
        <div>
            {props.projects.map((project) => {
                return (
                    <div key={project.id}>
                        <h1>{project.title}</h1>
                        <p>{project.content}</p>
                    </div>
                )
            })}
        </div>
    ) ;
}