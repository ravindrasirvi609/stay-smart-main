import LegalLayout from '@/components/LegalLayout';

export const metadata = {
    title: 'Terms of Service | StaySmart',
    description: 'Terms of Service for StaySmart PG Management System.',
};

export default function TermsOfService() {
    return (
        <LegalLayout
            title="Terms of Service"
            description="The rules and guidelines for using StaySmart."
            lastUpdated="January 2026"
        >
            <h2>1. Acceptance of Terms</h2>
            <p>
                By accessing and using StaySmart, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>

            <h2>2. Use License</h2>
            <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on StaySmart for personal, non-commercial transitory viewing only.
            </p>
            <ul>
                <li>Modify or copy the materials.</li>
                <li>Use the materials for any commercial purpose, or for any public display.</li>
                <li>Attempt to decompile or reverse engineer any software contained on StaySmart.</li>
                <li>Remove any copyright or other proprietary notations from the materials.</li>
            </ul>

            <h2>3. Disclaimer</h2>
            <p>
                The materials on StaySmart are provided on an &apos;as is&apos; basis. StaySmart makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2>4. Limitations</h2>
            <p>
                In no event shall StaySmart or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on StaySmart, even if StaySmart or a StaySmart authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2>5. Revisions and Errata</h2>
            <p>
                The materials appearing on StaySmart could include technical, typographical, or photographic errors. StaySmart does not warrant that any of the materials on its website are accurate, complete, or current. StaySmart may make changes to the materials contained on its website at any time without notice.
            </p>

            <h2>6. Governing Law</h2>
            <p>
                Any claim relating to StaySmart shall be governed by the laws of India without regard to its conflict of law provisions.
            </p>

            <h2>7. Subscription and Payments</h2>
            <p>
                StaySmart offers various subscription plans. By subscribing, you agree to pay the fees associated with the chosen plan. All payments are non-refundable unless otherwise specified.
            </p>

            <h2>8. Contact</h2>
            <p>
                For any questions regarding these terms, please contact us at hello@staysmart.in.
            </p>
        </LegalLayout>
    );
}
