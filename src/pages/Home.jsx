import Footer from "../components/footer/footer";
import Hero_section from "../components/heroSection/hero";
import Navbar from "../components/navbar/Navbar";
import Courses from "./allCourse";



const Home = () => {
    return(
        <div>
            <Navbar />
            <Hero_section />
            <Footer />
        </div>
    );
};

export default Home;