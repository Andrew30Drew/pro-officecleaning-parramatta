import Ourservices from "../components/Ourservices";
import Faq from "../components/sevices/Faq";
import ServiceHero from "../components/sevices/ServiceHero";


export default function Services() {
    return(
        <div>
            <ServiceHero />
           <Ourservices bg_color="bg-white" />
            <Faq />
        </div>
    )
}