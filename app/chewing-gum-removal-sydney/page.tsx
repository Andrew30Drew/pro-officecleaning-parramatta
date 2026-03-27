
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Chewing Gum Removal Sydney | Professional Gum Removal Services | Pro Clean Corp',
    description: 'Professional chewing gum removal in Sydney. Hot water steam extraction on footpaths, shopping centres, schools, and car parks. Before-and-after evidence provided. Call 1300 494 983.',
    keywords: 'chewing gum removal sydney, gum removal service, footpath gum cleaning, shopping centre gum removal, pavement cleaning sydney, steam gum removal, pressure wash gum sydney, school gum removal, car park gum cleaning, commercial gum cleaning',
    openGraph: {
        title: 'Chewing Gum Removal Sydney | Professional Gum Removal Services | Pro Clean Corp',
        description: 'Eliminate unsightly gum from footpaths, shopping centres, schools, and car parks across Sydney. Specialist hot water extraction with before-and-after photo evidence. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/chewing-gum-removal-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Chewing gum removal Sydney - Pro Clean Corp' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/chewing-gum-removal-sydney' },
};

export default function ChewingGumRemovalPage() {
    const serviceInfo = {
        title: "Chewing Gum Removal Sydney",
        description: "Pro Clean Corp provides specialist chewing gum removal services across Sydney, targeting the black, hardened gum deposits that accumulate on footpaths, shopping centre concourses, school grounds, public plazas, and car parks, creating an unsanitary and unprofessional appearance that reflects poorly on property owners and managers. Standard pressure washing cannot effectively remove embedded gum — it requires specialised hot water steam extraction equipment operating at high temperature that liquefies the gum adhesive, allowing complete removal without damaging the underlying surface. Our operators document every job with before-and-after photo evidence, giving property managers clear proof of the work completed for reporting and compliance purposes.",
        benefits: [
            "Hot Water Steam Extraction: Specialist high-temperature steam lances operating at up to 180°C liquefy and extract hardened chewing gum from concrete, pavers, tiles, and asphalt without surface damage.",
            "Specialist Removal Equipment: Dedicated gum removal machines combine superheated water with targeted spray nozzles designed specifically for gum remediation at commercial scale.",
            "Footpaths & Public Plazas: Complete gum removal from retail strip footpaths, town centre public spaces, transport interchange concourses, and pedestrian mall surfaces.",
            "Shopping Centres: Systematic gum removal across entire shopping centre floor areas, food court zones, car park entry points, and external plaza surfaces.",
            "Schools & Educational Facilities: Safe, chemical-free hot water gum removal from school playgrounds, covered walkways, canteen areas, and sports court surfaces.",
            "Before-and-After Photo Evidence: Comprehensive photographic documentation of every gum removal job, providing property managers with clear evidence of work completed for council, body corporate, or management reporting."
        ],
        process: [
            "Site Survey & Gum Mapping: Our technician surveys the target area, maps gum density and distribution, and identifies surface types to select appropriate temperature settings and extraction heads.",
            "Surface Preparation: The area is swept clear of loose debris and wet floor signage or pedestrian exclusion barriers are established for public safety during the cleaning operation.",
            "Hot Water Steam Extraction: Specialist gum removal equipment applies superheated steam under controlled pressure to each gum deposit, liquefying the adhesive and allowing complete mechanical removal.",
            "Final Rinse & Photo Documentation: A final rinse removes any residual gum residue, and before-and-after photographs are taken to document the completed result for property management records."
        ],
        whyChooseUs: [
            "Dedicated Gum Removal Equipment: We invest in purpose-built gum removal machines — not repurposed pressure washers — delivering results that standard cleaning equipment cannot match.",
            "Surface-Safe Temperatures: Our operators calibrate steam temperature and pressure to the specific surface type, preventing damage to concrete, tiles, pavers, asphalt, and decorative paving.",
            "After-Hours Availability: We schedule gum removal in busy public areas, shopping centres, and high-traffic footpaths during overnight or early morning hours to avoid pedestrian disruption.",
            "Large-Scale Capability: From a single retail tenancy footpath to an entire shopping centre car park concourse, we deploy appropriately scaled teams and equipment for any job size.",
            "Photo Evidence & Reporting: Comprehensive before-and-after photographic records provided with every job, supporting council compliance, body corporate reporting, and property management accountability.",
            "Fully Insured: $20 million public liability insurance covering all gum removal work in public, retail, and commercial environments."
        ],
        serviceAreas: ["Sydney CBD", "Parramatta", "North Sydney", "Chatswood", "Penrith", "Liverpool", "Blacktown", "Bondi", "Sutherland", "Hornsby"],
        faqs: [
            {
                question: "Why can't regular pressure washing remove chewing gum?",
                answer: "Regular cold water pressure washing does not generate sufficient heat to liquefy the adhesive polymers in chewing gum. It spreads and smears the gum rather than removing it. Our specialist hot water steam extraction equipment operates at temperatures up to 180°C, which melts the gum adhesive and allows complete mechanical removal from the surface."
            },
            {
                question: "Will gum removal damage my concrete or paving?",
                answer: "No. Our technicians are trained to calibrate steam temperature and pressure to the specific surface type. We use appropriate settings for standard concrete, decorative paving, tiles, natural stone, and asphalt that remove gum completely without pitting, etching, or discolouring the underlying surface."
            },
            {
                question: "Can you remove gum from an entire shopping centre footprint?",
                answer: "Yes. We have the equipment fleet and team capacity to systematically clean the entire floor area of large shopping centres, including internal concourses, food court areas, external plazas, and car park entry zones. We schedule large-scale projects overnight or across multiple sessions to minimise disruption to trading."
            },
            {
                question: "Do you provide proof of work for body corporate or council reporting?",
                answer: "Yes. We provide before-and-after photographic evidence for every gum removal job, along with a completion report detailing the area treated, method used, and date of service. This documentation is suitable for body corporate records, council compliance requirements, and property management reporting."
            },
            {
                question: "How often should gum removal be scheduled for a shopping centre?",
                answer: "For busy Sydney shopping centres, we recommend quarterly gum removal from all high-footfall concourse areas, with monthly targeted treatment in food court zones and main entrances. We can design a scheduled maintenance program with consistent teams and fixed pricing to keep your centre consistently gum-free."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Chewing gum removal Sydney - hot water steam extraction from footpath" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney professional gum removal from shopping centre" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Chewing Gum Removal Sydney"
                serviceDescription="Professional chewing gum removal services in Sydney using hot water steam extraction on footpaths, shopping centres, schools, and car parks with before-and-after photo documentation."
                serviceUrl="/chewing-gum-removal-sydney"
                serviceType="Chewing Gum Removal"
                price="$$"
                additionalServices={["Footpath Cleaning", "Shopping Centre Gum Removal", "School Ground Cleaning", "Car Park Gum Removal", "Public Plaza Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
