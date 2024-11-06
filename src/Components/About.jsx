import React from 'react'
import Navbar from './Navbar'
import FooterOnly from './FooterOnly'

const About = () => {
    return (
        <div>
            <Navbar />



            <div className="Aboutus_Section_Part-1">



                <div className="Part-1_box1">


                    <div className="Part-1_box1-1">


                        <div className="Vector_1"><img src="src/assets/Vector.svg" alt="" /></div>
                        <div className="Vector_2"><img src="src/assets/Vector.svg" alt="" /></div>




                        <div className="Frame-1">

                        </div>

                        <div className="profile-details">

                            UI / UX Designer , Web Devloper

                        </div>


                        <div className="rectangle"></div>

                        <div className="line-arrow"></div>

                        <div className="profile-border">

                            <img src="src/assets/profile.png" alt="" />

                        </div>

                        <div className="icon_box LinkedIn">

                            <img src="src/assets/LinkedIn.svg" alt="" />

                        </div>

                        <div className="icon_box Twitter">

                            <img src="src/assets/Twitter.svg" alt="" />

                        </div>

                        <div className="icon_box Instagram">

                            <img src="src/assets/Instagram.svg" alt="" />

                        </div>

                        <div className="brick"></div>



                    </div>








                </div>

                <div className="Part-1_box2">



                    <div className="about-us-title">

                        About Us

                    </div>

                    <div className="profile-description">



                        <div className="profile-description_text">

                            Hello! i am
                            <span> Goutam khanna</span> ,
                            Creative <span> Developer</span> Who love
                            Bleanding <span> Design</span> with Code




                        </div>



                    </div>



                    <div className="site-offers-section">

                        <div>
                            <h1>Our Site Offers:</h1>

                            <ul className='site-features-list' >

                                <li>Personalized Recommendations: Discover movies tailored to your tastes.</li>
                                <li>Curated Lists: Explore films through expert-curated lists and reviews.</li>
                                <li>User-Friendly Design: Enjoy a sleek, intuitive interface crafted for movie lovers.</li>

                            </ul>
                        </div>

                    </div>


                </div>


            </div>


            <div className="horizontal-line"></div>


            <div className="Aboutus_Section_Part-2">



                <div className="Part-2_box1">

                    <div className="profile-description-2">

                        <div className="profile-description-text-2">


                            Hello! i am <span> Kamlesh Chouhan </span>,Creative <span> Developer</span> Who love Bleanding<span> Design</span> with Code


                        </div>



                    </div>


                    <div className="site-offers-section-2">
                        <h1>Our Story</h1>

                        <ul className='site-features-list-2' >

                            <li>[Your Website Name] was born from our shared passion for cinema and a desire to improve how people find great films. We’re excited to share our creation with the world!</li>


                        </ul>
                    </div>
                </div>

                <div className="Part-2_box2">

                    <div className="Part-2_box2-2">

                        <div className="Vector_1-2"><img src="src/assets/Vector.2.1.svg" alt="" /></div>
                        <div className="Vector_2-2"><img src="src/assets/Vector.2.2.svg" alt="" /></div>




                        <div className="Frame-1-2">

                        </div>

                        <div className="profile-details-2">

                            UI / UX Designer , Web Devloper

                        </div>


                        <div className="rectangle-2"></div>

                        <div className="line-arrow-2"></div>

                        <div className="profile-border-2">

                            <img src="src/assets/profile-2.png" alt="" />

                        </div>

                        <div className="icon_box LinkedIn-2">

                            <img src="src/assets/LinkedIn.svg" alt="" />

                        </div>

                        <div className="icon_box Twitter-2">

                            <img src="src/assets/Twitter.svg" alt="" />

                        </div>

                        <div className="icon_box Instagram-2">

                            <img src="src/assets/Instagram.svg" alt="" />

                        </div>

                        <div className="brick-2"></div>



                    </div>







                </div>


            </div>

            <div className="horizontal-line"></div>

            <div className="mission-title">

                <span>Our Mission</span>

            </div>

            <div className="mission-text">

                <p>Our goal is simple: to make sure anyone who loves watching movies can discover great films effortlessly. We’ve combined our love for cinema with our tech and design skills to create a platform that offers personalized movie suggestions and curated lists, all crafted with a fresh, student-driven perspective.</p>

            </div>


            <div className="horizontal-line"></div>


            <div className="contact-title">

                <span>Contact Us</span>

            </div>

            <div className="contact-text">

                <p>We’d love to hear from you! [Contact Us] or follow us on [Social Media] for the latest updates and recommendations.
                    Thanks for visiting [Your Website Name]! Enjoy exploring and discovering your next great movie!</p>

            </div>


            <div className="horizontal-line"></div>





            <FooterOnly />
        </div>
    )
}

export default About