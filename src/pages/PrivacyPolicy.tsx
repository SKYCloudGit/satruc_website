import React from "react";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="pt-32 pb-20 bg-gradient-to-br from-satruc-50 to-white">
        <div className="container py-5">
          <h1 className="mb-4 font-bold text-3xl">Privacy Policy</h1>
          <p className="mb-6">Satruc Appliances Private Limited</p>

          <h2 className="font-semibold mt-6">Introduction</h2>
          <p>
            At Satruc Appliances Private Limited ("we", "our", or "us"), we are
            committed to protecting your privacy and personal information. This
            Privacy Policy explains how we collect, use, store, and safeguard
            your information when you interact with our website, services, or
            platform. By using our services, you agree to the practices
            described in this policy.
          </p>

          <h2 className="font-semibold mt-6">Information We Collect</h2>
          <p>We may collect both personal and non-personal data as outlined below:</p>

          <h3 className="mt-4 font-medium">Personal Information</h3>
          <ul className="list-disc list-inside">
            <li>Name</li>
            <li>Address</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Fax number</li>
            <li>Billing and payment information</li>
            <li>Dates and types of services used</li>
            <li>Customer service interactions</li>
          </ul>

          <h3 className="mt-4 font-medium">Usage Data</h3>
          <ul className="list-disc list-inside">
            <li>Pages visited</li>
            <li>Time spent on each page</li>
            <li>Navigation actions</li>
            <li>Links clicked</li>
          </ul>

          <h3 className="mt-4 font-medium">Technical Data</h3>
          <ul className="list-disc list-inside">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device type and operating system</li>
            <li>Referring websites</li>
            <li>Device identifiers</li>
          </ul>

          <h3 className="mt-4 font-medium">Cookies and Tracking Technologies</h3>
          <p>
            We use cookies and similar technologies (e.g., pixels, web beacons)
            to improve your browsing experience, analyse website performance,
            and personalize content.
          </p>
          <p>Types of Cookies:</p>
          <ul className="list-disc list-inside">
            <li>Essential Cookies – Required for login and core functionality</li>
            <li>Performance Cookies – Help track user behaviour and website performance</li>
            <li>Functional Cookies – Store user preferences (e.g., language)</li>
            <li>Marketing Cookies – Used for delivering relevant advertisements</li>
          </ul>
          <p>
            You can manage cookie settings through your browser. Disabling
            cookies may limit some functionality.
          </p>

          <h2 className="font-semibold mt-6">How We Use Your Information</h2>
          <ul className="list-disc list-inside">
            <li>Provide, manage, and improve our services</li>
            <li>Process payments and billing</li>
            <li>Communicate with you for customer service, updates, or marketing (if opted in)</li>
            <li>Understand user behaviour and trends</li>
            <li>Comply with legal and regulatory obligations</li>
            <li>Prevent fraudulent activity or abuse</li>
            <li>Respond to user inquiries or support requests</li>
          </ul>

          <h2 className="font-semibold mt-6">Disclosure of Information</h2>
          <p>We do not sell your personal data. We may share your data:</p>
          <ul className="list-disc list-inside">
            <li>With trusted service providers (e.g., payment processors, IT service providers)</li>
            <li>To comply with legal requirements or court orders</li>
            <li>To protect rights, safety, or enforce policies</li>
            <li>In connection with a merger, acquisition, or asset transfer</li>
            <li>With your consent</li>
          </ul>
          <p>
            We may share aggregated or anonymized data that does not identify
            individuals.
          </p>

          <h2 className="font-semibold mt-6">Your Rights and Choices</h2>
          <p>Depending on your location, you may have the following rights:</p>
          <ul className="list-disc list-inside">
            <li>Access your personal data</li>
            <li>Correct or update inaccurate information</li>
            <li>Request deletion of your data</li>
            <li>Restrict or object to data processing</li>
            <li>Withdraw consent at any time</li>
            <li>Request a copy of your data in a portable format</li>
            <li>File a complaint with a supervisory authority</li>
          </ul>
          <p>
            To exercise these rights, please contact us at{" "}
            <a
              href="mailto:hr@satrucindia.com"
              className="text-blue-600 underline"
            >
              hr@satrucindia.com
            </a>.
          </p>

          <h2 className="font-semibold mt-6">Children's Privacy</h2>
          <p>
            Our website and services are not directed to children under the age
            of 18. We do not knowingly collect personal information from minors.
            If we discover that such data has been collected inadvertently, we
            will promptly delete it.
          </p>

          <h2 className="font-semibold mt-6">International Data Transfers</h2>
          <p>
            If your information is transferred outside your country of
            residence, we ensure that appropriate safeguards are in place to
            maintain the level of protection required by applicable data
            protection laws.
          </p>

          <h2 className="font-semibold mt-6">Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the content or privacy practices of these sites. We
            encourage users to review the privacy policies of any external
            websites they visit.
          </p>

          <h2 className="font-semibold mt-6">Data Security</h2>
          <p>We use industry-standard security measures to protect your data, including:</p>
          <ul className="list-disc list-inside">
            <li>Secure Servers</li>
            <li>SSL Encryption</li>
            <li>Access Controls</li>
            <li>Regular Security Audits</li>
            <li>Employee Privacy Training</li>
          </ul>
          <p>
            While we take these precautions, no method of transmission or
            storage is 100% secure.
          </p>

          <h2 className="font-semibold mt-6">Data Retention</h2>
          <p>We retain personal information only as long as necessary to:</p>
          <ul className="list-disc list-inside">
            <li>Provide our services</li>
            <li>Fulfil contractual or legal obligations</li>
            <li>Resolve disputes</li>
            <li>Enforce our agreements</li>
          </ul>
          <p>
            Once data is no longer needed, we securely delete or anonymize it.
          </p>

          <h2 className="font-semibold mt-6">Log Files</h2>
          <p>
            We may use IP addresses and device identifiers for analytics,
            troubleshooting, and monitoring website usage. This data may be
            linked to personal information during technical investigations.
          </p>

          <h2 className="font-semibold mt-6">Email Communications</h2>
          <p>
            Customers may receive emails related to transactions, system
            updates, or promotional offers (if subscribed). You may unsubscribe
            from marketing emails at any time by following the opt-out
            instructions in the email or contacting{" "}
            <a
              href="mailto:hr@satrucindia.com"
              className="text-blue-600 underline"
            >
              hr@satrucindia.com
            </a>
            . Important service-related notifications cannot be opted out of.
          </p>

          <h2 className="font-semibold mt-6">Policy Changes</h2>
          <p>
            We may revise this Privacy Policy periodically. Any changes will be
            posted here with an updated effective date. We recommend checking
            this policy regularly for updates.
          </p>

          <h2 className="font-semibold mt-6">Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding your
            personal information or this Privacy Policy, please contact:
          </p>
          <p>Satruc Appliances Private Limited</p>
          <p>
            Email:{" "}
            <a
              href="mailto:hr@satrucindia.com"
              className="text-blue-600 underline"
            >
              hr@satrucindia.com
            </a>
          </p>

          <h2 className="font-semibold mt-6">Conclusion</h2>
          <p>
            We value the trust you place in us and are committed to maintaining
            the confidentiality and security of your personal data. Thank you
            for choosing Satruc Appliances Private Limited.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
