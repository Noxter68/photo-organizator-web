import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Photo Organizer",
  description: "Privacy policy for the Photo Organizer website and software.",
  robots: { index: false, follow: false },
};

export default function PrivacyEN() {
  return (
    <LegalLayout locale="en">
      <h1>Privacy Policy</h1>
      <p><em>Last updated: April 2026</em></p>

      <p>
        At Photo Organizer, we take the protection of your personal data very seriously.
        This policy describes what data we collect, why, and how we use it.
      </p>

      <h2>1. Data Controller</h2>
      <p>
        Photo Organizer<br />
        Email: <a href="mailto:contact@photorganizer.org">contact@photorganizer.org</a>
      </p>

      <h2>2. Data Collected</h2>
      <h3>During Purchase</h3>
      <p>When you make a purchase, the following data is collected via Stripe:</p>
      <ul>
        <li>Email address</li>
        <li>Payment information (processed exclusively by Stripe, never stored on our servers)</li>
        <li>IP address (for security purposes)</li>
      </ul>

      <h3>While Browsing the Website</h3>
      <p>We do not collect any personal data during regular website browsing. No tracking cookies or third-party analytics tools are used.</p>

      <h3>While Using the Software</h3>
      <p>
        Photo Organizer operates <strong>entirely locally</strong> on your computer.
        No photos, file data, or personal information is sent to our servers
        or any third-party server. All image processing is done exclusively on your machine.
      </p>

      <h2>3. Purpose of Processing</h2>
      <p>Data collected during purchase is used solely to:</p>
      <ul>
        <li>Process your order and deliver your license</li>
        <li>Send you a confirmation email with download information</li>
        <li>Provide customer support if you contact us</li>
      </ul>

      <h2>4. Legal Basis</h2>
      <p>
        The processing of your data is based on the performance of the sales contract (Article 6.1.b of GDPR)
        and your consent for email communications.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        Your purchase data is retained for the duration necessary for managing your license
        and complying with our legal and accounting obligations (maximum 10 years for billing data).
      </p>

      <h2>6. Data Sharing</h2>
      <p>Your data is never sold or shared for commercial purposes. It may be transmitted to:</p>
      <ul>
        <li><strong>Stripe</strong> — for secure payment processing (<a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">Stripe privacy policy</a>)</li>
        <li><strong>Resend</strong> — for transactional email delivery</li>
      </ul>

      <h2>7. Your Rights</h2>
      <p>Under GDPR, you have the following rights:</p>
      <ul>
        <li><strong>Right of access</strong> — obtain a copy of your personal data</li>
        <li><strong>Right to rectification</strong> — correct inaccurate data</li>
        <li><strong>Right to erasure</strong> — request deletion of your data</li>
        <li><strong>Right to portability</strong> — receive your data in a structured format</li>
        <li><strong>Right to object</strong> — object to the processing of your data</li>
      </ul>
      <p>
        To exercise any of these rights, contact us at{" "}
        <a href="mailto:contact@photorganizer.org">contact@photorganizer.org</a>.
        We will respond within 30 days.
      </p>

      <h2>8. Security</h2>
      <p>
        We implement appropriate technical and organizational measures to protect
        your data against unauthorized access, modification, disclosure, or destruction.
        Payments are processed via Stripe, which is PCI DSS Level 1 certified.
      </p>

      <h2>9. Cookies</h2>
      <p>
        This website does not use any tracking or advertising cookies.
        Only strictly necessary technical cookies may be used for the website to function.
      </p>

      <h2>10. Changes</h2>
      <p>
        We reserve the right to modify this privacy policy at any time.
        Any changes will be published on this page with an updated date.
      </p>

      <h2>11. Contact</h2>
      <p>
        For any questions regarding this policy:<br />
        <a href="mailto:contact@photorganizer.org">contact@photorganizer.org</a>
      </p>
    </LegalLayout>
  );
}
