

const PrivacyPolicy = () => {
  return (
    <div className="py-10 lg:py-24 flex justify-center">
         <div className=" w-full max-w-[1440px] px-5 md:px-10 lg:px-20 text-[#333]">
      <h1 className="text-3xl font-semibold text-greenprimary mb-8">Privacy Policy</h1>

      {/* Section 1 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
        <p className="mb-2">We collect information that you provide directly to us, including:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Name and contact information</li>
          <li>Service address and details</li>
          <li>Payment information</li>
          <li>Communication preferences</li>
        </ul>
      </div>

      {/* Section 2 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
        <p className="mb-2">We use the information we collect to:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Provide and manage our cleaning services</li>
          <li>Process payments and send invoices</li>
          <li>Communicate with you about our services</li>
          <li>Improve our services and customer experience</li>
        </ul>
      </div>

      {/* Section 3 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Information Sharing</h2>
        <p className="mb-2">
          We do not sell or rent your personal information to third parties. We may share your information with:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Service providers who assist in our operations</li>
          <li>Professional advisors and consultants</li>
          <li>Law enforcement when required by law</li>
        </ul>
      </div>

      {/* Section 4 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal information from unauthorized access,
          alteration, disclosure, or destruction.
        </p>
      </div>

      {/* Section 5 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
        <p className="mb-2">You have the right to:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt out of marketing communications</li>
        </ul>
      </div>

      {/* Section 6 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p className="mt-2">Email: hello@procleancorp.com.au</p>
        <p>Phone: 1300 494 983</p>
        <p>Address: 77 Garfield Street,
Wentworthville NSW 2145</p>
      </div>

      {/* Section 7 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Updates to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The latest version will always be posted on our website.
        </p>
      </div>
    </div>
    </div>
   
  );
};

export default PrivacyPolicy;
