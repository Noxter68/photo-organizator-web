import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Legal Notice — Photo Organizer",
  description: "Legal notice for the Photo Organizer website.",
  robots: { index: false, follow: false },
};

export default function LegalEN() {
  return (
    <LegalLayout locale="en">
      <h1>Legal Notice</h1>
      <p><em>Last updated: April 2026</em></p>

      <h2>Website Publisher</h2>
      <p>
        The website <strong>photorganizer.org</strong> is published by:<br />
        Photo Organizer<br />
        Email: <a href="mailto:contact@photorganizer.org">contact@photorganizer.org</a>
      </p>

      <h2>Hosting</h2>
      <p>
        This website is hosted by:<br />
        Vercel Inc.<br />
        440 N Barranca Ave #4133, Covina, CA 91723, United States<br />
        Website: <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content on this website (text, images, screenshots, logo, design)
        is the exclusive property of Photo Organizer and is protected by applicable
        intellectual property laws.
      </p>
      <p>
        Any reproduction, representation, modification, or exploitation of any part
        of this website&apos;s content, by any means, without prior written authorization,
        is strictly prohibited.
      </p>

      <h2>Liability</h2>
      <p>
        The publisher strives to provide accurate information.
        However, they cannot be held responsible for omissions, inaccuracies, or
        deficiencies in updating such information.
      </p>
      <p>
        Photo Organizer software is provided &quot;as is&quot;. The publisher does not guarantee
        the absence of bugs or errors and shall not be liable for any direct or indirect
        damage resulting from the use of the software.
      </p>

      <h2>Personal Data</h2>
      <p>
        For all information regarding the processing of your personal data,
        please refer to our{" "}
        <a href="/en/privacy">privacy policy</a>.
      </p>

      <h2>Payment</h2>
      <p>
        Payments are securely processed by{" "}
        <a href="https://stripe.com" target="_blank" rel="noopener noreferrer">Stripe</a>.
        No banking information is stored on our servers.
      </p>
      <p>
        The software price is a one-time payment. No subscription or recurring fees
        will be charged. All sales are final and non-refundable.
      </p>

      <h2>Applicable Law</h2>
      <p>
        These legal notices are subject to French law. In case of dispute,
        French courts shall have exclusive jurisdiction.
      </p>

      <h2>Contact</h2>
      <p>
        For any questions regarding these legal notices:<br />
        <a href="mailto:contact@photorganizer.org">contact@photorganizer.org</a>
      </p>
    </LegalLayout>
  );
}
