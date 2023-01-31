import Project from "../Components/Project";
import projectList from "../projectList";

const Projects = () => {
    var projectArray = [];
    for(const iterator of projectList){
        projectArray.push(<Project project={iterator}/>)
    }

    return (
        <section className="box">
            <div className="container is-fluid columns is-vcentered" id="resume-container">
                <div className="column is-2">
                    <h2 className="subtitle is-4">Resume</h2>
                </div>
                {projectArray}
            </div>
        </section>
    )
}

export default Projects;