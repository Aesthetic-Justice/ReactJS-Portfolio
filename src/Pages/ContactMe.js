const ContactMe = () => {
    return (
        <div style={{ margin: "auto", width: "80%", marginTop: "15px", marginBottom: "15px" }}>
            <div className="box">
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="e.g John Doe"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="e.g. johndoe@gmail.com"/>
                    </div>
                </div>

                <div>
                    <button>Submit</button>
                </div>
            </div>
            <div className="box">
                <p>
                    Please feel free to contact me on <a href="https://www.linkedin.com/in/hakim-yussuf-488231243" alt="My LinkedIn Profile">LinkedIn</a>, or send me an E-mail at HakimYussuf@gmail.com.
                </p>
            </div>
        </div>
    )
};

export default ContactMe;