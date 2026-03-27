import { Metadata } from 'next';
import Link from 'next/link';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Shopping Centre Cleaning Sydney NSW | Retail & Mall Cleaning | Pro Clean Corp',
    description: 'Professional shopping centre and retail cleaning across Sydney NSW. Food courts, amenities, common areas & car parks. Daytime porter services & after-hours cleaning. Call 1300 494 983.',
    keywords: 'shopping centre cleaning Sydney, retail cleaning Sydney, shopping mall cleaning Sydney, food court cleaning Sydney, retail precinct cleaning NSW, centre management cleaning Sydney, commercial cleaning shopping centre',
    openGraph: {
        title: 'Shopping Centre Cleaning Sydney NSW | Retail & Mall Cleaning | Pro Clean Corp',
        description: 'Specialist shopping centre and retail cleaning across Sydney. Food courts, amenities, common areas, car parks and daytime porter services. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/shopping-centre-cleaning-sydney',
        type: 'website',
        images: [{ url: 'https://www.procleancorp.com.au/images/services/commercial.webp', alt: 'Shopping centre cleaning services in Sydney NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/shopping-centre-cleaning-sydney' },
};

const faqs = [
    {
        question: 'What cleaning services do you provide for Sydney shopping centres?',
        answer: 'Our Sydney shopping centre cleaning services cover the full spectrum of retail environment cleaning needs: common area floor cleaning including marble, tile and terrazzo surfaces, food court daily and between-meal cleaning, public amenity and restroom servicing, car park sweeping and maintenance, lift and escalator cleaning, entry and exit point maintenance, bin management throughout the centre and after-hours deep cleaning programmes. We also provide daytime porter and concierge cleaning services for centres requiring on-site hygiene staff during trading hours.',
    },
    {
        question: 'Can you provide daytime cleaning staff during shopping centre trading hours?',
        answer: 'Yes. Daytime porter and concierge cleaning is a core part of our shopping centre offer. We deploy appropriately uniformed and trained staff during centre trading hours to address continuous public hygiene needs — toilet block presentation, food court spill response, common area tidy, rubbish bin monitoring and emergency cleaning — ensuring the centre maintains a consistently high standard of cleanliness throughout the trading day without centre management needing to coordinate multiple responses.',
    },
    {
        question: 'How do you manage food court cleaning in Sydney shopping centres?',
        answer: 'Food court cleaning in shopping centres requires a continuous, structured approach throughout the trading day. We provide regular table and seating wipe-downs between customer sittings, prompt spill response, tray return area management, waste station servicing, floor sweeping and mopping between meal service peaks, and a comprehensive after-hours deep clean of all food court surfaces including floors, waste infrastructure and all fixed seating. Our food court protocols comply with NSW Food Authority requirements for public food-service environments.',
    },
    {
        question: 'Do you clean shopping centre car parks in Sydney?',
        answer: 'Yes. Car park cleaning is an important but often overlooked component of the overall shopping centre presentation. We provide regular sweeping and blowing of car park decks, stairwell and lift lobby cleaning within the car park structure, periodic pressure washing of heavily soiled areas, drain and gutter maintenance, and litter removal. A well-maintained car park creates a positive first impression before customers even enter the centre and reduces slip and liability risks for the centre owner.',
    },
    {
        question: 'Can you work with Sydney shopping centre management companies?',
        answer: 'Yes. We work directly with shopping centre management companies, asset managers and strata-managed retail properties across Sydney. We understand the documentation, reporting and accountability requirements of centre management — service reports, incident logs, KPI tracking — and provide a professional contractor relationship that integrates with your existing centre management systems. We offer dedicated account management for all major retail client accounts.',
    },
];

export default function ShoppingCentreCleaningSydneyPage() {
    const serviceInfo = {
        title: 'Shopping Centre Cleaning Sydney NSW',
        description: 'Pro Clean Corp delivers specialist shopping centre and retail precinct cleaning services across Sydney, providing centre management companies, asset managers and retail property owners with the comprehensive, reliable cleaning programme that high-traffic public retail environments demand. Shopping centres are among the most complex cleaning environments in the commercial sector — combining the challenges of food service hygiene in food courts, high-volume public amenities, premium presentation requirements in common areas, continuous traffic on expensive floor surfaces and the need for both scheduled after-hours deep cleaning and daytime reactive maintenance.\n\nOur Sydney shopping centre cleaning teams are experienced in retail environments from neighbourhood strip shopping centres and small neighbourhood malls to large regional shopping centres with multi-level car parks, entertainment precincts and food court expansions. We provide the full spectrum of retail cleaning services — from the daily deep clean of food court areas after closing to the ongoing porter service that keeps amenities, common areas and entry points presentable throughout trading hours. We work within centre management\'s operational framework, integrate with existing reporting systems and provide the documentation and accountability that professional retail asset management requires.',
        benefits: [
            'High-traffic common area floor cleaning covering marble, terrazzo, ceramic tile and polished concrete surfaces using industrial floor scrubbers and appropriate cleaning systems to maintain presentation and slip-resistance standards',
            'Food court deep cleaning after trading hours with full table and seating sanitisation, floor scrubbing, waste infrastructure servicing, tray return area cleaning and all food-contact surface disinfection to NSW Food Authority standards',
            'Public amenity and restroom servicing providing consistently high presentation throughout trading hours and a comprehensive after-hours deep clean, including all fixtures, floors, walls, mirror polishing and consumables restocking',
            'Daytime porter cleaning service with uniformed staff monitoring and maintaining common areas, food courts, toilets and entry points throughout trading hours, providing immediate response to spills, accidents and hygiene incidents',
            'Car park and external area cleaning including deck sweeping, stairwell and lift lobby maintenance, periodic pressure washing, drain cleaning and litter removal throughout the centre\'s external and parking infrastructure',
            'Lift, escalator and travelator cleaning covering all glass, stainless steel, floor surfaces, handrails and mechanical components, maintaining the presentation and safety of all vertical transport throughout the retail complex'
        ],
        process: [
            'Consultation with centre management or the asset manager to understand the centre\'s full scope, peak trading hours, cleaning priority zones, existing contractor arrangements and any specific presentation standards or KPIs required',
            'Comprehensive cleaning programme developed covering daily trading-hours porter services, after-hours deep cleaning schedules and periodic maintenance cleaning for specialist areas such as car parks and external precincts',
            'Deployment of appropriately scaled cleaning teams for each programme — porter staff during trading, deep cleaning crews after hours — working to detailed zone checklists with supervisory oversight and shift sign-off',
            'Ongoing reporting to centre management through service logs, incident reports and KPI tracking, with a dedicated account manager available for direct communication and rapid response to management requests'
        ],
        whyChooseUs: [
            'Specialist retail and shopping centre cleaning experience serving Sydney shopping precincts, neighbourhood centres and large regional malls, with an understanding of the operational complexity and presentation standards of retail environments',
            'Full-service capability covering all aspects of shopping centre cleaning — common areas, food courts, amenities, car parks, external precincts — under a single integrated contract for simplified management and accountability',
            'Daytime porter and concierge cleaning capability deploying uniformed, trained and customer-appropriate staff during trading hours to maintain continuous hygiene and presentation standards throughout the operating day',
            'Food court and food-safe hygiene expertise ensuring compliance with NSW Food Authority requirements and NSW Health guidelines for public food service environments within retail precincts',
            'Centre management compatible reporting systems with service logs, incident documentation and KPI tracking that integrate with standard retail asset management reporting frameworks and owner accountability requirements',
            'Scalable service delivery that matches your centre\'s size, from compact neighbourhood shopping strips to large regional centres with multiple buildings, entertainment components and underground car parks'
        ],
        serviceAreas: ['Parramatta', 'Chatswood', 'Penrith', 'Liverpool', 'Blacktown', 'Bondi Junction', 'Hornsby', 'Miranda', 'Burwood', 'Hurstville'],
        faqs,
        images: [
            { src: '/images/services/commercial.webp', alt: 'Shopping centre cleaning services Sydney NSW' },
            { src: '/images/services/commercial.webp', alt: 'Retail and food court cleaning Sydney NSW' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Shopping Centre Cleaning Sydney NSW"
                serviceDescription="Specialist shopping centre and retail precinct cleaning across Sydney NSW. Common areas, food courts, amenities, car parks, porter services and after-hours deep cleaning."
                serviceUrl="/shopping-centre-cleaning-sydney"
                serviceType="Shopping Centre & Retail Cleaning"
                price="$$-$$$"
                additionalServices={['Food Court Cleaning', 'Public Amenities Cleaning', 'Car Park Cleaning', 'Daytime Porter Service', 'Retail Strip Cleaning']}
                faqs={faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-darkblue mb-6">Related Cleaning Services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { href: '/commercial-cleaning', label: 'Commercial Cleaning Services' },
                            { href: '/retail-cleaning-service-sydney', label: 'Retail Cleaning Service Sydney' },
                            { href: '/commercial-cleaning-sydney', label: 'Commercial Cleaning Sydney' },
                            { href: '/office-cleaning-sydney', label: 'Office Cleaning Sydney' },
                            { href: '/industrial-cleaning-sydney', label: 'Industrial Cleaning Sydney' },
                            { href: '/strata-cleaning-sydney', label: 'Strata Cleaning Sydney' },
                        ].map((link) => (
                            <Link key={link.href} href={link.href} className="block p-4 bg-slate-50 rounded-lg hover:bg-green-50 hover:text-greenprimary transition-colors font-medium text-gray-700">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
