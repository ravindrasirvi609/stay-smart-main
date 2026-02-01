import LegalLayout from '@/components/LegalLayout';

export const metadata = {
    title: 'Privacy Policy | StaySmart',
    description: 'Privacy Policy for StaySmart PG Management System.',
};

export default function PrivacyPolicy() {
    return (
        <LegalLayout
            title="Privacy Policy"
            description="How we collect, use, and protect your data at StaySmart."
            lastUpdated="January 2026"
        >
            <h2>1. Information We Collect</h2>
            <p>
                We collect information that you provide directly to us when you use our StaySmart PG Management System. This includes:
            </p>
            <ul>
                <li><strong>Account Information:</strong> Name, email address, phone number, and password.</li>
                <li><strong>Tenant Information:</strong> Names, contact details, ID proofs, and rent history of tenants provided by PG owners.</li>
                <li><strong>Property Information:</strong> PG address, room details, and amenity information.</li>
                <li><strong>Payment Information:</strong> Transaction details related to rent payments and subscriptions.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>
                We use the collected information for various purposes, including:
            </p>
            <ul>
                <li>Providing, maintaining, and improving our services.</li>
                <li>Processing transactions and sending related information.</li>
                <li>Sending technical notices, updates, and support messages.</li>
                <li>Responding to your comments, questions, and requests.</li>
                <li>Monitoring and analyzing trends, usage, and activities.</li>
            </ul>

            <h2>3. Data Protection</h2>
            <p>
                We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.
            </p>

            <h2>4. Sharing of Information</h2>
            <p>
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except as described in this policy. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
            </p>

            <h2>5. Your Rights</h2>
            <p>
                You have the right to access, update, or delete the information we have on you. Whenever made possible, you can update your personal information directly within your account settings section.
            </p>

            <h2>6. Changes to This Privacy Policy</h2>
            <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>

            <h2>7. Contact Us</h2>
            <p>
                If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
                Email: hello@staysmart.in<br />
                Address: Bangalore, India
            </p>
        </LegalLayout>
    );
}
