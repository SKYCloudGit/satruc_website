import React from "react";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="pt-32 pb-20 bg-gradient-to-br from-satruc-50 to-white">
        <h1 className="mb-4 font-bold text-3xl">Privacy Policy</h1>

        <div className="container py-5">
 

          <b className="mt-4">1. Purpose and Commitment</b>
          <p>
            At Satruc Appliances Private Limited (“Satruc”, “we”, “our” or “us”), we value your privacy and are committed to safeguarding the personal data you share with us. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit our websites, interact with us offline, or engage with our services.
          </p>

          <b className="mt-4">2. Scope of the Policy</b>
          <p>This policy applies to:</p>
          <ul className="list-disc list-inside">
            <li>Visitors to our websites</li>
            <li>Job applicants applying through our Careers page or contact forms</li>
            <li>Vendors, customers, and business partners who interact with us</li>
          </ul>

          <b className="mt-4">3. Information We Collect</b>
          <p>Depending on how you interact with us, we may collect:</p>
          <ul className="list-disc list-inside">
            <li><strong>Personal Information:</strong> Name, email, phone, educational qualifications, resumes, contact details, and other data related to your interaction with us.</li>
            <li><strong>Business Information:</strong> Order history, vendor credentials, tax details, and related information.</li>
          </ul>

          <b className="mt-4">4. How We Use Your Information</b>
          <p>We use the collected information for purposes such as:</p>
          <ul className="list-disc list-inside">
            <li>Responding to business, vendor, or customer inquiries</li>
            <li>Processing job applications</li>
            <li>Fulfilling product or service orders</li>
            <li>Improving our website and services</li>
            <li>Ensuring compliance with legal and regulatory obligations</li>
            <li>Internal reporting, audits, or performance analysis</li>
          </ul>

          <b className="mt-4">5. Legal Basis for Processing</b>
          <p>We process your data under the following legal bases:</p>
          <ul className="list-disc list-inside">
            <li>Your consent (e.g., submitting a form)</li>
            <li>For fulfilling a contract or commercial engagement</li>
            <li>To comply with legal obligations</li>
            <li>Our legitimate business interests in managing and improving our operations</li>
          </ul>

          <b className="mt-4">6. Data Sharing and Disclosure</b>
          <p>We do not sell or rent your personal information.</p>
          <p>We may share your data with:</p>
          <ul className="list-disc list-inside">
            <li>Our internal departments and authorized personnel</li>
            <li>Third-party service providers under strict confidentiality agreements</li>
            <li>Government or regulatory authorities as required by law</li>
            <li>Partners or consultants assisting in business functions</li>
          </ul>

          <b className="mt-4">7. Data Retention</b>
          <p>
            We retain your personal information only as long as necessary to fulfil the purposes outlined in this policy, or as mandated by applicable laws (e.g., labor, tax, or contractual obligations).
          </p>

          <b className="mt-4">8. Data Security</b>
          <p>We maintain robust security measures to protect your data, including:</p>
          <ul className="list-disc list-inside">
            <li>Role-based access control</li>
            <li>Secure cloud storage and encrypted connections (HTTPS)</li>
            <li>Internal data protection training and controls</li>
            <li>Regular system audits and data access logging</li>
          </ul>

          <b className="mt-4">9. Your Rights</b>
          <p>Under applicable Indian privacy law, you have the right to:</p>
          <ul className="list-disc list-inside">
            <li>Request access to your personal data</li>
            <li>Correct or update your data</li>
            <li>Withdraw consent for specific processing</li>
            <li>Request deletion (where applicable)</li>
          </ul>
          <p>To exercise these rights, please contact us at <a href="mailto:hr@satrucindia.com" className="text-blue-600 underline">hr@satrucindia.com</a>.</p>

          <b className="mt-4">10. Children’s Privacy</b>
          <p>
            Our websites and services are not directed at individuals under the age of 18. We do not knowingly collect data from children. If we become aware of such collection, we will promptly delete the information.
          </p>

          <b className="mt-4">11. Changes to This Policy</b>
          <p>
            We may update this Privacy Policy periodically to reflect changes in our practices, technology, or legal requirements. We encourage you to review this page regularly.
          </p>

          <b className="mt-4">12. Contact Us</b>
          <p>
            If you have questions or concerns about this policy or wish to exercise your data rights, contact us at:
          </p>
         
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
