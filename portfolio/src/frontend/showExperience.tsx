import React from "react"
import {MyProject} from './Experience.tsx';

const ProjectCart = ({data}:{data:ProjectData})=>{
    return(
        <div className="title"><h2></h2></div>
    )

}

function Experience() {
 

  return (
    <>
    <div className="head">
        <h1>MY EXPERIENCE</h1>
    </div>
    <div className="project-data">
        {MyProject.map((project)=>(<ProjectCart key={project.id} data={project}/>))}
    </div>
    </>
  )
}

export default Experience 