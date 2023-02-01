const ContactMe = () => {
    return (
        <div style={{ margin: "auto", width: "80%", marginTop: "15px", marginBottom: "15px" }}>
            <div className="box">
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="e.g John Doe"/>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input class="input" type="email" placeholder="e.g. johndoe@gmail.com"/>
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