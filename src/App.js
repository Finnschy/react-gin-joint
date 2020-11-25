import './App.css';
import Header from './components/Header';
import FirstSectionStory from "./components/FirstSectionStory"
import SecondSectionSchedule from "./components/SecondSectionSchedule"
import ThirdSectionFood from "./components/ThirdSectionFood"
import ForthSectionDrinks from "./components/ForthSectionDrinks"
import Footer from "./components/Footer"

function App() {
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

export default App;
