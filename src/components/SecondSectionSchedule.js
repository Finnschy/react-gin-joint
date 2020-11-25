import ScheduleData from "../data/Schedule.json"
const { default: ScheduleCard } = require("./ScheduleCard")

const SecondSectionSchedule = () => {
    return ( 
        <section className="SecondSectionSchedule">
            <p id="covidNote">Due to COVID-19 and the temporary closing of Bathtub Gin, our nightly entertainment is currently on pause. Stay tuned for updates on our reopening date and new events, coming soon!</p>
            <article className="SecondSectionGrid">
            {ScheduleData.map(singleSchedule => <ScheduleCard 
                Schedule={singleSchedule}
                key={singleSchedule.id}
            />)}
            </article>
        </section>
     );
}
 
export default SecondSectionSchedule;