import { useState } from "react"
import { NavLink } from "react-router-dom";

export default function HomePage() {
    const [readMore, setReadMore] = useState([
        false, false, false, false, false
    ]);

    function ToggleRead (index) {
        setReadMore((prevReadMore) =>
        prevReadMore.map((item, i) => (i === index ? !item : item))
      );
    }
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
                <section className="done exploration">
                    <div className="done-sub">
                        <p>What we do? Of course we make impactful collaborations</p>
                    </div>
                    <div className="done-main">
                        <h1>A Fascinating Exploration into Our Artistic Craftsmanship</h1>
                        <p>
                            Our projects are not just creations; they are a testament to the fusion of art and skill. Join us in this fascinating exploration and witness how we redefine the boundaries of digital craftsmanship.
                        </p>
                    </div>
                </section>
                <section className="services">
                    <div className="service-item">
                        <div className="service-title">
                            <h1>Mastery Training</h1>
                            <button onClick={() => ToggleRead(0)}>Read More</button>
                        </div>
                        <div className={`service-desc ${readMore[0] ? "show" : ""}`}>
                            <p>
                                Our film production goes beyond the ordinary, weaving visual tales that leave a lasting impact. From script to screen we meticulously bring your vision to life, creating cinematic masterpieces that transcend the boundaries of conventional storytelling.
                            </p>
                            <div className="service-img-box">
                                <div className="service-img water"></div>
                                <div className="service-img back"></div>
                            </div>
                        </div>
                    </div>
                    <div className="service-item">
                        <div className="service-title">
                            <h1>Podcast Mastery</h1>
                            <button onClick={() => ToggleRead(1)}>Read More</button>
                        </div>
                        <div className={`service-desc ${readMore[1] ? "show" : ""}`}>
                            <p>
                                Our film production goes beyond the ordinary, weaving visual tales that leave a lasting impact. From script to screen we meticulously bring your vision to life, creating cinematic masterpieces that transcend the boundaries of conventional storytelling.
                            </p>
                            <div className="service-img-box">
                                <div className="service-img water"></div>
                                <div className="service-img back"></div>
                            </div>
                        </div>
                    </div>
                    <div className="service-item">
                        <div className="service-title">
                            <h1>Cinematic Brilliance</h1>
                            <button onClick={() => ToggleRead(2)}>Read More</button>
                        </div>
                        <div className={`service-desc ${readMore[2] ? "show" : ""}`}>
                            <p>
                                Our film production goes beyond the ordinary, weaving visual tales that leave a lasting impact. From script to screen we meticulously bring your vision to life, creating cinematic masterpieces that transcend the boundaries of conventional storytelling.
                            </p>
                            <div className="service-img-box">
                                <div className="service-img water"></div>
                                <div className="service-img back"></div>
                            </div>
                        </div>
                    </div>
                    <div className="service-item">
                        <div className="service-title">
                            <h1>Design Alchemy</h1>
                            <button onClick={() => ToggleRead(3)}>Read More</button>
                        </div>
                        <div className={`service-desc ${readMore[3] ? "show" : ""}`}>
                            <p>
                                Our film production goes beyond the ordinary, weaving visual tales that leave a lasting impact. From script to screen we meticulously bring your vision to life, creating cinematic masterpieces that transcend the boundaries of conventional storytelling.
                            </p>
                            <div className="service-img-box">
                                <div className="service-img water"></div>
                                <div className="service-img back"></div>
                            </div>
                        </div>
                    </div>
                    <div className="service-item">
                        <div className="service-title">
                            <h1>Equipment Support Crew</h1>
                            <button onClick={() => ToggleRead(4)}>Read More</button>
                        </div>
                        <div className={`service-desc ${readMore[4] ? "show" : ""}`}>
                            <p>
                                Our film production goes beyond the ordinary, weaving visual tales that leave a lasting impact. From script to screen we meticulously bring your vision to life, creating cinematic masterpieces that transcend the boundaries of conventional storytelling.
                            </p>
                            <div className="service-img-box">
                                <div className="service-img water"></div>
                                <div className="service-img back"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="done exploration">
                    <div className="done-sub">
                        <p>And, we have one more information for you...</p>
                    </div>
                    <div className="done-main">
                        <h1>Crafting Careers and Futures, Join Trivoumvant Creative Collective</h1>
                        <p>
                            The doors to a realm of limitless creativity are wide open, and we are inviting you to step into a world where your passion meets boundless opportunities.
                        </p>
                        <button>view opportunities</button>
                    </div>
                </section>
                <section className="end">
                    <div className="end-bg"></div>
                    <div className="end-desc">
                        <h1>We are there for your <span className="eye"></span> hurdle</h1>
                        <p>
                            Let's craft a digital journer that transcends expectations. Join hands with us, and together, let's propel your business into a realm of unprecendented growth and creative excellence.
                        </p>
                        <button>start your journey</button>
                    </div>
                </section>
            </main>
            <footer>
                <div className="main-foot">
                    <h1><span className="logo"></span> Trivoumvant</h1>
                    <div className="small">
                    <ul>
                        <li> <NavLink to="/">Home</NavLink> </li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Work</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Career</a></li>
                    </ul>
                    <ul className="socials">
                        <li className="facebook"></li>
                        <li className="twitter"></li>
                        <li className="insta"></li>
                        <li className="youtube"></li>
                    </ul>
                    </div>
                </div>
                <div className="sub-foot">
                    <ul>
                        <li>&copy; AdeDevs All Rights Reserved</li>
                        <div>
                        <li>Terms Of Use</li>
                        <li>Privacy Policy</li>
                        </div>
                    </ul>
                </div>
            </footer>
        </div>
    )
}