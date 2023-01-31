const AboutMe = () => {
    return (
        <section class="block">
            <div class="container is-fluid columns is-vcentered">
                <div class="column is-2">
                    <h2 class="subtitle is-4" id="catAboutMe">About Me</h2>
                </div>
                <div class="column">
                    <div class="columns">
                        <div class="column is-4">
                            <p class="is-12">Avatar/Img:</p>
                            <img src="./assets/Art/selfie.jpg" alt="a meme" class="is-12"/>
                        </div>
                        <div class="column">
                            <p>
                                Born and Raised: West Philadelphia
                            </p>
                            <p>
                                Spent most of my days: On the playground, chilling out max and relaxing all cool
                            </p>
                            <p>
                                Where I played B-Ball: Outside of the school
                            </p>
                            <p>
                                etc. etc. the rest of the Fresh Prince theme song lyrics.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AboutMe;