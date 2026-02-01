import LegalLayout from '@/components/LegalLayout';

export const metadata = {
    title: 'Cookie Policy | StaySmart',
    description: 'Cookie Policy for StaySmart PG Management System.',
};

export default function CookiePolicy() {
    return (
        <LegalLayout
            title="Cookie Policy"
            description="Understanding how we use cookies to improve your experience."
            lastUpdated="January 2026"
        >
            <h2>1. What Are Cookies</h2>
            <p>
                Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.
            </p>

            <h2>2. How StaySmart Uses Cookies</h2>
            <p>
                When you use and access the Service, we may place a number of cookies files in your web browser. We use cookies for the following purposes:
            </p>
            <ul>
                <li><strong>Essential Cookies:</strong> To authenticate users and prevent fraudulent use of user accounts.</li>
                <li><strong>Analytics Cookies:</strong> To track information how the Service is used so that we can make improvements.</li>
                <li><strong>Preference Cookies:</strong> To remember your information that changes the way the Service behaves or looks, such as your preferred language or the region you are in.</li>
            </ul>

            <h2>3. Third-Party Cookies</h2>
            <p>
                In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.
            </p>

            <h2>4. What Are Your Choices Regarding Cookies</h2>
            <p>
                If you&apos;d like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
            </p>
            <p>
                Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
            </p>

            <h2>5. More Information</h2>
            <p>
                You can learn more about cookies at the following third-party websites:
            </p>
            <ul>
                <li>AllAboutCookies: <a href="http://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer">http://www.allaboutcookies.org/</a></li>
                <li>Network Advertising Initiative: <a href="http://www.networkadvertising.org/" target="_blank" rel="noopener noreferrer">http://www.networkadvertising.org/</a></li>
            </ul>

            <h2>6. Contact Us</h2>
            <p>
                If you have any questions about our Cookie Policy, please contact us at hello@staysmart.in.
            </p>
        </LegalLayout>
    );
}
