import LegalLayout from '@/components/LegalLayout';

export const metadata = {
    title: 'GDPR Compliance | StaySmart',
    description: 'GDPR Compliance information for StaySmart PG Management System.',
};

export default function GDPRPage() {
    return (
        <LegalLayout
            title="GDPR Compliance"
            description="Our commitment to data protection and privacy under GDPR."
            lastUpdated="January 2026"
        >
            <h2>1. Introduction</h2>
            <p>
                The General Data Protection Regulation (GDPR) is a regulation in EU law on data protection and privacy in the European Union and the European Economic Area. StaySmart is committed to complying with the GDPR and protecting the personal data of our users.
            </p>

            <h2>2. Your Rights Under GDPR</h2>
            <p>
                Under GDPR, you have the following rights:
            </p>
            <ul>
                <li><strong>The right to be informed:</strong> You have the right to be informed about the collection and use of your personal data.</li>
                <li><strong>The right of access:</strong> You have the right to access your personal data and supplementary information.</li>
                <li><strong>The right to rectification:</strong> You have the right to have inaccurate personal data rectified, or completed if it is incomplete.</li>
                <li><strong>The right to erasure:</strong> You have the right to have personal data erased (also known as the right to be forgotten).</li>
                <li><strong>The right to restrict processing:</strong> You have the right to request the restriction or suppression of your personal data.</li>
                <li><strong>The right to data portability:</strong> You have the right to obtain and reuse your personal data for your own purposes across different services.</li>
                <li><strong>The right to object:</strong> You have the right to object to the processing of your personal data in certain circumstances.</li>
            </ul>

            <h2>3. Data Processing</h2>
            <p>
                We process personal data only when we have a lawful basis to do so. This includes when the processing is necessary for the performance of a contract, when we have a legal obligation, or when you have given your consent.
            </p>

            <h2>4. Data Transfers</h2>
            <p>
                StaySmart may store and process data in various locations. We ensure that any transfers of data outside the EEA are done in compliance with GDPR, typically through Standard Contractual Clauses.
            </p>

            <h2>5. Data Breaches</h2>
            <p>
                In the event of a data breach, we have procedures in place to report the breach to the relevant authorities and notify affected individuals as required by GDPR.
            </p>

            <h2>6. Data Protection Officer</h2>
            <p>
                For matters related to GDPR and data protection, you can reach our Data Protection team at hello@staysmart.in.
            </p>

            <h2>7. Contact Information</h2>
            <p>
                If you have questions about our GDPR compliance, please contact us at:
            </p>
            <p>
                StaySmart Team<br />
                Email: hello@staysmart.in<br />
                Address: Bangalore, India
            </p>
        </LegalLayout>
    );
}
