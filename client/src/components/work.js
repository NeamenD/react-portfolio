import React, { Component } from 'react';
import Project from './project';
import data from '../data';

class Work extends Component {
    state = {  }
    render() { 
        return (<div>
        <h1 className='heading'>
        Work.</h1>
        <div className='work-content'>
                {data.projects.map((project)=>(
                    <Project key={project.id}
                             title = {project.title}
                             service = {project.service}
                             imageSrc = {project.imageSrc}
                             url={project.url}
                     ></Project>
                ))}
        </div>
        </div>  );
    }
}
 
export default Work;