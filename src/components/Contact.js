import Footer from "./Footer"
const { default: ContactFirstSection } = require("./ContactFirstSection")
const { default: ContactSecondSection } = require("./ContactSecondSection")
const Contact = () => {
    return (  
        <section>
            <ContactFirstSection />
            <ContactSecondSection />

            <Footer />
        </section>
    );
}
 
export default Contact;