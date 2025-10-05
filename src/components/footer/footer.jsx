import "../footer/footer.css"
import Logo from "../../assets/Logo.svg";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";


const Footer = () => {
    return( 
            <section>
                <section>
                <div className="footer flex justify-between p-20">
                    <div className="news-letter-div">
                        <p>Stay in the know</p>
                        <h1>Subscribe mailing list</h1>
                        <form action="">
                            <input type="text" placeholder="Email address"/>
                            <button>SUBSCRIBE</button>
                        </form>
                    </div>

                    <div className="media-div">
                        <p>Follow me</p>
                        <div className="flex gap-10">
                        <a href="#"><img src={instagram} alt="instagram" width={20} /></a>
                        <a href="#"><img src={youtube} alt="youtube" width={20} /></a>
                        <a href="#"><img src={facebook} alt="facebook" width={20} /></a>
                        </div>
                    </div>
                </div>
                </section>

                <section className="links-section flex justify-between p-10">
                    <div className="link-section-1 flex gap-32">
                        <div className="logo-footer-div">
                            <a href="#"><img src={Logo} alt="Logo" className="mb-7" /></a>
                        <p>
                        Duis nulla eleifend tincidunt cum amet <br />
                        id mi, sodales amet ut non habitant <br />
                        accumsan risus, malesuada sit nibh <br />
                        consectetur rutrum quis augue.
                        </p>
                        </div>
                        <div className="first-links-div">
                            <p className="mb-7">About Me</p>
                            <ul className="space-y-2">
                                <li><a href="#">My Story</a></li>
                                <li><a href="#">My Expertise</a></li>
                                <li><a href="#">Awards & Honors</a></li>
                                <li><a href="#">News & Blog</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="link-section-2 flex gap-32">
                        <div className="second-links-div">
                            <p className="mb-7">My Offering</p>
                            <ul className="space-y-2">
                                <li><a href="#">Baking Course</a></li>
                                <li><a href="#">Virtual Classes</a></li>
                                <li><a href="#">Private Events</a></li>
                                <li><a href="#">Gift Certificates</a></li>
                            </ul>
                        </div>

                        <div className="third-links-div">
                            <p className="mb-7">Contact information</p>
                            <ul className="space-y-2">
                                <li>123 Fifth Avenue, New York, NY 12004.</li>
                                <li>United States.</li>
                                <li><a href="mailto:adegboyega00001@gmail.com" className="underline">Contact us through mail.</a></li>
                                <li>+234-907-007-9206</li>
                            </ul>
                        </div>
                    </div>
                </section> 
                <footer>
                    <div className="copyright-section p-7">
                        <p>&copy;2025 Learn Baking, Olamide INC, All Rights Reserved. </p>
                        <p>Powered by Learn Baking.</p>
                    </div>
                </footer>
            </section>
    );
};

export default Footer;