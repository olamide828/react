import "../../components/heroSection/hero.css";
import heroImage from "../../assets/baking.jpg";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import bakingCourse2 from "../../assets/baking-2.jpg";
import bakingCourse3 from "../../assets/baking3.jpg";
import bakingCourse4 from "../../assets/baking4.jpg";
import learnBaking1 from "../../assets/learnBaking-1.jpg";
import learnBaking2 from "../../assets/learnBaking-2.jpg";
import learnBaking3 from "../../assets/learnBaking-3.jpg";
import reviewer1 from "../../assets/reviewer1.jpg";
import reviewer2 from "../../assets/reviewer2.jpg";
import reviewer3 from "../../assets/reviewer3.jpg";
import reviewer4 from "../../assets/reviewer4.jpg";


const Hero_section = () => {
    return(
        <section>
             {/* HERO-SECTION */}
            <main>
                   <div className="hero-container flex justify-between p-10 pt-20 bg-pink-100">
                     <div>
                        <div className="empty-div"></div>
                        <h1 className="hero-h1">Learn baking <br /> 
                        cookies, <br className="responsive-br2-768" />
                         pastries, cakes <br className="responsive-br-3-768" />
                          & more.</h1>

                        <p className="hero-font mb-10">Sed gravida ornare vestibulum turpis quam urna aliquam <br /> 
                        in feugiat lorem dolor pulvinar a, scelerisque amet ultrices <br />
                         consectetur magna sit.</p>

                         <div className="cta-btn-div flex space-x-10">
                            <button className="enroll-btn">ENROLL TODAY</button>
                         <div className="btn-container flex flex-row items-center gap-1">
                            <span className="view-svg"><svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill=" #351e20"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg></span>
                            <button className="view-btn">VIEW COURSES</button>
                         </div>
                         </div>
                         <div className="media-logo-div  flex gap-10">
                            <a href="#"><img src={instagram} alt="instagram-logo" width={20} className="media-logo" /></a>
                            <a href="#"><img src={youtube} alt="youtube-logo" width={20} className="media-logo"/></a>
                            <a href="#"><img src={facebook} alt="facebook-logo" width={20} className="media-logo"/></a>
                         </div>
                    </div>
                    <div>
                        <img src={heroImage} alt="heroImage" width={450} className="rounded-lg" />
                    </div>
                   </div>
            </main>

                <section>
                   <div className="about-div flex gap-10 p-7 pt-24">
                     <div>
                    <span className="about-hero-span">About Me</span>
                    <h1 className="about-hero-h1">I am Nicole, a professional <br className="responsive-media-about-br" /> baker <br className="responsive-media-about-br-2" />  with over 10 years <br className="eliminate-of-br" /> of <br className="responsive-media-about-br-3" /> experience</h1>
                    <img src={bakingCourse3} alt="baking-course-template-3.jpg" className="baking-course  rounded-3xl" width={500}/>
                    </div>
                    <div>
                        <img src={bakingCourse2} alt="baking-course-template-2.jpg" width={390} className="rounded-3xl mr-20" />
                    </div>
                   </div>


                   <div className="more-about-div flex justify-around mb-40">
                        <div className="baking-course4-container">
                            <img src={bakingCourse4} className="baking-course rounded-2xl ml-6" alt="baking-course-template-4.jpg" />
                        </div>
                        <div>
                            <p className="about-hero-p1">Vulputate egestas nullam volutpat diam nisi <br /> 
                            at venenatis adipiscing massa posuere massa <br />
                             nulla massa id integer.</p>
                            <p className="about-hero-p2">Cras ullamcorper fermentum arcu in sed <br />
                             fermentum velit nulla scelerisque pharetra <br />
                              tristique lectus justo faucibus purus est purus <br />
                               gravida nibh odio ante.</p>
                            <button className="more-about-info">MORE ABOUT ME</button>
                        </div>
                   </div>
                </section>

            <section className="bg-pink-100">
                <div className="before-footer-section">
                    <div className="square"><span></span></div>
                </div>

                <div className="before-footer pt-48 p-10 flex justify-between items-center">
                    <div className="before-footer-section-info">
                        <h1>
                            Popular courses
                        </h1>
                        <span>
                            Mi mattis tortor dolor vitae congue purus mi imperdiet <br />
                             aliquam ultrices nunc.
                        </span>
                    </div>

                    <button className="before-footer-section-info-button mt-5">VIEW ALL COURSES</button>
                </div>

                    <div className="card-div space-x-6 p-10">
                        <div className="baking-course-div">
                            <img src={learnBaking3} alt="learn-baking-course-1" />
                            <h1>Cookie Decorations</h1>
                            <p>Eu adipiscing nec erat amet at aliquam <br /> 
                            blandit gravida massa suscipit massa.</p>
                            <div className="baking-course-btn">
                            <button>Enroll Now</button>
                            </div>
                        </div>
                        <div className="baking-course-div">
                            <img src={learnBaking2} alt="learn-baking-course-2" />
                            <h1>Easy & versatile baking</h1>
                            <p>Eu adipiscing nec erat amet at aliquam <br />
                             blandit gravida massa suscipit.</p>
                            <div className="baking-course-btn">
                            <button>Enroll Now</button>
                            </div>
                        </div>
                        <div className="baking-course-div">
                            <img src={learnBaking1} alt="learn-baking-course-3" />
                            <h1>How to make butter cakes</h1>
                            <p>Eu adipiscing nec erat amet at aliquam <br />
                             blandit gravida massa.</p>
                            <div className="baking-course-btn">
                            <button>Enroll Now</button>
                            </div>
                        </div>
                    </div>
            </section>

            <section className="bg-pink-100 pt-24 p-8">
                <div className="after-card-main-div flex justify-between">
                    <div className="after-card-div">
                        <h1>Easy steps to follow</h1>
                        <p className="text-pink-400">
                            Mattis tortor dolor vitae <br className="vitae-br" /> congue purus <br className="purus-br" />
                             imperdiet  aliquam ultrices nunc.
                        </p>
                    </div>

                    <div className="after-card-div">
                        <h1>Delicious recipes guarantee</h1>
                        <p className="text-pink-400">
                            Mauris in nibh purus magnis eget dui <br className="dui-br" />
                            adipiscing eget ligula vitae.
                        </p>
                    </div>

                    <div className="after-card-div">
                        <h1>Clear audio & video</h1>
                        <p className="text-pink-400">Eu quis etiam auctor aenean nisl ut odio <br className="audio-br" />
                        ultricies massa orci mauris.</p>
                    </div>
                </div>

                <div className="review-section">
                        <h1>What my students say about  <br className="review-title" />  the courses</h1>
                </div>
                
                <div className="review-section-card">
                    <div className="reviewer">
                        <img src={reviewer1} alt="reviewer1" />
                        <div>
                            <p>
                                “Justo vestibulum risus imperdiet 
                                 consectetur  <br className="p-br" /> consectetur pretium 
                                  urna nibh augue etiam <br className="p-br" /> risus
                                   accumsan volutpat urna, eu
                                    semper enim,  <br className="p-br" /> est aliquam laoreet
                                     urna fringilla viverra.”
                            </p>
                            <span>Olivia Holmes</span>
                        </div>
                    </div>

                    <div className="reviewer">
                        <img src={reviewer2} alt="reviewer2" />
                        <div>
                            <p>
                                “Ullamcorper enim at amet eget 
                                 faucibus morbi <br className="p-br" />  ornare feugiat 
                                  posuere blandit donec sit quis <br className="p-br" /> 
                                   lectus eget faucibus scelerisque 
                                   cras duis.”
                            </p>
                            <span>Julia Moore</span>
                        </div>
                    </div>
                </div>

                <div className="review-section-card">
                    <div className="reviewer">
                        <img src={reviewer3} alt="reviewer3" />
                        <div>
                            <p>"Semper duis tellus orci nulla nibh 
                             elementum <br className="p-br" />  purus, pretium facilisi 
                              vel eget amet, sit diam <br className="p-br" />  lacinia 
                               tempus tristique euismod viverra 
                                fusce <br className="p-br" />  risus euismod amet."</p>
                            <span>Roberto Lopez</span>
                        </div>
                    </div>

                    <div className="reviewer">
                        <img src={reviewer4} alt="reviewer4" />
                        <div>
                            <p>
                                "Vitae erat pretium, interdum et, 
                                 massa, nunc <br className="p-br" />  rutrum at lectus lectus 
                                  aenean etiam nulla nibh <br className="p-br" />  ipsum 
                                   commodo eu nibh scelerisque 
                                    pharetra, <br className="p-br" /> sem netus risus."
                            </p>
                            <span>Maria Anna</span>
                        </div>
                    </div>
                </div>
            </section>
            <div className="square2-div">
                <div className="square2"><span></span></div>
            </div>
            

            <section>
               <div className="blogSection">
                    <div className="blog-title-btn px-10">
                        <h1>The latest from the blog</h1>
                        <button>VISIT BLOG</button>
                    </div>
               </div>

               <div className="blog-div flex justify-around mb-32">
                <div className="blog-title">
                    <a href="#"><h1>Diam aliquam sapien lorem <br className="blog-br" />
                     dapibus in</h1></a>
                    <p>Potenti tincidunt arcu euismod amet ac <br className="blog-p-br" />
                     curabitur iaculis in ut aliquet <br className="blog-v-p"/> facilisis <br className="blog-p-br" />
                      pharetra, pharetra dolor scelerisque.</p>
                    <button>READ MORE</button>
                </div>

                <div className="blog-title">
                    <a href="#"><h1>Sem volutpat nec bibendum <br className="blog-br" />
                     nec viverra rutrum</h1></a>
                     <p>
                        Ipsum amet, ultrices suscipit eu eget <br className="blog-p-br" />
                         tortor a, tincidunt urna, mattis <br className="blog-v-p" /> aliquam <br className="blog-p-br" />
                          duis eget luctus id.
                     </p>
                     <button>READ MORE</button>
                </div>

                <div className="blog-title">
                    <a href="#"><h1 >Congue faucibus magna in</h1></a>
                    <p>Non faucibus tincidunt commodo est arcu <br className="blog-p-br" />
                     ipsum augue ipsum at vitae, <br className="blog-v-p"/> nunc purus <br className="blog-p-br"  />
                      erat sem leo fames facilisis scelerisque <br className="blog-p-br"  />
                       sagittis, quam vitae.</p>
                    <button>READ MORE</button>
                </div>
               </div>
                <div className="square3-div mb-32">
                <div className="square3"><span></span></div>
            </div>

            <div className="cta-section">
                <p>Courses</p>
                <h1>Ready to bake like a <br />
                 pro at your own <br />
                  kitchen?</h1>
                <button>SIGN UP NOW</button>
            </div>
            </section>

            <div className="customize-btn space-x-2">
                <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80ZM260-440q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120-160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm200 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120 160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Z"/></svg></span>
                <button>Customize</button>
            </div>
        </section>
    );
};

export default Hero_section;