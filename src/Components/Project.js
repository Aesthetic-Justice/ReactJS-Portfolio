const Project = (data) => {
    return (
        <a href={data.project.link} className="column">
            <p>{data.project.name}</p>
            <img src={data.project.image} alt="" />
        </a>
    )
};

export default Project;