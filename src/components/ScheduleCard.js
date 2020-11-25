const ScheduleCard = (props) => {
    return (  
        <section className="ScheduleCard">
            <article>
                <div style={{background: `url(${props.Schedule.img}) center / cover no-repeat`}}>
                    <h5>{props.Schedule.titleImg}</h5>
                </div> 
                <h6>{props.Schedule.captionWeekday}</h6>
                <h6>{props.Schedule.captionTime}</h6>
                <p>{props.Schedule.mainText}</p>
            </article>
        </section>
    );
}
 
export default ScheduleCard;