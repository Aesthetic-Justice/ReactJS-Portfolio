const Project = (data) => {
    return (
        <div className="box column is-3" style={{ margin: "20px" }}>
            <p>{data.project.name}</p>
            <p>Deployed App: <a href={data.project.repo} alt="">Here</a></p>
            <a href={data.project.link} className="column">
                <img src={data.project.image} style={{ width: "20rem", height: "20rem" }} alt="" />
            </a>
        </div>
    )
};

export default Project;