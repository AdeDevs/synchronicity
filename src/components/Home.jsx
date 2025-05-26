export default function HomePage() {
    return (
        <div className="home-page">
            <header className="hero">
                <div className="hero-bg"></div>
                <div className="hero-txt">
                    <h1>synchronicity</h1>
                    <ul>
                        <li><a href="#">hello@testmail.com</a></li>
                        <li>it is time for your youthful dreams to be realized quickly</li>
                        <li>&copy;2025</li>
                    </ul>
                </div>
            </header>
            <main className="home-main">
                <h1 className="intro">
                    <span className="who">So, who we are? </span>We're a community that nurtures ideas fosters collaboration, and <span className="special collab"></span> <span className="special propel"></span> propels individuals excellence
                </h1>
                <section className="done">
                    <div className="done-sub">
                        <p>and now, you must know what we have done so far.</p>
                    </div>
                    <div className="done-main">
                        <h1>Experience the harmony in creation as we unveil the symphony of projects</h1>
                        <p>
                            Each project is a unique composition, blending artistic brilliance with technical expertise. Experience the harmony in creation and witness how our team transforms ideas into awe-inspiring digital realities.
                        </p>
                        <button>see more</button>
                    </div>
                </section>
                <section className="projects">
                    <div className="project-box">
                        <div className="project ethereal"> <p className="see">see details</p></div>
                        <h1>Ethereal Utopia <span>&nbsp; Podcast</span></h1>
                    </div>
                    <div className="project-box">
                        <div className="project carmos"> <p className="see">see details</p></div>
                        <h1>Carmos <span>&nbsp; Movie Production</span></h1>
                    </div>
                    <div className="project-box">
                        <div className="project bowana"> <p className="see">see details</p></div>
                        <h1>Bowana <span>&nbsp; Marketing</span></h1>
                    </div>
                    <div className="project-box">
                        <div className="project gordois"> <p className="see">see details</p></div>
                        <h1>Gordois <span>&nbsp; Creative Direction</span></h1>
                    </div>
                </section>
            </main>
        </div>
    )
}