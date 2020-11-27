const ContactThirdSection = () => {
    return (
        <section className="ContactThirdSection">
            <article>
                <div id="contactAddress">
                    <h5>GET IN TOUCH</h5>
                    <h2>132 9th Avenue <br /> New York, NY 10011 <br /> 646-559-1671 <br /> info@btgnyc.com</h2>
                </div>
                <div id="contactTimes">
                    <div>
                        <h5>HOURS OF OPERATION</h5>
                        <p>MONDAY</p>
                        <p>TUESDAY - FRIDAY</p>
                        <p>SATURDAY</p>
                        <p>SUNDAY</p>
                    </div>
                    <div>
                        <p>8AM – 4PM</p>
                        <p>8AM – 10PM</p>
                        <p>9PM – 10PM</p>
                        <p>9AM – 4PM</p>
                    </div>
                </div>
            </article>
            <article >
                <form action="" className="FormFlex">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Mobile" />
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                    <button className="button">Submit</button>
                </form>
            </article>
        </section>
    );
}

export default ContactThirdSection;