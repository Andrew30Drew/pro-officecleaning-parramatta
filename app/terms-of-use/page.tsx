'use client';
import React from 'react';

const TermsOfUse = () => {
  return (
    <div className='py-10 lg:py-24 flex justify-center'>
<div className=" w-full max-w-[1440px] px-5 md:px-10 lg:px-20  text-[#333]">
      <h1 className="text-3xl font-semibold text-greenprimary mb-8">Terms of Use</h1>

      {/* Section 1 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          By accessing and using Pro Clean Corp Cleaning Services&apos; website and services, you agree to be bound by these Terms of Use and all applicable laws and regulations.
        </p>
      </div>

      {/* Section 2 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Service Description</h2>
        <p>
          Pro Clean Corp Cleaning Services provides professional cleaning services for residential and commercial properties. Our services include but are not limited to:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Commercial cleaning</li>
          <li>Residential cleaning</li>
          <li>End of lease cleaning</li>
          <li>Specialized cleaning solutions</li>
        </ul>
      </div>

      {/* Section 3 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Booking and Cancellation</h2>
        <p>Our booking and cancellation policies are as follows:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Bookings must be made at least 24 hours in advance</li>
          <li>Cancellations must be made at least 12 hours before the scheduled service</li>
          <li>Late cancellations may be subject to cancellation fees</li>
          <li>We reserve the right to reschedule services due to unforeseen circumstances</li>
        </ul>
      </div>

      {/* Section 4 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Payment Terms</h2>
        <p>Payment terms and conditions:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Payment is due upon completion of service unless otherwise arranged</li>
          <li>We accept various payment methods including credit cards and bank transfers</li>
          <li>Prices are subject to change without notice</li>
          <li>Additional charges may apply for special requests or extra services</li>
        </ul>
      </div>

      {/* Section 5 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Service Guarantee</h2>
        <p>
          We strive to provide the highest quality cleaning services. If you are not satisfied with our service:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Please notify us within 24 hours of service completion</li>
          <li>We will arrange a re-clean at no additional cost</li>
          <li>If issues persist, we will work with you to find a satisfactory solution</li>
        </ul>
      </div>

      {/* Section 6 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Liability</h2>
        <p>Our liability is limited to:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Direct damages caused by our negligence</li>
          <li>The cost of the cleaning service completed</li>
          <li>We are not liable for incidental or consequential damages</li>
        </ul>
      </div>

      {/* Section 7 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Contact Information</h2>
        <p>For any questions regarding these Terms of Use, please contact us at:</p>
        <p className="mt-2">Email: hello@procleancorp.com.au</p>
        <p>Phone: 1300 494 983</p>
        <p>Address: 77 Garfield Street, Wentworthville NSW 2145</p>
      </div>

      {/* Section 8 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website.
        </p>
      </div>
    </div>
    </div>
    
  );
};

export default TermsOfUse;
