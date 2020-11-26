import Header from '../components/Header';
import SecondSectionSchedule from "../components/SecondSectionSchedule"
import ThirdSectionFood from "../components/ThirdSectionFood"
import ForthSectionDrinks from "../components/ForthSectionDrinks"
import FirstSectionStory from './FirstSectionStory'
import Footer from "../components/Footer"
const Home = () => {
    return (
        <main>
            <Header />
            <FirstSectionStory />
            <SecondSectionSchedule />
            <ThirdSectionFood />
            <ForthSectionDrinks />
            <Footer />
        </main>
    );
}

export default Home;