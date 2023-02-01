import Project from "../Components/Project";
import projectList from "../projectList";

const Projects = () => {
    let projectArray = [];
    let num=0;
    for(const iterator of projectList){
        num++;
        projectArray.push(<Project project={iterator} key={num}/>)
    }

    return (
        <section>
            <div className="is-centered columns is-multiline">
                {projectArray}
            </div>
        </section>
    )
}

export default Projects;