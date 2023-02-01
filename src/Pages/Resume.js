import { Link } from "react-router-dom";

const Resume = () => {
    return (
        <div style={{ margin: "auto", width: "80%", marginTop: "15px", marginBottom: "15px" }}>
            <div className="box">
                <p>
                    2 Years Experience in Indie Game Development, coding in primarily C++.
                </p>
                <hr />
                <p>
                    Familiar with common industry tools, such as; Unreal Engine 4, Unity, Blender, Visual Studio, VSCode, Mixamo, Incredibuild, and Quixel Bridge.
                </p>
            </div>

            <div className="box">
                <p>
                    3 Years Experience in Data Management
                </p>
                <hr />
                <p>
                    Familiar with common industry tools, such as; Microsoft Excel, Google Sheets, the Open Office Suite, as well as integration between standard industry tools and internal proprietary software.
                </p>
            </div>

            <div className="box">
                <p>
                    1 Year Experience in Web Development, coding primarily in Javascript.
                </p>
                <hr />
                <p>
                    Familiar with Frameworks such as; React, BootStrap, Bulma, and Tailwind
                </p>
                <p>
                    Packages such as; ExpressJS, NodeJS, HandleBars
                </p>
                <p>
                    and Software such as; MySQL, MongoDB, Insomnia, and HerokuCLI
                </p>
            </div>
            <div className="box">
                <p style={{"textAlign":"center"}}>
                    Click <Link to="./Resume.odt" target="_blank" download>Here</Link> to download a copy of my Resume.
                </p>
            </div>
        </div>
    )
};

export default Resume;