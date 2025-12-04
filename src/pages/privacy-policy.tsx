import React from "react";
import Footer from "~/components/global/Footer";
import PageHelmet from "~/components/global/PageHelmet";
import Header from "~/components/global/Header";
import MaxHeightWrapper from "~/components/global/MaxHeightWrapper";

export default function PrivacyPolicy() {
  return (
    <>
      <PageHelmet title="Privacy Policy" />
      <Header />
      <MaxHeightWrapper className="lg:mt-28! mb-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 font-mono text-4xl font-semibold text-black md:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>

          <div className="space-y-6 font-mono text-black">
            <div>
              <p className="text-sm text-gray-600">Last Updated On: 25-Jul-2024</p>
              <p className="text-sm text-gray-600">Effective Date: 25-Jul-2024</p>
            </div>

            <p className="text-base leading-relaxed">
              At KARM Labs (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our website (https://www.karmlabs.com) or any related services (collectively, the &quot;Service&quot;). By accessing or using the Service, you agree to the terms of this Privacy Policy. If you disagree, please discontinue use of our website.
            </p>

            <p className="text-base leading-relaxed">
              We may update this Policy from time to time to reflect changes in our practices or legal obligations. Any revisions will be posted on this page, and the revised Policy will take effect 180 days after posting. We encourage you to review this page regularly.
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-black md:text-3xl">1. Information We Collect</h2>
              <p className="text-base leading-relaxed">We may collect personal and non-personal information through various means, including:</p>

              <div className="pl-4">
                <h3 className="text-xl font-semibold text-black">Personal Information</h3>
                <p className="text-base leading-relaxed">When you fill out forms, contact us, or subscribe to our updates, we may collect:</p>
                <ul className="list-inside list-disc space-y-1 pl-4">
                  <li>Full Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                  <li>Company Name</li>
                  <li>Project Details or Inquiry Message</li>
                </ul>
              </div>

              <div className="pl-4">
                <h3 className="text-xl font-semibold text-black">Non-Personal Information</h3>
                <p className="text-base leading-relaxed">
                  We may collect non-identifiable data such as browser type, device information, IP address, location data, or pages visited. This information helps us improve the user experience and site performance.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-black md:text-3xl">2. How We Use Your Information</h2>
              <p className="text-base leading-relaxed">We use the information we collect for the following purposes:</p>
              <ul className="list-inside list-disc space-y-1 pl-4">
                <li>To communicate with you regarding inquiries, collaborations, or service updates</li>
                <li>To send marketing, newsletters, and promotional materials (only if you have opted in)</li>
                <li>To improve our website, services, and customer experience</li>
                <li>To manage client accounts, projects, and contracts</li>
                <li>To comply with legal obligations or resolve disputes</li>
              </ul>
              <p className="text-base leading-relaxed">
                If we intend to use your information for purposes not listed above, we will notify you and obtain consent before doing so.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-black md:text-3xl">3. Data Retention</h2>
              <p className="text-base leading-relaxed">
                We retain personal information for 90 days to 2 years after your last interaction with us or for as long as necessary to fulfill the purposes outlined in this Policy. Certain information may be retained longer if required by law or regulatory authorities, or to prevent fraud and enforce legal rights. Aggregated or anonymized data that does not personally identify you may be retained indefinitely.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-black md:text-3xl">4. Cookies and Analytics</h2>
              <p className="text-base leading-relaxed">
                KARM Labs does not use cookies to collect personal data.
              </p>
              <p className="text-base leading-relaxed">
                Our analytics tools anonymize all user data using daily rotating identifiers (&quot;salts&quot;) to ensure complete privacy and compliance. This allows us to track general site activity and performance without identifying specific users. If in the future we use cookies or other tracking technologies, you will be notified and given the option to manage or refuse them.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-black md:text-3xl">5. Third-Party Services</h2>
              <p className="text-base leading-relaxed">
                We may use third-party tools and service providers (for example, analytics providers, hosting partners, or email marketing platforms) to deliver and improve our services. These partners may process limited user information under strict confidentiality agreements and in compliance with data protection laws. We do not sell, rent, or trade your personal information to any third party.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-black md:text-3xl">6. Data Security</h2>
              <p className="text-base leading-relaxed">
                We implement industry-standard technical and organizational safeguards to protect your information from unauthorized access, disclosure, alteration, or destruction. These include encrypted connections (SSL), secure servers, and restricted internal access. However, no online system can guarantee absolute security. You share your information with us at your own risk, and we encourage you to use strong passwords and avoid sharing sensitive data unnecessarily.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-black md:text-3xl">7. Your Rights</h2>
              <p className="text-base leading-relaxed">
                Depending on your jurisdiction, you may have the following rights regarding your data:
              </p>
              <ul className="list-inside list-disc space-y-1 pl-4">
                <li>The right to access and request a copy of your personal data</li>
                <li>The right to correct or update inaccurate information</li>
                <li>The right to request deletion (&quot;right to be forgotten&quot;)</li>
                <li>The right to withdraw consent for marketing communications</li>
                <li>The right to data portability (receive your data in a usable format)</li>
                <li>The right to restrict or object to data processing</li>
              </ul>
              <p className="text-base leading-relaxed">
                To exercise these rights, please email <a href="mailto:rishav@karmlabs.com" className="font-semibold underline hover:text-gray-700">rishav@karmlabs.com</a>. We will respond within 30 days in accordance with applicable laws.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-black md:text-3xl">8. International Data Transfers</h2>
              <p className="text-base leading-relaxed">
                If you are accessing our Service from outside the United States, please note that your data may be processed in countries with different data protection laws. We ensure all such transfers comply with applicable data protection frameworks and safeguard your privacy.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-black md:text-3xl">9. Children&apos;s Privacy</h2>
              <p className="text-base leading-relaxed">
                Our Service is not directed at individuals under the age of 16. We do not knowingly collect personal information from minors. If we discover that a child has provided personal data, we will promptly delete it.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-black md:text-3xl">10. Links to Other Websites</h2>
              <p className="text-base leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any external sites you visit.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-black md:text-3xl">11. Changes to This Policy</h2>
              <p className="text-base leading-relaxed">
                We may revise this Privacy Policy from time to time. Updates will be posted on this page with a new &quot;Last Updated&quot; date. Continued use of our Service after changes are made constitutes your acceptance of the revised terms.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-black md:text-3xl">12. Contact / Data Protection Officer</h2>
              <p className="text-base leading-relaxed">
                If you have any questions, concerns, or complaints about this Privacy Policy or our data practices, don&apos;t hesitate to get in touch with us:
              </p>
              <div className="pl-4">
                <p className="font-semibold">KARM Labs</p>
                <p>Email: <a href="mailto:rishav@karmlabs.com" className="font-semibold underline hover:text-gray-700">rishav@karmlabs.com</a></p>
                <p>Address: 130 Sutherland Road, Boston, MA 02135</p>
                <p>Phone: <a href="tel:+18578320025" className="font-semibold underline hover:text-gray-700">+1 857-832-0025</a></p>
              </div>
              <p className="text-base leading-relaxed">
                We will review and address your concerns.
              </p>
            </div>
          </div>
        </div>
      </MaxHeightWrapper>
      <Footer forPage="contact" />
    </>
  );
}
