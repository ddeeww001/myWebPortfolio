
import { MyProject, ProjectCart } from './Experience.tsx';


//export my Experiance
function Experience() {
 

  return (
    <>
    <div className="head">
        <h1>MY EXPERIENCE</h1>
    </div>
    <div className="project-data">
        {MyProject.map(
            (project)=>(
                /*ส่วนที่ดึงข้อมูล project Data 
                มาแสดงทีละ id */
                 <ProjectCart key={project.id}  data={project}/>
                  ))}
    </div>
    </>
  )
}

export default Experience 